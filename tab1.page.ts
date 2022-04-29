import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { BookstoreService } from '../bookstore.service';
import { InputDialogService } from '../input-dialog.service';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //interpolated to easily update title of page
  title = "Bookstore"

  //calling upon navCtrl, toastCtrl, alertCtrl
  constructor(public navCtrl: NavController, public toastCtrl: ToastController,
    public dataService: BookstoreService, public inputDialogService: InputDialogService,
    public socialSharing: SocialSharing) {}
  //loads items from dependency injection BookstoreService file
  loadItems() {
    return this.dataService.getItems();
  }

  //toast function that removes item from list
  async removeItem(item, index) {
    console.log('Removing item - ' , item, index)
    //display to user using toast
    const toast = await this.toastCtrl.create({
      message: "Removing item - " + index + " ...",
      duration: 3000
    });
    //presented using toast
    toast.present();
    //splices array to show removal
    this.dataService.removeItem(index);
  }

  //adding item to list
  async addItem() {
    //calling upon service 
    this.inputDialogService.showPrompt();
  }
  //edit item in the list
  async editItem(item, index) {
    console.log("Editing item - ", item, index);
    //display to user using toast
    const toast = await this.toastCtrl.create({
      message: "Editing item - " + item.name + " ...",
      duration: 3000
    });
    //presented using toast
    toast.present();
    //calling upon service
    this.inputDialogService.showPrompt(item, index)
  }
  //cordova social sharing function
  async shareItem(item, index) {
    console.log("Sharing item -", item, index)
    //display to user using toast
    const toast = await this.toastCtrl.create({
      message: "Sharing item - " + item.name + " ...",
      duration: 3000
    });
    //presented using toast
    toast.present();

    let message = 'Book Item - Title: ' + item.book + ' By: ' + item.author;
    let subject = 'Shared via Bookstore App';
    //checks if sharing is avaliable
    this.socialSharing.share(message, subject).then(() => {
      // Sharing via email is possible
    }).catch((error) => {
      // Sharing via email is not possible
      console.error('Error while sharing ', error);
    });
  }
  

}
