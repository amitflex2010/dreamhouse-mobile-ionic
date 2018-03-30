import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';

import {PropertyListPage} from '../pages/property-list/property-list';
import {BrokerListPage} from '../pages/broker-list/broker-list';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {WelcomePage} from '../pages/welcome/welcome';
import {AboutPage} from '../pages/about/about';
import {LoginPage} from '../pages/login/login';
import {ContactPage} from '../pages/contact/contact';
import { PropertyService } from '../providers/property-service-mock';
import { LogoutPage } from '../pages/logout/logout';

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = WelcomePage;

    appMenuItems: Array<MenuItem>;

    accountMenuItems: Array<MenuItem>;

    helpMenuItems: Array<MenuItem>;

    contactMenuItems: Array<MenuItem>;

    events:Events;

    constructor(public platform: Platform, public statusBar: StatusBar, 
        public splashScreen: SplashScreen, events:Events, public propertyService: PropertyService) {



        this.appMenuItems = [
            {title: 'Properties', component: PropertyListPage, icon: 'home'},
            {title: 'Brokers', component: BrokerListPage, icon: 'people'},
            {title: 'Favorites', component: FavoriteListPage, icon: 'star'}
        ];

        this.accountMenuItems = [
            {title: 'My Account', component: LoginPage, icon: 'ios-contact'},
            {title: 'Logout', component: LogoutPage, icon: 'log-out'},
        ];

        this.helpMenuItems = [
            {title: 'Welcome', component: WelcomePage, icon: 'bookmark'},
            {title: 'About', component: AboutPage, icon: 'information-circle'},
        ];

        this.contactMenuItems = [
          {title: 'Contact Us', component: ContactPage, icon: 'call'},
        ];

        events.subscribe('username:changed', username => {
            if(username !== undefined && username !== ""){
                this.accountMenuItems[0].title = username;
                this.propertyService.resetFavoritesForNewUser();
            }
         })

        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
        });
        console.log(JSON.parse(localStorage.getItem('currentUser')));
        if(JSON.parse(localStorage.getItem('currentUser')) !=  null)
        {
            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.accountMenuItems[0].title = currentUser.name;

        }
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
       

    }
}
