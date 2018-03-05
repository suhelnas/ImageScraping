import {Component} from '@angular/core';
import {ImagesServices} from './images.services';
import {SharedService} from './shared.service';
import {Router} from '@angular/router';

@Component({
  selector:'list-keywords',
  templateUrl:'./list.keywords.component.html'
})

export class ListKeywordsComponent {

  keywords;

  constructor(private imageServices: ImagesServices,private data: SharedService,private _router: Router) {
    let that = this;
    let promise = imageServices.getKeywords();
    promise.then(function (data) {
      that.keywords = data;
    })
  }
  ngOnInit(){

  }
  getKeywordImages(key){
    this.data.changeMessage(key);
    this._router.navigate(['/images/list'])

  }
}
