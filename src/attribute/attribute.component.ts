import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  imports: [CommonModule],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.css'
})
export class AttributeComponent {

  ind:number[] = []
  num:number = 0
  constructor(){
    for (let index = 1; index <= 50; index++) {
      this.ind.push(index)
    }
  }

  divisible(num:number){
    this.num = num
  }
}
