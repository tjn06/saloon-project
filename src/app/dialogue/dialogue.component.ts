import { Component, OnInit, Input} from '@angular/core';
import { Beverages } from '../beverage-interface';
import { SaloonService } from '../saloon.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {
  newNameBoolean: boolean = true;
  addBevBoolean: boolean = false;
  addLocalStorName: boolean = false;
  showTheUsualBoolean: boolean = true;
  receivedChildBevMessage: Beverages;
  receivedChildMessage: string = 'stranger';
  @Input() paramForget: boolean = false; /*SEND BOOLEAN*/
  //reloadBoolean: boolean = false;
/*
  afterClearStorage(): void {
    if (sessionStorage.getItem('reloading') === 'true') {
      sessionStorage.clear();
      this.reloadBoolean = true;
    }
  }
  */

  getLocalStorageMessage() {
    const storeNameTemp = this.saloonService.nameLocalStorage();
    if (storeNameTemp === null){
      return;
    } else {
       this.receivedChildMessage = storeNameTemp;
       this.addLocalStorName = true;
    }
  }

  getNameMessage(name: string) {
    this.receivedChildMessage = name;
    this.newNameBoolean = false;
    this.paramForget = false;
  }

  getBevMessage(beverage: Beverages) {
    this.receivedChildBevMessage = beverage;
    this.addBevBoolean = true;

  }

  getLocalStoreBevMessage(event: Beverages) {
     this.receivedChildBevMessage = event;
     this.addBevBoolean = true;
   }


  constructor(public saloonService: SaloonService) { }

  ngOnInit(): void {
    this.getLocalStorageMessage();
    // this.afterClearStorage();
  }

}
