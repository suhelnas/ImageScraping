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
var shared_service_1 = require("./shared.service");
var router_1 = require("@angular/router");
var ListKeywordsComponent = /** @class */ (function () {
    function ListKeywordsComponent(imageServices, data, _router) {
        this.imageServices = imageServices;
        this.data = data;
        this._router = _router;
        var that = this;
        var promise = imageServices.getKeywords();
        promise.then(function (data) {
            that.keywords = data;
        });
    }
    ListKeywordsComponent.prototype.ngOnInit = function () {
    };
    ListKeywordsComponent.prototype.getKeywordImages = function (key) {
        this.data.changeMessage(key);
        this._router.navigate(['/images/list']);
    };
    ListKeywordsComponent = __decorate([
        core_1.Component({
            selector: 'list-keywords',
            templateUrl: './list.keywords.component.html'
        }),
        __metadata("design:paramtypes", [images_services_1.ImagesServices, shared_service_1.SharedService, router_1.Router])
    ], ListKeywordsComponent);
    return ListKeywordsComponent;
}());
exports.ListKeywordsComponent = ListKeywordsComponent;
//# sourceMappingURL=list.keywords.component.js.map