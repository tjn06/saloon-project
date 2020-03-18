import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Beverages } from '../beverage-interface';
import { SaloonService } from '../saloon.service';

@Component({
  selector: 'app-select-beverage',
  templateUrl: './select-beverage.component.html',
  styleUrls: ['./select-beverage.component.css']
})
export class SelectBeverageComponent implements OnInit {
  data: Beverages[] = [];
  selectedBeverage: Beverages;
  beverageAddInput: string;
  @Output() messageToEmit = new EventEmitter<Beverages>();


  clickSaveBeverage(selectedBev: Beverages): void {
    this.selectedBeverage = selectedBev;
    this.saloonService.saveBeverage(selectedBev);
    this.messageToEmit.emit(selectedBev);
  }

  addBeverage(bevName: string): void {
    console.log('Send event with data: ' + this.beverageAddInput);
    bevName = this.beverageAddInput;
    this.saloonService.addNewBeverage(bevName);
    this.saloonService.getBeverages();
  }



  constructor(public saloonService: SaloonService) {}

  ngOnInit() {
    this.data = this.saloonService.getBeverages(); /*Hämtar datalista ifrån service*/
  }

}
