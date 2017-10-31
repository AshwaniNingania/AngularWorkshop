import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-swich-child',
  templateUrl: './swich-child.component.html',
  styleUrls: ['./swich-child.component.css']
})
export class SwichChildComponent  {

  @Input('active') active: boolean;


}
