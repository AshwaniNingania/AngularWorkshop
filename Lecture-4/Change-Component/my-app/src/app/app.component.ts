import { Component } from '@angular/core';
import {data} from './child-data';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  person = new data("ram", 2);
  //Change name previously was looking at references,
     // old Value == New Value // Reference was same


  // This code creates a new Reference out of it
  changeName() {
    this.person = new data("kalinga", 3);
  }
}
