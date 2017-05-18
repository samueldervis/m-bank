import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Balance');
  }

  goBack() {
    this.navCtrl.pop();
  }

  checkBalance() {
    this.navCtrl.push(Balance);
  }
}
