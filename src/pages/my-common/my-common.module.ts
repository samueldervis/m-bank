import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCommon } from './my-common';

@NgModule({
  declarations: [
    MyCommon,
  ],
  imports: [
    IonicPageModule.forChild(MyCommon),
  ],
  exports: [
    MyCommon
  ]
})
export class MyCommonModule {}
