import {Injectable, OnInit} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthProvider } from '@firebase/auth-types';
import { isMobileCordova } from '@firebase/util';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';


@Injectable()
export  class AuthService implements OnInit {

    dbref: AngularFireList<any[]>;

    constructor (public afAuth: AngularFireAuth, private af: AngularFireDatabase) {}

    ngOnInit() {
      this.dbref =  this.af.list('/user');
    }

    loginWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = this.oAuthSignIn(provider);
        return result;
    }

    logout() {
        return this.afAuth.auth.signOut();
    }

    private oAuthSignIn(authProvider: AuthProvider) {
        let result: any = null;
      
        if(!isMobileCordova()) {
            result = this.afAuth.auth.signInWithPopup(authProvider);
        }
        else {
            result = this.afAuth.auth.signInWithRedirect(authProvider).then(
                () => {
                    return this.afAuth.auth.getRedirectResult().then(
                        data =>{
                            let token = result.credential.accessToken;
                            let user = result.user;
                            console.log(token, user);
                        }).catch(function(error) {
                            alert(error.message);
                        });
                });
        }

        return result
    }

    addUsertoFireBase(user) {
      //  console.log( this.dbref);
      //  this.db.push(user);
    }
}