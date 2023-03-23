import { Component } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Contact } from '../models/post.mode';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contact = {} as Contact;

  newsList = [
    {
      image: 'assets/news1.jpg'
    },
    {
      image: 'assets/news2.png'
    },
    {
      image: 'assets/news3.jpg'
    },
    {
      image: 'assets/news4.png'
    },
    {
      image: 'assets/news5.png'
    },
    {
      image: 'assets/news6.png'
    }
  ];

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
   };

   async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Please fill up the form',
      buttons: [
        {
          text: 'Cancel',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Submit',
          cssClass: 'alert-button-confirm',
          handler: async (data) => {
            const contact: Contact = {
              name: data[0],
              email: data[1],
              subject: data[2],
              message: data[3]
            };
            await this.createContact(contact);
          }
        },
      ],
      inputs: [
        {
          placeholder: 'Name',
        },
        {
          type: 'email',
          placeholder: 'Email',
        },
        {
          placeholder: 'Subject',
        },
        {
          type: 'textarea',
          placeholder: 'Type your message here...',
        },
      ],
    });
  
    await alert.present();
  }

  constructor(
    private alertController: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore
  ) {}

  async createContact(contact: Contact) {
  if (this.formValidation(contact)) {
    //show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await loader.present();

    try {
      await this.firestore.collection("contact").add(contact);
    } catch (e: any) {
      this.showToast(e);
    }

    //dismiss loader
    await loader.dismiss();

    //redirect to notes page
    this.navCtrl.navigateRoot("home");
  }
}

  formValidation(contact: Contact) {
    if (!contact.name) {
      this.showToast("You forgot to enter your name!");
      return false;
    }
  
    if (!contact.email) {
      this.showToast("You forgot to enter your email!");
      return false;
    }
  
    if (!contact.subject) {
      this.showToast("You forgot to enter your subject!");
      return false;
    }
  
    if (!contact.message) {
      this.showToast("You forgot to enter your message!");
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
