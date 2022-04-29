import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import for cordova sharing functionality
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
//import for corodva camera functionality
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SocialSharing, Camera],
  bootstrap: [AppComponent],
})
export class AppModule {}
