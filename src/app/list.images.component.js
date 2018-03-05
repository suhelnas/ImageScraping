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
var shared_service_1 = require("./shared.service");
var images_services_1 = require("./images.services");
var ListImagesComponent = /** @class */ (function () {
    function ListImagesComponent(data, imageService) {
        this.data = data;
        this.imageService = imageService;
    }
    ListImagesComponent.prototype.ngOnInit = function () {
        var that = this;
        that.data.currentMessage.subscribe(function (message) { return that.key = message; });
        var promise = this.imageService.getImages(that.key);
        promise.then(function (result) {
            that.imageArray = result.data.ImageNames;
        });
    };
    ListImagesComponent = __decorate([
        core_1.Component({
            selector: 'list-images',
            templateUrl: './list.images.component.ts'
        }),
        __metadata("design:paramtypes", [shared_service_1.SharedService, images_services_1.ImagesServices])
    ], ListImagesComponent);
    return ListImagesComponent;
}());
exports.ListImagesComponent = ListImagesComponent;
//# sourceMappingURL=list.images.component.js.map