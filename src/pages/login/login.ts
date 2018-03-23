import { Component, OnInit } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { User } from "./user";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { HomePage } from '../home/home';
import { Events } from 'ionic-angular';
import { AuthService } from './auth.service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {

  user = {email:'vijaysinghamittripathi@gmail.com', password: 'ams@1234'} as User;
  
  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, public events: Events
  , public authService: AuthService) {
  }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('currentUser')) !=  null)
    {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.navCtrl.setRoot(HomePage,{data:currentUser});
    }
    
  }
 
  loginGoogle() {
    try {
     
      this.authService.loginWithGoogle().then(result =>{
        if (result) {
          localStorage.setItem('currentUser', JSON.stringify(result));
          this.authService.addUsertoFireBase(result);
          this.navCtrl.setRoot(HomePage, {data:result});
          this.events.publish('username:changed', result.additionalUserInfo.profile.name);
        } 
    });
    }
    catch (e) {
      console.error(e);
    }
  }

  async loginFacebook() {
    try {
      const provider = new firebase.auth.FacebookAuthProvider();
      const result = await this.afAuth.auth.signInWithPopup(provider);
      if (result) {
        this.navCtrl.setRoot(HomePage,{data:result});
      }  
    }
    catch (e) {
      console.error(e);
    }
  }
 
}