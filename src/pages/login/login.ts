import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Register} from "../register/register";
import {Services} from "../services/services";

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,) {
  }

  user: any = {};

  ionViewDidLoad() {

  }

  login() {
    this.presentLoading();
    this.navCtrl.push(Services);
  }

  register() {
    this.navCtrl.push(Register);
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1500
    });
    loader.present();
  }
}
