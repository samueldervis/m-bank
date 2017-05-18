import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAllert } from './my-allert';

@NgModule({
  declarations: [
    MyAllert,
  ],
  imports: [
    IonicPageModule.forChild(MyAllert),
  ],
  exports: [
    MyAllert
  ]
})
export class MyAllertModule {}
