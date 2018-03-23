import { Component, OnInit } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../login/auth.service';

import { Events } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';

@Component({
    selector: 'page-logout',
    templateUrl: 'logout.html',
  })
  export class LogoutPage implements OnInit {

    constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events
        , public authService: AuthService) {

    }

    ngOnInit() {
        this.authService.logout();
        localStorage.setItem('currentUser', null);
        this.events.publish('username:changed', 'My Account');
        this.navCtrl.setRoot(WelcomePage);
    }

    

  }