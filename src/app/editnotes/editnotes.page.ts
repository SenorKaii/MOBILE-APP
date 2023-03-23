import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from 'src/app/models/post.mode';

@Component({
  selector: 'app-editnotes',
  templateUrl: './editnotes.page.html',
  styleUrls: ['./editnotes.page.scss'],
})
export class EditnotesPage implements OnInit {

  post = {} as Post;
  id: any;

  constructor(
    private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private navCtrl: NavController
    ) {
    this.id = this.actRoute.snapshot.paramMap.get("id");
   }

  ngOnInit() {
    this.getPostById(this.id);
  }

  async getPostById(id: string){
    //show loader
    let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();
  
  
    this.firestore.doc("notes/" + id)
    .valueChanges()
    .subscribe((data: any) => {
      this.post.title = data["title"];
      this.post.category = data["category"];
      this.post.description = data["description"];
    });

    //dismiss loader
    (await loader).dismiss();
    }

    async updatePost(post: Post){
      if(this.formValidation()) {
        //show loader
        let loader = this.loadingCtrl.create({
        message: "Please wait..."
        });
        (await loader).present();
    
        try{
         
          await this.firestore.doc("notes/" + this.id).update(post);
        } catch(e: any){
          this.showToast(e);
        }
        //dismiss loader
        (await loader).dismiss();
    
        //redirect to view post page
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
