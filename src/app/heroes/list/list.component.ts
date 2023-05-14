import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
    public heroes: string[] = [ 'Spiderman',  'Ironman', 'Thor', 'Hulk'];

    public deleteHero?: string; 

    deletedEnd(): void{ 
      this.deleteHero = this.heroes.pop();
      
    }

}
