import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionSheets } from './action-sheets';

@NgModule({
  declarations: [
    ActionSheets,
  ],
  imports: [
    IonicPageModule.forChild(ActionSheets),
  ],
  exports: [
    ActionSheets
  ]
})
export class ActionSheetsModule {}
