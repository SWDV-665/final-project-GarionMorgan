import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
//dependency injection from angular
@Injectable({
  providedIn: 'root'
})
export class RadioLibraryService {

  constructor(public alertController: AlertController) { }

  //alert function for options
  async presentAlertRadio() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Fan Favorites',
          value: 'value1',
          handler: () => {
            console.log('Fan favorites selected');
          },
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'New Books',
          value: 'value2',
          handler: () => {
            console.log('New books selected');
          }
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Classic Books',
          value: 'value3',
          handler: () => {
            console.log('Classic Books selected');
          }
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Fantasy Books',
          value: 'value4',
          handler: () => {
            console.log('Fantasy Books selected');
          }
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Fiction Books',
          value: 'value5',
          handler: () => {
            console.log('Fiction Books selected');
          }
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Non-Fiction Books',
          value: 'value6',
          handler: () => {
            console.log('Non-Fiction Books selected');
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
