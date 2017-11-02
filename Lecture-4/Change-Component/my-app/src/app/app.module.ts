import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { TwoWayComponent } from './two-way/two-way.component';
import {FormsModule} from "@angular/forms";
import { DescComponent } from './two-way/desc/desc.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TwoWayComponent,
    DescComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
