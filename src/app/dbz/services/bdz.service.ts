import { Injectable } from "@angular/core";
import { Character } from "../../../interfaces";

const charactersApi: Character[] = [
  {
    name: 'Goku',
    power: 1900000,
  },
  {
    name: 'Vegeta',
    power: 1000000,
  },
  {
    name: 'Gohan',
    power: 2100000,
  },
];

@Injectable()
export class DbzService {

  private _characters: Character[] = charactersApi;

  get characters(): Character[] {
    return [ ...this._characters ];
  }
  
  addNewCharacter(character: Character): void {
    if (this.checkIfCharacterExists(character.name, this._characters)) return;
    this._characters.push({ ...character });
  }

  private checkIfCharacterExists(characterName: string, characters: Character[]): boolean {
    const characterFound: Character | undefined = characters
      .find(currentCharacter => currentCharacter.name === characterName);
    return characterFound ? true : false;
  }
}
