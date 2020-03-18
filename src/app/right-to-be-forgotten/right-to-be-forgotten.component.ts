import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SaloonService } from '../saloon.service';

@Component({
  selector: 'app-right-to-be-forgotten',
  templateUrl: './right-to-be-forgotten.component.html',
  styleUrls: ['./right-to-be-forgotten.component.css']
})
export class RightToBeForgottenComponent implements OnInit {
  @Output() forgetMessageToEmit = new EventEmitter<boolean>(); /*SEND BOOLEAN*/
  forgetBoolean: boolean;

  neverHere(): void {
    this.saloonService.clearLocalStorage();
    this.forgetBoolean = true; /*SEND BOOLEAN*/
    this.forgetMessageToEmit.emit(this.forgetBoolean); /*SEND BOOLEAN*/
  }

  constructor(public saloonService: SaloonService) { }

  ngOnInit(): void {
  }

}
