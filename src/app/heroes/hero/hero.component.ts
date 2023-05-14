import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  public name: string = 'ironman'; 
  public age:  number =  30; 

  //getter 
  get capitalizeName():string{ 
    return this.name.toUpperCase();
  }

  getHeroDescription():string{ 
    return `${this.name}- ${this.age}`
  }


  changeName(): void{ 
    this.name = 'Spiderman'; 
  }

  changeAge(): void{ 
    this.age = 15;
  }

  resetValue():void{ 
    this.name = 'ironman'; 
    this.age = 30; 
  }
}
