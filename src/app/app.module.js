"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var search_component_1 = require("./search.component");
var images_services_1 = require("./images.services");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var list_keywords_component_1 = require("./list.keywords.component");
var list_images_component_1 = require("./list.images.component");
var shared_service_1 = require("./shared.service");
var appRoutes = [{ path: 'app', component: search_component_1.SearchComponent },
    { path: 'images/list', component: list_images_component_1.ListImagesComponent },
    { path: 'keyword/list', component: list_keywords_component_1.ListKeywordsComponent },
    { path: '', redirectTo: '/app', pathMatch: 'full' },
    { path: '**', redirectTo: '/app}', pathMatch: 'full' }];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent, search_component_1.SearchComponent, list_keywords_component_1.ListKeywordsComponent, list_images_component_1.ListImagesComponent
            ],
            imports: [
                platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes), forms_1.FormsModule, http_1.HttpClientModule
            ],
            providers: [images_services_1.ImagesServices, shared_service_1.SharedService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map