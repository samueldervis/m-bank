import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-pin',
  templateUrl: 'pin.html',
})
export class Pin {
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public toastCtrl: ToastController, private auth: AuthService, private storage: Storage) {
    this.user = this.auth.getUserInfo();
  }

  message: any = null;
  pin: any = {};

  ionViewDidLoad() {

  }

  changePin() {
    if (this.user.pin != this.pin.old) {
      this.message = "Invalid current pin";
    } else {
      if (this.pin.newpin != this.pin.confirm) {
        this.message = "PIN do not match";
      }
      else {
        this.message = "PIN has been changed";
        this.user.pin = this.pin.newpin;
        this.storage.set(this.user.account, this.user);
      }
    }
    this.presentToast();
  }

  goBack() {
    this.navCtrl.pop();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: this.message,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }
}
