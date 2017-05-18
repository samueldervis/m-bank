import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the Pin page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pin',
  templateUrl: 'pin.html',
})
export class Pin {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pin: any = {};

  ionViewDidLoad() {

  }

  goBack() {
    this.navCtrl.pop();
  }
}
