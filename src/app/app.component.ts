import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SALOON';

 appForgetBoolean: boolean; /*SEND BOOLEAN*/


  forgetBoolean(event) { /*SEND BOOLEAN*/
    this.appForgetBoolean = event;
    console.log('app forget: ' + this.appForgetBoolean);
  }




  constructor() {}

  ngOnInit() {

  }
}
