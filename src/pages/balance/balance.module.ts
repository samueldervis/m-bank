import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Balance } from './balance';

@NgModule({
  declarations: [
    Balance,
  ],
  imports: [
    IonicPageModule.forChild(Balance),
  ],
  exports: [
    Balance
  ]
})
export class BalanceModule {}
