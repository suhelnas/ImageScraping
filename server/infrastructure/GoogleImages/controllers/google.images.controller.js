"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var google_images_service_1 = require("../implementation/google.images.service");
var GoogleImagesController = /** @class */ (function () {
    function GoogleImagesController() {
    }
    GoogleImagesController.searchImages = function (req, res) {
        var googleImageService = new google_images_service_1.GoogleImagesService();
        var promise = googleImageService.getImages(req.query.keyword);
        promise = promise.then(function (data) {
            res.send(data);
        });
    };
    return GoogleImagesController;
}());
exports.GoogleImagesController = GoogleImagesController;
//# sourceMappingURL=google.images.controller.js.map