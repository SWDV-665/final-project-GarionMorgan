import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BookstoreService } from './bookstore.service';
//dependency injection for input dialog from user
@Injectable({
  providedIn: 'root'
})
export class InputDialogService {
  //calls upon libraries
  constructor(public alertController: AlertController, public dataService: BookstoreService ) { }
  //shows an alert to user
  async showPrompt(item?, index?) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: item ? "Edit an item" : "Add a book",
      message: item ? "Please edit the item..." : "Please enter title of book and author's name...",
      inputs: [{
        //input holders for user to interact with
        name: 'book',
        placeholder: 'Book',
        value: item ? item.book : null
      },
      {
        name: 'author',
        placeholder: 'Author',
        value: item ? item.author : null
      },
      {
        name: 'quantity',
        placeholder: 'Quantity',
        value: item ? item.quantity : null
      }
    ],
      buttons: [{
        //cancel submission
        text: "Cancel",
        handler: data => {
          console.log('Cancel clicked')
        }
      },
      {
        //save submission
        text: 'Submit',
        handler: data => {
          console.log("Saved clicked", data);
          //if statement depending if item is being added or editted
          if (index != undefined) {
            this.dataService.editItem(data, index);
          } else {
            this.dataService.addItem(data);
          }
        }
      }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}