import * as express from 'express';
import {GoogleImagesRoutes} from '../infrastructure/GoogleImages/routes';

export class Routes{
  static init(app:express.Application ,router:any){
    GoogleImagesRoutes.init(router);
    app.use('/', router);
    app.get('/*',function (req,res) {
      res.sendfile('/app/dist/index.html')
    })
  }
}
