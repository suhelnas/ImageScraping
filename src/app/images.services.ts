import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ImagesServices{
  constructor(private _http: HttpClient){
  }

  getImages(value):any{
    let that =this;
    return new Promise(function(resolve, reject){
      return that._http.get('/api/search/images?keyword='+value).subscribe(function (data) {
        resolve(data);
      },function (error) {
        reject (error)
      })
    })
  }
  getKeywords(){
    let that =this;
    return new Promise(function(resolve, reject){
      return that._http.get('/api/searched/keywords').subscribe(function (data) {
        resolve(data);
      },function (error) {
        reject (error)
      })
    })
  }
}
