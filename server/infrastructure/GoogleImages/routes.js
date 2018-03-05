"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var google_images_controller_1 = require("./controllers/google.images.controller");
var GoogleImagesRoutes = /** @class */ (function () {
    function GoogleImagesRoutes() {
    }
    GoogleImagesRoutes.init = function (router) {
        router.get('/api/search/images', google_images_controller_1.GoogleImagesController.searchImages);
        router.get('/api/searched/keywords', google_images_controller_1.GoogleImagesController.getKeywords);
    };
    return GoogleImagesRoutes;
}());
exports.GoogleImagesRoutes = GoogleImagesRoutes;
//# sourceMappingURL=routes.js.map