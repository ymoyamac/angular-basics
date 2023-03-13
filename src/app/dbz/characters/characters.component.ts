import { Component, Input } from '@angular/core';
import { Character } from 'src/interfaces';
import { DbzService } from '../services/bdz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: [ '../../app.component.scss' ],
})
export class CharactersComponent {

  get characters(): Character[] {
    return this.dbzService.characters;
  }

  constructor(private readonly dbzService: DbzService) {}

}
