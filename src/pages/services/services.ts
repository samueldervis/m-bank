import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Balance} from "../balance/balance";
import {Pin} from "../pin/pin";
import {Tips} from "../tips/tips";

/**
 * Generated class for the Services page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class Services {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Services');
  }

  deposit() {
    let prompt = this.alertCtrl.create({
      title: "Deposit",
      message: "Please enter the amount to deposit",
      inputs: [
        {
          name: 'amount',
          placeholder: 'eg 2500'
        },
      ],
      buttons: ['OK', {
        text: 'Back',
        role: 'cancel',
        handler: () => {
          this.updateBalance();
        }
      }]
    });
    prompt.present();

  }

  stopCheque() {
    let prompt = this.alertCtrl.create({
      title: "Stop Cheque",
      message: "Please enter the cheque no.",
      inputs: [
        {
          name: 'cheque',
          placeholder: 'eg 09-2500'
        },
      ],
      buttons: ['OK', {
        text: 'Back',
        role: 'cancel',
        handler: () => {
          // this.updateBalance();
        }
      }]
    });
    prompt.present();

  }

  tips() {
    this.navCtrl.push(Tips);
  }

  changePin() {
    this.navCtrl.push(Pin);
  }

  checkBalance() {
    this.navCtrl.push(Balance);
  }

  updateBalance() {

  }
}
