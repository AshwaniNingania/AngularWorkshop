import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarDetailComponent } from './nav-bar/nav-bar-detail/nav-bar-detail.component';
import { NavBarDescComponent } from './nav-bar/nav-bar-desc/nav-bar-desc.component';
import { ColorChangeDirective } from './color-change.directive';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { SwichChildComponent } from './switch-case/swich-child/swich-child.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarDetailComponent,
    NavBarDescComponent,
    ColorChangeDirective,
    SwitchCaseComponent,
    SwichChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
