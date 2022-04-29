import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  //interpolation for title
  title = "Sign-In"
  //calls upon camera functionality from cordova
  constructor(private camera: Camera) {}
  //sign in function
  signIn() {
    console.log("clicked sign in button")
  }
  //create an account function
  createAccount() {
    console.log("clicked create button")
  }
  //to take a photo for your profile picture or access device photos
  takePhoto() {
    console.log("photo button clicked")

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
     console.error('Error while opening camera',err);
    });
  }
}
