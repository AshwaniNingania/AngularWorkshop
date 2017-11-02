import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent {
  name: string;
  constructor() { }



  changeName(event) {
    console.log("Output from child is" + event)
    this.name = event;
  }
}
