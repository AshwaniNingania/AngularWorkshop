import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WidgetlistService} from "./widgetlist.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from '@angular/router'
import { ChildbarComponent } from './childbar/childbar.component';
import { ListDetailComponent } from './list-detail/list-detail.component';

const approutes = [
  {path: "", redirectTo: '/home',pathMatch: 'full'},
  {path: "home", component: ChildbarComponent},
  {path: "about", component: ListDetailComponent},
  {path: "**", component: ChildbarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ChildbarComponent,
    ListDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [WidgetlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
