import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SaloonService } from '../saloon.service';
import { Beverages } from '../beverage-interface';

@Component({
  selector: 'app-the-usual',
  templateUrl: './the-usual.component.html',
  styleUrls: ['./the-usual.component.css']
})
export class TheUsualComponent implements OnInit {
  theUsualBev: Beverages [] = [];
  showUsualBtn: Boolean = true;
  @Output() messageToEmit = new EventEmitter<Beverages[]>();

  getTheUsual() {
    this.theUsualBev = this.saloonService.getTheUsualBev();
    if (this.theUsualBev === null) {
      this.showUsualBtn = false;
    }
  }

  sendTheUsual() {
    this.messageToEmit.emit(this.theUsualBev);
  }

  constructor(public saloonService: SaloonService) { }

  ngOnInit(): void {
    this.getTheUsual();
  }

}
