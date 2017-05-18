import { Component } from '@angular/core';

/**
 * Generated class for the PagesHomeHome component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'pages-home-home',
  templateUrl: 'pages-home-home.html'
})
export class PagesHomeHome {

  text: string;

  constructor() {
    console.log('Hello PagesHomeHome Component');
    this.text = 'Hello World';
  }

}
