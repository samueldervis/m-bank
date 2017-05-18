import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the MyAllert page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-allert',
  templateUrl: 'my-allert.html',
})
export class MyAllert {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAllert');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: "On my way",
      subTitle: "Niko survey",
      message: "Enter a name for thadsdasdasding",
      buttons: ['OK', {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Umenidoubt');
        }
      }]
    });
    alert.present();
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: "Where are you from?",
      subTitle: "Required info",
      message: "Enter a name for this new album you're so keen on adding",
      // inputs: [
      //   {
      //     name: 'place',
      //     placeholder: 'Place you expect me'
      //   },
      // ],
      buttons: ['OK', {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Umenidoubt');
        }
      }]
    });
    prompt.addInput({
      type: 'checkbox',
      label: 'Alderaan',
      value: 'value1',
      checked: true
    });
    prompt.addInput({
      type: 'radio',
      label: 'Strict',
      value: 'strict',
      checked: true
    });
    prompt.present();
  }
}
