import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root' //nuestro servicio va ser un sigleton
})
export class DbzService {
  constructor() { }

    public characters: Character[] = [
      {
          id: uuid(),
          name: 'Goku', 
          power: 20000
      }, 
      {
        id: uuid(),
          name:  'Vegeta', 
          power: 19000
      }, 
      {
        id: uuid(),
          name:  'Bulma', 
          power: 1
      }
  ]; 

  onDeleteCharacter( id: string ):void {
    this.deleteCharacterById( id );
    }

  onNewCharacter(character:  Character): void{ 
      const newCharacter: Character = { ...character, id: uuid()};
      this.characters.push(newCharacter);
  }


 private deleteCharacterById(id:  string){ 
      this.characters = this.characters.filter(character => character.id !== id);
  }
}
