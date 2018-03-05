import * as express from 'express'
import {GoogleImagesService, IGoogleImagesService} from '../implementation/google.images.service';
export class GoogleImagesController{
  static searchImages(req,res){
    let googleImageService:IGoogleImagesService = new GoogleImagesService();
    let promise = googleImageService.getImages(req.query.keyword);
    promise = promise.then(function (data) {
      res.send(data);
    })
  }
}
