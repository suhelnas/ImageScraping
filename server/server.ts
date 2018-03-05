import * as express from 'express';
import * as http from 'http'
import {RoutesConfig} from './config/routes.config';
import {Routes} from './routes/index';
import * as mongoose from 'mongoose';
import {ScrapImageModel} from './infrastructure/GoogleImages/models/scrap.image.model';
require('dotenv').config();


let mediaBaseDir = process.env.mediaBasePath;
let app = express();
global['dbConn']= mongoose.createConnection('mongodb://suhelnas:Suhel12$@ds155278.mlab.com:55278/zillionscrap')
if(global['dbConn']) {
  console.log("connection created");
  new ScrapImageModel();
  RoutesConfig.init(app, mediaBaseDir);
  Routes.init(app, express.Router());
  http.createServer(app).listen(process.env.PORT || 8080, function () {
    console.log('starting server..')
  })
}

