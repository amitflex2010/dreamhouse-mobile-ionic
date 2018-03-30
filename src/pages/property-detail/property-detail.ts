import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {BrokerDetailPage} from '../broker-detail/broker-detail';
import {PropertyService} from '../../providers/property-service-mock';

@Component({
    selector: 'page-property-detail',
    templateUrl: 'property-detail.html'
})
export class PropertyDetailPage {

    property: any;
    toast: ToastController;

    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public propertyService: PropertyService, public toastCtrl: ToastController) {
        this.property = this.navParams.data;
        this.toast = toastCtrl;
        propertyService.findById(this.property.id).then(
            property => this.property = property
        );
    }

    openBrokerDetail(broker) {
        this.navCtrl.push(BrokerDetailPage, broker);
    }

    favorite(property) {
        let that = this;
        this.propertyService.favorite(property)
            .then(property => {
                this.showToast('Property added to your favorites');
            },
            function(data) {
                if(data == 'No Logged-in user') {
                    that.showToast('No Logged-in user to add favorites');
                }
            }
        );
    }
    
    showToast(msg) {
        let toast = this.toast.create({
            message: msg,
            cssClass: 'mytoast',
            duration: 1000
        });
        
        toast.present(toast);
    }



    share(property) {
        let actionSheet: ActionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: () => console.log('share via twitter')
                },
                {
                    text: 'Facebook',
                    handler: () => console.log('share via facebook')
                },
                {
                    text: 'Email',
                    handler: () => console.log('share via email')
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => console.log('cancel share')
                }
            ]
        });

        actionSheet.present();
    }

}
