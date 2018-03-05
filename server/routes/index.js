"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../infrastructure/GoogleImages/routes");
var path = require("path");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        routes_1.GoogleImagesRoutes.init(router);
        app.use('/', router);
        app.get('/*', function (req, res) {
            res.sendFile(path.join(__dirname + '/dist/index.html'));
        });
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=index.js.map