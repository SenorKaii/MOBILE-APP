import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from '../models/post.mode';

@Component({
  selector: 'app-createnotes',
  templateUrl: './createnotes.page.html',
  styleUrls: ['./createnotes.page.scss'],
})
export class CreatenotesPage implements OnInit {

  post = {} as Post;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {}

  async createPost(post: Post){
    if(this.formValidation()) {
    //show loader
    let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();

    try{
      await this.firestore.collection("notes").add(post);
    } catch(e: any){
      this.showToast(e);
    }
    //dismiss loader
    (await loader).dismiss();

    //redirect to notes page
    this.navCtrl.navigateRoot("notes");
    }
  }

  formValidation(){
    if(!this.post.title){
      this.showToast("You forgot to insert title!");
      return false;
    }

    if(!this.post.category){
      this.showToast("Please choose a category!");
      return false;
    }

    if(!this.post.description){
      this.showToast("Please write your description!");
      return false;
    }

    return true;
  }

  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then(toastData => toastData.present());
  }
}
