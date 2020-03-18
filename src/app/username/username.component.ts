import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SaloonService } from '../saloon.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  addNameBoolean: boolean = true;
  firstName: string;
  secondName: string;
  newUsername: string;
  @Output() messageToEmit = new EventEmitter<string>();


  onClickName(event) {
    if (this.firstName === undefined || this.secondName === undefined) {
      console.log('Name input empty ' + this.newUsername);
    } else {
    this.newUsername = (this.firstName + ' ' + this.secondName);
    this.saloonService.saveName(this.newUsername);
    this.addNameBoolean = false;
    this.messageToEmit.emit(this.newUsername);
  }
  }

  getLocalStorageName() {
  this.newUsername = this.saloonService.nameLocalStorage();
  console.log('Storagename in service: ' + this.newUsername)
  }


  constructor(public saloonService: SaloonService) { }

  ngOnInit(): void {
    this.getLocalStorageName();
  }

}
