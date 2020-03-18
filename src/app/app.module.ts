import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { SelectBeverageComponent } from './select-beverage/select-beverage.component';
import { TheUsualComponent } from './the-usual/the-usual.component';
import { UsernameComponent } from './username/username.component';
import { RightToBeForgottenComponent } from './right-to-be-forgotten/right-to-be-forgotten.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogueComponent,
    SelectBeverageComponent,
    TheUsualComponent,
    UsernameComponent,
    RightToBeForgottenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
