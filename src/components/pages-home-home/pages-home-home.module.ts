import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesHomeHome } from './pages-home-home';

@NgModule({
  declarations: [
    PagesHomeHome,
  ],
  imports: [
    IonicPageModule.forChild(PagesHomeHome),
  ],
  exports: [
    PagesHomeHome
  ]
})
export class PagesHomeHomeModule {}
