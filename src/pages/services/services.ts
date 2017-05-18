import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Balance} from "../balance/balance";
import {Pin} from "../pin/pin";
import {Tips} from "../tips/tips";
import {AuthService} from "../../providers/auth-service";
import {Login} from "../login/login";
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class Services {
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController, private auth: AuthService,private storage: Storage) {
    this.user = this.auth.getUserInfo();
  }

  ionViewDidLoad() {

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
      buttons: [
        {
          text: "Ok",
          handler: data => {
            this.updateBalance(data);
          }
        },
        {
          text: 'Back',
          role: 'cancel'
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

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot(Login)
    });
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

  updateBalance(data) {
    this.user.balance = parseInt(this.user.balance) + parseInt(data.amount);
    this.storage.set(this.user.account, this.user);
  }
}
