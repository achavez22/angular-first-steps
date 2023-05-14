import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <p>welcome to Counter component</p>
        <h2>Counter {{counter}}</h2>
        <button (click)="decreseBy(1)"> -1</button>
        <button (click)="reset()"> Reset</button>
        <button (click)="increaseBy(1)"> +1</button>
        
        `
})

export class CounterComponent {
    public counter:  number = 10;
    increaseBy(value: number):void{
        this.counter += value;
     }
        
    decreseBy(value: number):void{
        this.counter -= 1;
    }

    reset(){ 
        this.counter = 10;
    }


}