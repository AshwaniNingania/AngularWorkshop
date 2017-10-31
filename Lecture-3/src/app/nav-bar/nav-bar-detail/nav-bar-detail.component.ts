import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-detail',
  templateUrl: './nav-bar-detail.component.html',
  styleUrls: ['./nav-bar-detail.component.css']
})
export class NavBarDetailComponent  {

  @Input('menuItem') item;

}
