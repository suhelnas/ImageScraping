import * as express from 'express';
import {GoogleImagesRoutes} from '../infrastructure/GoogleImages/routes';
import * as path from 'path'

export class Routes{
  static init(app:express.Application ,router:any){
    GoogleImagesRoutes.init(router);
    app.use('/', router);
  }
}
