import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `    
    <button (click)="toggle()">Toggle</button>
    <span [ngClass]="{'active': isActive}">{{name}}</span>
    
   `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = 'Max';
  isActive = true;
  toggle() {

    this.isActive = !this.isActive;
    console.log(this.isActive);
  }
}
