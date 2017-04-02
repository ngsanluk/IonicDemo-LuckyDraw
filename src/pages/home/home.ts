import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  luckyNumber: number;

  constructor(public navCtrl: NavController) {
  }

  drawNextNumber() {
    this.luckyNumber = Math.floor((Math.random() * 100) + 1);
  }

}
