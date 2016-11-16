import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  countryList: any;
  loadedCountryList: any;
  countryRef: any;

  constructor(public navCtrl: NavController) {
    this.countryRef = firebase.database().ref('/');

    this.countryRef.child('countries').on('value', countryList => {
      let countries = [];
      countryList.forEach( country => {
        countries.push(country.val());
      });

      this.countryList = countries;
      this.loadedCountryList = countries;
    });
  }


  initializeItems(){
    this.countryList = this.loadedCountryList;
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();
    
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;


    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }

    this.countryList = this.countryList.filter((v) => {
      if(v.name && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

    console.log(q, this.countryList.length);

  }

}
