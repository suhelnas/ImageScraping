import {Component} from '@angular/core';
import {ImagesServices} from './images.services';
import {Router} from '@angular/router';

@Component({
  selector:'search-component',
  templateUrl:'./search.component.html'
})
export class SearchComponent{
  searchKeyword:string = null
  database:boolean;
  imageArray = []
  showtable = false;
  constructor(private imageServices:ImagesServices,private _router: Router){}

  search(){
    let that = this;
    let promise = this.imageServices.getImages(this.searchKeyword);
    promise.then(function (result) {
      that.showtable = true;
      that.database = result.database;
      if(that.database)
      that.imageArray = result.data.ImageNames
      else
        that.imageArray = result.data;
         that.database = result.database;

    })
  }

  keywordList(){
    this._router.navigate(['/keyword/list']);
  }
}
