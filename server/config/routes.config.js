"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var RoutesConfig = /** @class */ (function () {
    function RoutesConfig() {
    }
    RoutesConfig.init = function (application, mediaBaseDir) {
        var mediaDirectory = mediaBaseDir;
        var clientfiles = '/app/dist/';
        fs.existsSync(mediaDirectory) || fs.mkdirSync(mediaDirectory);
        application.use(express.static(clientfiles));
        application.use('/api', express.static(mediaDirectory));
        application.use(bodyParser.urlencoded({ extended: false, limit: 10000000 }));
        application.use(bodyParser.json({ limit: '1000mb' }));
    };
    return RoutesConfig;
}());
exports.RoutesConfig = RoutesConfig;
//# sourceMappingURL=routes.config.js.map