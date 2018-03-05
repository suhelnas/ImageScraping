import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
let allRoutes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(allRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
