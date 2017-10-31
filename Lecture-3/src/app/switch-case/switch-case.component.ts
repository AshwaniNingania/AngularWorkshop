import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css']
})
export class SwitchCaseComponent {
   tab: number;
   select(num: number) {
     this.tab = num;
   }

   isActive(num: number) {
     return this.tab == num;
   }

}
