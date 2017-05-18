import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

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

  updateBalance() {

  }
}
