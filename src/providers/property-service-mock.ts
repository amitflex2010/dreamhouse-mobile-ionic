import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import properties from './mock-properties';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PropertyService {

  favoriteCounter: number = 0;
  favorites: Array<any> = [];
  private basePath: string = '/favorites';
  private userList: Observable<any[]>;

  constructor(public afAuth: AngularFireAuth, private af: AngularFireDatabase){}

  findAll() {
    return Promise.resolve(properties);
  }

  findById(id) {
    return Promise.resolve(properties[id - 1]);
  }

  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(properties.filter((property: any) =>
        (property.title +  ' ' +property.address +  ' ' + property.city + ' ' + property.description).toUpperCase().indexOf(key) > -1));
  }

  getFavorites() {

    let currentUserId = JSON.parse(localStorage.getItem('currentUser')).id;
    if(currentUserId != null) {
      this.favorites = JSON.parse(localStorage.getItem(currentUserId));
    }
    else {
      return Promise.reject('No Favorites')
    }
    return Promise.resolve(this.favorites);
  }

  private addFavoritestoFireBase(favorite) {
    const obj = this.af.database.ref(this.basePath);
    obj.push(favorite);
   }

  favorite(property) {
    let currentUserID = JSON.parse(localStorage.getItem('currentUser')).id;
    if(currentUserID != null) {
      console.log(this.favorites);
      this.favoriteCounter = this.favoriteCounter + 1;
      this.favorites.push({id: this.favoriteCounter, userid:currentUserID, property: property});
      this.addFavoritestoFireBase({userid:currentUserID, property: property});
      localStorage.setItem(currentUserID, JSON.stringify(this.favorites));
    }
    else {
      return Promise.reject('No Logged-in user');
     
    }
    
    return Promise.resolve();
  }

  unfavorite(favorite) {

    let currentUser = JSON.parse(localStorage.getItem('currentUser')).additionalUserInfo.profile.name;
    if(currentUser != null) {
      this.favorites = JSON.parse(localStorage.getItem(currentUser));
      let index = this.favorites.indexOf(favorite);
      if (index > -1) {
        this.favorites.splice(index, 1);
      }
    }
    else {
      return Promise.reject('No favorites');
    }
    
    return Promise.resolve();
  }

  resetFavoritesForNewUser() {
    console.log('resetFavoritesForNewUser');
    this.favorites.length = 0;
  }

}
