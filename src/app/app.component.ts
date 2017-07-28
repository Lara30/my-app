import { Component } from '@angular/core';

@Component({
  selector: 'app-nad',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nom= 'Nana';
  ajout= 'ajouter fruit';

  public fruits= [] = [];
  public fruit= 'cerise';

    deleteFruit(fruit: string) {
      this.fruits.splice (this.fruits.indexOf(fruit), 1);
    }
  }



