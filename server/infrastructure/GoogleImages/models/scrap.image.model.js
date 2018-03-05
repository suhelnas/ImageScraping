"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var ScrapImageModel = /** @class */ (function () {
    function ScrapImageModel() {
        var ScrapImageSchema = new mongoose.Schema({
            ImageTitle: { type: String, required: true },
            ImageNames: [String]
        });
        ScrapImageModel.scrapImageModel = global['dbConn'].model('image', ScrapImageSchema);
    }
    ScrapImageModel.scrapModel = function () {
        return ScrapImageModel.scrapImageModel;
    };
    ScrapImageModel.scrapImageModel = null;
    return ScrapImageModel;
}());
exports.ScrapImageModel = ScrapImageModel;
//# sourceMappingURL=scrap.image.model.js.map