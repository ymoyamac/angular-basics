import { Component } from '@angular/core';
import { Hero } from '../../../interfaces';

const hero: Hero = {
  heroName: 'Ironman',
  name: 'Tony Stark',
}

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
  styleUrls: [ '../../app.component.scss' ],
})
export class HeroComponent {
  heroName: string = hero.heroName;
  name: string = hero.name;

  get capitalizedName(): string {
    return this.heroName.toUpperCase();
  }

  getPhrase(): string {
    return `${this.name} is ${this.capitalizedName}`;
  }

  changeHeroName(): void {
    this.heroName = 'Spiderman';
  }

  changeName(): void {
    this.name = 'Peter Parker';
  }
}
