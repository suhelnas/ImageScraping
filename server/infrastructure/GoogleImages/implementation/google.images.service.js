"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Scraper = require("images-scraper");
var path = require("path");
var url = require("url");
var Jimp = require("jimp");
var scrap_image_model_1 = require("../models/scrap.image.model");
require('dotenv').config();
var GoogleImagesService = /** @class */ (function () {
    function GoogleImagesService() {
    }
    GoogleImagesService.prototype.getImages = function (keyword) {
        var that = this;
        var scrapModel = scrap_image_model_1.ScrapImageModel.scrapModel();
        var scrap = new scrapModel();
        var promise = scrapModel.find().where('ImageTitle').equals(keyword);
        promise = promise.then(function (data) {
            if (data && data.length > 0) {
                return new Promise(function (resolve, reject) {
                    resolve({ data: data[0], database: true });
                });
            }
            else {
                var bing = new Scraper.Bing();
                var promise_1 = bing.list({
                    keyword: keyword,
                    num: 15,
                    detail: true
                });
                promise_1 = promise_1.then(function (res) {
                    var imageNames = [];
                    var promises = [];
                    res.forEach(function (element, index) {
                        promises.push(Jimp.read(element.url).then(function (image) {
                            var parsed = url.parse(element.url);
                            var file = path.basename(parsed.pathname);
                            imageNames.push(file);
                            image
                                .resize(Jimp.AUTO, 250) // resize
                                .quality(60)
                                .greyscale()
                                .write(process.env.mediaBasePath + '/' + file);
                        }, function (error) {
                            console.log(error);
                        }));
                    });
                    return Promise.all(promises).then(function () {
                        return { "data": res, "names": imageNames };
                    }, function (error) {
                        console.log(error);
                    });
                });
                promise_1 = promise_1.then(function (value) {
                    scrap.ImageTitle = keyword;
                    scrap.ImageNames = value.names;
                    return scrap.save().then(function () {
                        return { data: value.data, database: false };
                    }, function (error) {
                        console.log(error);
                    });
                });
                return promise_1;
            }
        }, function (error) {
            console.log(error);
        });
        return promise;
    };
    GoogleImagesService.prototype.allKeywords = function () {
        var scrapModel = scrap_image_model_1.ScrapImageModel.scrapModel();
        var scrap = new scrapModel();
        return scrapModel.find().then(function (data) {
            return data;
        });
    };
    return GoogleImagesService;
}());
exports.GoogleImagesService = GoogleImagesService;
//# sourceMappingURL=google.images.service.js.map