"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var http = require("http");
var routes_config_1 = require("./config/routes.config");
var index_1 = require("./routes/index");
var mongoose = require("mongoose");
var scrap_image_model_1 = require("./infrastructure/GoogleImages/models/scrap.image.model");
require('dotenv').config();
var mediaBaseDir = process.env.mediaBasePath;
var app = express();
global['dbConn'] = mongoose.createConnection('mongodb://localhost/zillion');
if (global['dbConn']) {
    console.log("connection created");
    new scrap_image_model_1.ScrapImageModel();
    routes_config_1.RoutesConfig.init(app, mediaBaseDir);
    index_1.Routes.init(app, express.Router());
    app.get('/*', function (req, res) {
        res.sendFile('/app/dist/index.html');
    });
    http.createServer(app).listen(process.env.PORT || 8080, function () {
        console.log('starting server..');
    });
}
//# sourceMappingURL=server.js.map