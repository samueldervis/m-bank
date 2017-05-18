import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {

  createSuccess = false;
  user: any = {};

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController) {
  }

  public register() {
    this.auth.register(this.user).subscribe(success => {
        if (success) {
          this.createSuccess = true;
          this.showPopup("Success", "Account created.");
        } else {
          this.showPopup("Error", "Problem creating account.");
        }
      },
      error => {
        this.showPopup("Error", error);
      });
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.nav.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }

  goBack() {
    this.nav.pop();
  }
}
