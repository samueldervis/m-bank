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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActionSheets,
    MyAllert,
    MyCommon
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActionSheets,
    MyAllert,
    MyCommon
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
