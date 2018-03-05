"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var images_services_1 = require("./images.services");
var router_1 = require("@angular/router");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(imageServices, _router) {
        this.imageServices = imageServices;
        this._router = _router;
        this.searchKeyword = null;
        this.imageArray = [];
    }
    SearchComponent.prototype.search = function () {
        var that = this;
        var promise = this.imageServices.getImages(this.searchKeyword);
        promise.then(function (result) {
            that.database = result.database;
            if (that.database)
                that.imageArray = result.data.ImageNames;
            else
                that.imageArray = result;
        });
    };
    SearchComponent.prototype.keywordList = function () {
        this._router.navigate(['/keyword/list']);
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search-component',
            templateUrl: './search.component.html'
        }),
        __metadata("design:paramtypes", [images_services_1.ImagesServices, router_1.Router])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map