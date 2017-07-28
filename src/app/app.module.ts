import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { JeudiComponent } from './jeudi/jeudi.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciceComponent,
    JeudiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
