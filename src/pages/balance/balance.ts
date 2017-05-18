import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";

/**
 * Generated class for the Balance page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-balance',
  templateUrl: 'balance.html',
})
export class Balance {
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController, private auth: AuthService) {
    this.user = this.auth.getUserInfo();
  }


  ionViewDidLoad() {

  }

  goBack() {
    this.navCtrl.pop();
  }

}
