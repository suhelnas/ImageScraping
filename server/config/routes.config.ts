import * as express from 'express';
import * as bodyParser from 'body-parser'
import * as fs from 'fs';
export class RoutesConfig{
  static init(application:express.Application,mediaBaseDir){
    let mediaDirectory = mediaBaseDir;
    fs.existsSync(mediaDirectory) || fs.mkdirSync(mediaDirectory);
    application.use('/api',express.static(mediaDirectory ))
    application.use(bodyParser.urlencoded({ extended: false, limit: 10000000 }));
    application.use(bodyParser.json({ limit: '1000mb' }));
  }
}
