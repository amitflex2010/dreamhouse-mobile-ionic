import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { User } from "./user";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {email:'vijaysinghamittripathi@gmail.com', password: 'ams@1234'} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }
 
  async loginGoogle() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await this.afAuth.auth.signInWithPopup(provider);
      if (result) {
        this.navCtrl.setRoot(HomePage,{data:result});
      }  
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
 
 /* async register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      if (result) {
        this.navCtrl.setRoot(HomePage,result);
      }
    } catch (e) {
      console.error(e);
    }
  }*/
}