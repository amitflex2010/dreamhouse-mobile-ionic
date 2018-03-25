import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireAuth  } from 'angularfire2/auth';

import { MyApp } from './app.component';
import {WelcomePage} from '../pages/welcome/welcome';
import {PropertyListPage} from '../pages/property-list/property-list';
import {PropertyDetailPage} from '../pages/property-detail/property-detail';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {BrokerDetailPage} from '../pages/broker-detail/broker-detail';
import {BrokerPropertyDetailPage} from '../pages/broker-detail/broker-property-detail';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {AboutPage} from '../pages/about/about';
import {LoginPage} from '../pages/login/login';
import {ContactPage} from '../pages/contact/contact';

import {PropertyService} from "../providers/property-service-mock";
import {BrokerService} from "../providers/broker-service-mock";
import { AuthService } from '../pages/login/auth.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LogoutPage } from '../pages/logout/logout';

export const firebaseConfig = {
  apiKey: 'AIzaSyA2h8-EqMIdg2JQazC-O3E-C6BwYFnzJIU',
  authDomain: 'ngfbauth-6d5b0.firebaseapp.com',
  databaseURL: 'https://ngfbauth-6d5b0.firebaseio.com',
  storageBucket: 'ngfbauth-6d5b0.appspot.com',
  messagingSenderId: '769768187112'
};

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    AboutPage,
    PropertyListPage,
    PropertyDetailPage,
    FavoriteListPage,
    BrokerListPage,
    BrokerDetailPage,
    LoginPage,
    HomePage,
    BrokerPropertyDetailPage,
    ContactPage,
    LogoutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    AboutPage,
    PropertyListPage,
    PropertyDetailPage,
    FavoriteListPage,
    BrokerListPage,
    BrokerDetailPage,
    LoginPage,
    HomePage,
    BrokerPropertyDetailPage,
    ContactPage,
    LogoutPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    PropertyService,
    BrokerService,
    AuthService, AngularFireAuth, AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
