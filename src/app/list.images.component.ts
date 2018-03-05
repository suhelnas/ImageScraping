import {Component} from '@angular/core';
import {SharedService} from './shared.service';
import {ImagesServices} from './images.services';
import {Router} from '@angular/router';

@Component({
  selector:'list-images',
  templateUrl:'./list.images.component.html'
})

export class ListImagesComponent{
  key;
  imageArray;
constructor(private data:SharedService,private imageService:ImagesServices,private _router: Router){

}
  ngOnInit() {
  let that = this;
    that.data.currentMessage.subscribe(message => that.key = message)
    let promise = this.imageService.getImages(that.key);
    promise.then(function (result) {
      that.imageArray = result.data.ImageNames

    })
  }

  goToList(){
  this._router.navigate(['/keyword/list']);
  }
}
