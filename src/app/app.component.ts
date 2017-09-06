import { Component } from '@angular/core';

@Component({
  selector: 'app-nad',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    nom = 'Nana';
    ajout = 'ajouter';

    public fruits = [] = [];
    public fruit = '';

    deleteFruit(fruit: string) {
        this.fruits.splice(this.fruits.indexOf(fruit), 1);
    }

    public ajouterFruit() {
        if (this.fruits.indexOf (this.fruit) === -1) {
            this.fruits.push(this.fruit.toLowerCase());
        } else {
          alert("déjà entré");
        }
    }
}