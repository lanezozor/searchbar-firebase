import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';

import firebase from 'firebase';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {

    const config = {
      apiKey: "AIzaSyBVglhmx9z5HYw0Tlme208NeUZow9rBZiE",
      authDomain: "dummy-data-for-tests.firebaseapp.com",
      databaseURL: "https://dummy-data-for-tests.firebaseio.com",
      storageBucket: "dummy-data-for-tests.appspot.com",
      messagingSenderId: "781486608293"
    };
    
    firebase.initializeApp(config);


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
