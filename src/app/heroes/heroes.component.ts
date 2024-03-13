import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes', // <-- kopiujemy do HTML i używamy jak znacznik
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  hero: Hero = { 
    id: 1, name: 'The Flash' 
  } 

}
