import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Pin } from './pin';

@NgModule({
  declarations: [
    Pin,
  ],
  imports: [
    IonicPageModule.forChild(Pin),
  ],
  exports: [
    Pin
  ]
})
export class PinModule {}
