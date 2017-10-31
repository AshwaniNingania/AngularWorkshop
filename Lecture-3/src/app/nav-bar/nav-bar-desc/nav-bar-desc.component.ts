import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-desc',
  templateUrl: './nav-bar-desc.component.html',
  styleUrls: ['./nav-bar-desc.component.css']
})
export class NavBarDescComponent {

 @Input('desc') desc;

 update(data: string) {
   this.desc.description = data;
   console.log(this.desc.description);
 }
}
