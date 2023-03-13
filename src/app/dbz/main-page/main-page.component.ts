import { Component } from '@angular/core';
import { Character } from 'src/interfaces';
import { DbzService } from '../services/bdz.service';

const INITIAL_STATE: Character = {
  name: 'Truncks',
  power: 900000,
};

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: [ '../../app.component.scss' ],
})
export class MainPageComponent {

  newCharacter: Character = INITIAL_STATE;

  constructor(private readonly dbzService: DbzService) {}
}
