import {Component} from '@angular/core';
import {AlertController, IonicPage, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Register} from "../register/register";
import {Services} from "../services/services";
import {AuthService} from "../../providers/auth-service";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loadingCtrl: LoadingController, private auth: AuthService, private alertCtrl: AlertController,) {
  }

  loading: Loading;
  user: any = {};

  ionViewDidLoad() {

  }

  login() {
    this.showLoading();
    this.auth.login(this.user).subscribe(allowed => {
        if (allowed) {
          this.navCtrl.setRoot(Services);
        } else {
          this.showError("Access Denied");
        }
      },
      error => {
        this.showError(error);
      });
  }

  register() {
    this.navCtrl.push(Register);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
