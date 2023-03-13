import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from 'src/interfaces';
import { DbzService } from '../services/bdz.service';

@Component({
  selector: 'app-characters-form',
  templateUrl: './characters-form.component.html',
  styleUrls: [ '../../app.component.scss' ],
})
export class CharactersFormComponent {
  @Input() newCharacter: Character = {
    name: '',
    power: 0,
  };
  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  constructor(private readonly dbzService: DbzService) {}


  onSubmit(): void {
    if (this.newCharacter.name.trim().length === 0) {
      document.getElementById('characterName')?.classList.add('invalid-input');
      return;
    }
    this.dbzService.addNewCharacter(this.newCharacter);
    // this.onNewCharacter.emit(this.newCharacter);
  }

  onInputChange({ target }: any): void {
    const { value } = target;
    if (value.length !== 0 && value.length >= 2) {
      document.getElementById('characterName')?.classList.remove('invalid-input');
      document.getElementById('characterName')?.classList.add('input');
    }
  }
}
