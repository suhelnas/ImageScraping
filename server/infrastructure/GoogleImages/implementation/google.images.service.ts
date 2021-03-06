import * as Scraper from 'images-scraper';
import * as path from 'path';
import * as url from 'url';
import * as Jimp from 'jimp'
import {ScrapImageModel} from '../models/scrap.image.model';
require('dotenv').config();
export interface IGoogleImagesService{
  getImages(keyword):Promise<any>;
  allKeywords():Promise<any>;
}
export class GoogleImagesService implements IGoogleImagesService{
  getImages(keyword):Promise<any>{
    let that = this;
    let scrapModel=  ScrapImageModel.scrapModel();
    let scrap = new scrapModel();
    let promise = scrapModel.find().where('ImageTitle').equals(keyword)
    promise = promise.then(function(data){
      if(data&& data.length>0){
        return new Promise((resolve, reject) => {
          resolve ({data:data[0],database:true});
        })
      }
      else{
        let bing = new Scraper.Bing();
        let promise = bing.list({
          keyword: keyword,
          num: 15,
          detail: true
        });
        promise = promise.then(function (res) {
          let imageNames =[];
          let promises= []
          res.forEach(function (element,index) {
            promises.push(Jimp.read(element.url).then(function(image){
              let parsed = url.parse(element.url);
              let file =path.basename(parsed.pathname);
              imageNames.push(file);
              image
                .resize(Jimp.AUTO, 250)            // resize
                .quality(60)
                .greyscale()
                .write(process.env.mediaBasePath+'/'+file)
            },function (error) {
              console.log(error);
            })
          );
          });
           return new Promise((resolve, reject) => {
             Promise.all(promises).then(function () {
               scrap.ImageTitle = keyword
               scrap.ImageNames=imageNames;
               scrap.save();
             });
             resolve({data:res,database:false})
           })

        });
        return promise;
      }
    },function (error) {
      console.log(error);
    });
    return promise;
  }
  allKeywords():Promise<any>{
    let scrapModel=  ScrapImageModel.scrapModel();
    let scrap = new scrapModel();
    return scrapModel.find().then(function (data) {
      return data;
    })

  }

}
