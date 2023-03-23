import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { Howl } from 'howler';
import { User } from '../models/post.mode';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {} as User;
  sound: any;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
    private platform: Platform,
  ) {
    this.platform.ready().then(() => {
      // Load the sound file
      this.sound = new Howl({
        src: ['assets/ohaiyo.mp3']
      });
    });
  }

  async login(user: User){
    if(this.formValidation()) {
      this.sound.play();
    //show loader
    let loader = this.loadingCtrl.create({
      message: "Please wait..."
    });
    (await loader).present();
    
    try {
      await this.afAuth
      .signInWithEmailAndPassword(user.studentEmail, user.password)
      .then (data => {
          console.log(data);


      //redirect to home page
      this.navCtrl.navigateRoot("home");
      })
    } catch (e: any) {
      this.showToast(e);
    }
   
    //dismis loader
    (await loader).dismiss();
    }
  }

  formValidation(){
    if(!this.user.studentEmail){
      this.showToast("You forgot to enter your student email / The email is unavailable");
      return false;
    }


    if(!this.user.password){
      this.showToast("You forgot to enter your password / The password is incorrect");
      return false;
    }


    return true;
  }


  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
  }

  ngOnInit() {
  }

}
