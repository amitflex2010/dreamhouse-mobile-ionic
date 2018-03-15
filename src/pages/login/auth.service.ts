import {Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export  class AuthService {
    constructor (public afAuth: AngularFireAuth) {

    }

    loginWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = this.afAuth.auth.signInWithPopup(provider);
        return result;
    }

    logout() {
        return this.afAuth.auth.signOut();
    }
}