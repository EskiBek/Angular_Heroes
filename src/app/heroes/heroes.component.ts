import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes', // <-- kopiujemy do HTML i używamy jak znacznik
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  heroes = HEROES;

  selectedHero !: Hero;
  onSelected(hero: Hero){
    this.selectedHero = hero;
  }

  
}
