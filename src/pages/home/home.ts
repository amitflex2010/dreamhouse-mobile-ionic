import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userData = this.navParams.data.data.additionalUserInfo.profile;
    console.log(this.userData)
   }

}
