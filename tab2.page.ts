import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LibraryService } from '../library.service';
import { RadioLibraryService } from '../radio-library.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  //interpolation
  title = "Library"
  //message displayed on search bar
  search_message = "Search by book title or author..."
  //headline message for library page
  headline = "Check out some fan favorites!"
  //calling upon navcontrol, libraryservice and radiolibraryservice
  constructor(public navCtrl: NavController, public libService: LibraryService, 
    public radioLibService: RadioLibraryService) {}

  //loading items from LibraryService file
  loadItems() {
    return this.libService.getItems();
  }
  //function that calls upon an alert
  optionFunction() {
    console.log("options clicked...")
    this.radioLibService.presentAlertRadio()
  }
  

}
