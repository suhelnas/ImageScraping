import * as mongoose from 'mongoose';
export class ScrapImageModel {
  private static scrapImageModel = null;
  constructor(){
   let  ScrapImageSchema=  new mongoose.Schema({
      ImageTitle:{type:String,required:true},
      ImageNames:[String]
    });
    ScrapImageModel.scrapImageModel = global['dbConn'].model('image',ScrapImageSchema)
  }
  static scrapModel(){
    return ScrapImageModel.scrapImageModel;
  }
}
