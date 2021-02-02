import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public childbrowser: {};

  constructor(
    private iab: InAppBrowser,
    private platform: Platform,
  ) {
    this.initializePage();
  }

  initializePage() {
    this.platform.ready().then(() => {
      console.log('PLATFORM IS READY IN WEB PAGE - initializing in constructor');
      this.openBrowser();
    });
  }

  openBrowser(){
    console.log('OPENING UP 3::');
    this.childbrowser = this.iab.create('https://app-deep-linking.web.app', '_blank', {
      location : 'no',//Or 'no'
      zoom : 'no',//Android only ,shows browser zoom controls
      hardwareback : 'no',
      hidden: 'no',
      clearcache: 'no',
      beforeload: 'yes',
      toolbar : 'no', //iOS only22952
    });
    
  //  this.addEventsToChildBrowser();
  };

}
