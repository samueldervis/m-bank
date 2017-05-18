import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {HomePage} from '../pages/home/home';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ActionSheets} from "../pages/action-sheets/action-sheets";
import {MyAllert} from "../pages/my-allert/my-allert";
import {MyCommon} from "../pages/my-common/my-common";
import {Login} from "../pages/login/login";
import {Balance} from "../pages/balance/balance";
import {Services} from "../pages/services/services";
import {Pin} from "../pages/pin/pin";
import {Register} from "../pages/register/register";
import {Tips} from "../pages/tips/tips";
import {AuthService} from "../providers/auth-service";
import {IonicStorageModule} from "@ionic/storage";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActionSheets,
    MyAllert,
    MyCommon,
    Login,
    Balance,
    Services,
    Pin,
    Register,
    Tips
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActionSheets,
    MyAllert,
    MyCommon,
    Login,
    Balance,
    Services,
    Pin,
    Register,
    Tips
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {
}
