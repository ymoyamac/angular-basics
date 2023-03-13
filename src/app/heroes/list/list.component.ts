import { Component } from '@angular/core';
import { Hero } from '../../../interfaces';

const heroesApi: Hero[] = [
  { heroName: 'Hulk', name: 'Bruce Banner' },
  { heroName: 'Captain America', name: 'Steve Rogers' },
  { heroName: 'Spiderman', name: 'Miles Morales' },
  { heroName: 'Thor', name: 'Thor sons Odin' },
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [ '../../app.component.scss' ],
})
export class ListComponent {
  heroes = heroesApi;
  heroDeleted: string = '';

  deleteHero(): void {
    this.heroDeleted = this.heroes.pop()?.heroName || '';
  }
}
