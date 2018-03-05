import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router';
import {SearchComponent} from './search.component';
import {ImagesServices} from './images.services';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ListKeywordsComponent} from './list.keywords.component';
import {ListImagesComponent} from './list.images.component';
import {SharedService} from './shared.service';

let appRoutes = [{path:'app',component:SearchComponent},
  {path:'images/list',component:ListImagesComponent},
  {path:'keyword/list',component:ListKeywordsComponent},
  {path:'',redirectTo:'/app',pathMatch:'full'},
  {path:'**',redirectTo:'/app}',pathMatch:'full'}]


@NgModule({
  declarations: [
    AppComponent,SearchComponent,ListKeywordsComponent,ListImagesComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule,HttpClientModule
  ],
  providers: [ImagesServices,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
