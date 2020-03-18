import { Injectable } from '@angular/core';
import { Beverages } from './beverage-interface';

@Injectable({
  providedIn: 'root'
})
export class SaloonService {
  data: Beverages[] = [
    { name: 'Bloody Mary' },
    { name: 'Dry Martini' },
    { name: 'Mojito' },
    { name: 'Margarita'}
  ];

  nameLocalStor: string = '';
  theUsualBev: Beverages[] = [];
  // messClearLocalStorage: boolean = false;

    clearLocalStorage(): void {
    window.localStorage.clear();
    console.log('Local storage data is cleared');
    // sessionStorage.setItem('reloading', 'true');
    // window.location.reload()
  }


  getDataLocalStorage(): void {
    if (localStorage.getItem('data') === null) {
      console.log('Data in local storage data is empty');
    } else {
      this.data = JSON.parse(window.localStorage.getItem('data'));
    }
  }

  getBeverages(): Beverages[] {
    return this.data;
  }

  addNewBeverage(bevName: string) {
    const bevObject = { name: bevName };
    this.data.push(bevObject);
    window.localStorage.setItem('data', JSON.stringify(this.data));
    console.log(JSON.parse(window.localStorage.getItem('data')));
  }

  saveBeverage(selectedBev: Beverages): void {
    window.localStorage.setItem('storeBev', JSON.stringify(selectedBev));
  }

  getTheUsualBev() {
    this.theUsualBev = JSON.parse(window.localStorage.getItem('storeBev'));
    return this.theUsualBev;
    }

  saveName(savedUserName: string): void {
    window.localStorage.setItem('user', JSON.stringify(savedUserName));
  }

  nameLocalStorage(): any {
    this.nameLocalStor = JSON.parse(window.localStorage.getItem('user'));
    if (this.nameLocalStor === undefined) {
      return;
    } else {
      return this.nameLocalStor;
    }
    }



  constructor() {
    this.getDataLocalStorage();
  }
}
