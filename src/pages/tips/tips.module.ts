import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tips } from './tips';

@NgModule({
  declarations: [
    Tips,
  ],
  imports: [
    IonicPageModule.forChild(Tips),
  ],
  exports: [
    Tips
  ]
})
export class TipsModule {}
