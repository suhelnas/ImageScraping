"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("../infrastructure/GoogleImages/routes");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        routes_1.GoogleImagesRoutes.init(router);
        app.use('/', router);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=index.js.map