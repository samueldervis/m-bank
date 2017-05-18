import {Component} from "@angular/core";
import {LoadingController, MenuController, NavController} from "ionic-angular";
import {ActionSheets} from "../action-sheets/action-sheets";
import {MyAllert} from "../my-allert/my-allert";
import {MyCommon} from "../my-common/my-common";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, menu: MenuController) {
    menu.enable(true);
    this.initializeItems();
  }

  items = [];

  itemSelected(item) {
    this.presentLoading();
    this.navCtrl.push(item);
  }

  initializeItems() {
    this.items = [
      {name: "Common", page: MyCommon},
      {name: "Action Sheets", page: ActionSheets},
      {name: "Alerts", page: MyAllert}
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1500
    });
    loader.present();
  }
}
