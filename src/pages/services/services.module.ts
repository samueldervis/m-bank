import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Services } from './services';

@NgModule({
  declarations: [
    Services,
  ],
  imports: [
    IonicPageModule.forChild(Services),
  ],
  exports: [
    Services
  ]
})
export class ServicesModule {}
