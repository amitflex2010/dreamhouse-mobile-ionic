import {Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthProvider } from '@firebase/auth-types';
import { isMobileCordova } from '@firebase/util';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Injectable()
export  class AuthService  {

    dbref: AngularFireList<any[]>;

    private basePath = '/user';
    private userList: Observable<any[]>;

    constructor (public afAuth: AngularFireAuth, private af: AngularFireDatabase) {
        this.getAllUsers()
        .map(response => response)
        .subscribe(result => this.initAppData(result))
    }

    initAppData(userdata) {
        this.userList = userdata;
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
        const obj = this.af.database.ref(this.basePath);
        console.log(user.additionalUserInfo.profile);
        let userId = user.additionalUserInfo.profile.id
        if(this.checkIfUserExist(userId)) {
            obj.push(user.additionalUserInfo.profile);
        }
       
       
    }

    checkIfUserExist(userID) {
      let data;
      this.userList.map(response =>(data = response)).
      filter(val => data.id === userID).map(val => data = val);
      if(!(data.id == userID)) {
        return true;
      }  
      
    return false;

    }


    getAllUsers(): Observable<any[]> {
        return this.af.list(this.basePath).valueChanges();
      }
}