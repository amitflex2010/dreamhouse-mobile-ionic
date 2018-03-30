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
    private isUserExist: boolean;

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
       
        let userId = user.additionalUserInfo.profile.id
        this.addUniqueUser(userId);
    }

    private addUniqueUser(userId) {
    let data;
      this.userList.map(response =>(data = response))
      .map(val => this.checkIfUserExist(val, userId));
    }

   private checkIfUserExist(data, userID) {
      
        if(data.id == userID) {
            this.isUserExist = true;
            return;
        }
        if(!this.isUserExist) {
            const obj = this.af.database.ref(this.basePath);
            obj.push(data);
            console.log('New user');
        }
        
    }

    getAllUsers(): Observable<any[]> {
        return this.af.list(this.basePath).valueChanges();
      }
}