import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController} from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  posts: any;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private firestore: AngularFirestore,
    private actionSheetCtrl: ActionSheetController,
    private router: Router
    ) {}

  ngOnInit() {}

  async presentActionSheet(id: string) {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.deletePost(id);
          }
        },
        {
          text: 'View',
          icon: 'settings',
          handler: () => {
            this.router.navigate(['/editnotes', id]);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });

  await actionSheet.present();
}

  ionViewWillEnter() {
    this.getPosts();
  }

  async getPosts(){
    //show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    try {
    this.firestore
    .collection("notes")
    .snapshotChanges()
    .subscribe((data: any) => { 
      this.posts = data.map((e: any) => {
        return {
          id: e.payload.doc.id,
          title: e.payload.doc.data()["title"],
          category: e.payload.doc.data()["category"],
          description: e.payload.doc.data()["description"],
        };
      });

      loader.dismiss();
    });
    
    } catch(e: any){
    this.showToast(e);

    }
  }

  async deletePost(id: string){
  //show loader
  let loader = this.loadingCtrl.create({
  message: "Please wait..."
  });
  (await loader).present();

  await this.firestore.doc("notes/" + id).delete();

  //dismiss loader
  (await loader).dismiss();
  }

  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
  }

}
