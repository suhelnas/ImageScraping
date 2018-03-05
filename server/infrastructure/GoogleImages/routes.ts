import * as express from 'express'
import {GoogleImagesController} from './controllers/google.images.controller';
export class GoogleImagesRoutes{
  static init(router: express.Router) {
    router.get('/api/search/images', GoogleImagesController.searchImages)
    router.get('/api/searched/keywords', GoogleImagesController.getKeywords)
  }
}
