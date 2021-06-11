(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index/index.component */ "./src/app/pages/index/index.component.ts");
/* harmony import */ var _pages_album_albumindex_albumindex_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/album/albumindex/albumindex.component */ "./src/app/pages/album/albumindex/albumindex.component.ts");
/* harmony import */ var _pages_album_tracks_tracks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/album/tracks/tracks.component */ "./src/app/pages/album/tracks/tracks.component.ts");
/* harmony import */ var _pages_artist_id_id_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/artist/id/id.component */ "./src/app/pages/artist/id/id.component.ts");
/* harmony import */ var _pages_artist_albums_albums_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/artist/albums/albums.component */ "./src/app/pages/artist/albums/albums.component.ts");
/* harmony import */ var _pages_artist_videos_videos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/artist/videos/videos.component */ "./src/app/pages/artist/videos/videos.component.ts");
/* harmony import */ var _pages_artist_artistindex_artistindex_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/artist/artistindex/artistindex.component */ "./src/app/pages/artist/artistindex/artistindex.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { IndexComponent } from './components/index/index.component';






var routes = [
    // working home page might need more links
    { path: '', component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
    { path: 'albums', component: _pages_album_albumindex_albumindex_component__WEBPACK_IMPORTED_MODULE_3__["AlbumindexComponent"] },
    { path: 'albums/:id/tracks', component: _pages_album_tracks_tracks_component__WEBPACK_IMPORTED_MODULE_4__["TracksComponent"] },
    // ARTIST  
    // Search Artist by name
    { path: 'artist', component: _pages_artist_artistindex_artistindex_component__WEBPACK_IMPORTED_MODULE_8__["ArtistindexComponent"] },
    { path: 'artist/:id', component: _pages_artist_id_id_component__WEBPACK_IMPORTED_MODULE_5__["IdComponent"] },
    { path: 'artist/:id/albums', component: _pages_artist_albums_albums_component__WEBPACK_IMPORTED_MODULE_6__["AlbumsComponent"] },
    { path: 'artist/:id/videos', component: _pages_artist_videos_videos_component__WEBPACK_IMPORTED_MODULE_7__["VideosComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "./src/app/components/carousel/carousel.component.ts");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/index/index.component */ "./src/app/pages/index/index.component.ts");
/* harmony import */ var _pages_artist_artistindex_artistindex_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/artist/artistindex/artistindex.component */ "./src/app/pages/artist/artistindex/artistindex.component.ts");
/* harmony import */ var _pages_artist_id_id_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/artist/id/id.component */ "./src/app/pages/artist/id/id.component.ts");
/* harmony import */ var _pages_artist_albums_albums_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/artist/albums/albums.component */ "./src/app/pages/artist/albums/albums.component.ts");
/* harmony import */ var _pages_artist_videos_videos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/artist/videos/videos.component */ "./src/app/pages/artist/videos/videos.component.ts");
/* harmony import */ var _pages_album_tracks_tracks_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/album/tracks/tracks.component */ "./src/app/pages/album/tracks/tracks.component.ts");
/* harmony import */ var _pages_album_albumindex_albumindex_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/album/albumindex/albumindex.component */ "./src/app/pages/album/albumindex/albumindex.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // <-- NgModel lives here



/* Page Components */




/* PAGES */







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _pages_index_index_component__WEBPACK_IMPORTED_MODULE_10__["IndexComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_9__["CarouselComponent"],
                _pages_album_tracks_tracks_component__WEBPACK_IMPORTED_MODULE_15__["TracksComponent"],
                _pages_artist_id_id_component__WEBPACK_IMPORTED_MODULE_12__["IdComponent"],
                _pages_artist_albums_albums_component__WEBPACK_IMPORTED_MODULE_13__["AlbumsComponent"],
                _pages_album_albumindex_albumindex_component__WEBPACK_IMPORTED_MODULE_16__["AlbumindexComponent"],
                _pages_artist_artistindex_artistindex_component__WEBPACK_IMPORTED_MODULE_11__["ArtistindexComponent"],
                _pages_artist_videos_videos_component__WEBPACK_IMPORTED_MODULE_14__["VideosComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/carousel/carousel.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n            <img class=\"d-block w-100\" src=\"assets/img/abstract-art1.jpg\" alt=\"First slide\">\n            <div class=\"carousel-caption\">\n                <h2 class=\"mb-3\">Search your favourite albums</h2>\n                <a routerLink=\"/albums\" class=\"btn btn-success btn-lg\">Search Album</a>\n            </div>\n        </div>\n        <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"assets/img/abstract-art2.jpg\" alt=\"Second slide\">\n            <div class=\"carousel-caption\">\n                <h2 class=\"mb-3\">Search your favourite artists</h2>\n                <a routerLink=\"/artists\" type=\"button\" class=\"btn btn-success btn-lg\">Search Artist</a>\n            </div>\n        </div>\n        <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"assets/img/abstract-art3.jpg\" alt=\"Third slide\">\n            <div class=\"carousel-caption\">\n                <h2 class=\"mb-3\">Search your favourite tracks</h2>\n                <button type=\"button\" class=\"btn btn-success btn-lg\">Coming Soon!</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/components/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/components/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social-icon a {\r\n    background-color: #222326;\r\n    color: white;\r\n    border-radius: 50%;\r\n    -webkit-border-radius: 50%;\r\n    -moz-border-radius: 50%;\r\n    -ms-border-radius: 50%;\r\n    -o-border-radius: 50%;\r\n    font-size: 1.5rem;\r\n    padding: 0.35rem .65rem;\r\n    margin: 0.25rem;\r\n}\r\n\r\n.social-icon.facebook a {\r\n    font-size: 1.5rem;\r\n    padding: 0.35rem .95rem;\r\n}\r\n\r\n.nav-bottom {\r\n    float: left;\r\n}\r\n\r\n.nav-bottom li {\r\n    margin: 5px;\r\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer role=\"contentinfo\" class=\"footer footer-default \">\n    <div class=\"container\">\n        <nav class=\"row py-4\">\n            <div class=\"col-xs-12 col-md-4 col-social\">\n                <ul class=\"nav\">\n                    <li class=\"social-icon\">\n                        <a href=\"http://instagram.com/undreamtmayhem\"><i class=\"fab fa-instagram\"></i></a>\n                    </li>\n                    <li class=\"social-icon\">\n                        <a href=\"https://twitter.com/undreamtmayhem\">\n                            <i class=\"fab fa-twitter\"></i>\n                        </a>\n                    </li>\n                    <li class=\"social-icon facebook\">\n                        <a href=\"https://www.facebook.com/undreamtmayhem\">\n                            <i class=\"fab fa-facebook-f\"></i>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n\n        <nav class=\"row\">\n            <div class=\"col-xs-9 col-md-7\">\n                <ul class=\"nav nav-bottom\">\n                    <li>\n                        <a class=\"text-white\" href=\"\\\">Legal</a>\n                    </li>\n                    <li>\n                        <a class=\"text-white\" href=\"\\\">Privacy</a>\n                    </li>\n                    <li>\n                        <a class=\"text-white\" href=\"\\\">Cookies</a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"col-xs-3 col-md-5 text-right\">\n                <small class=\"copyright\">© 2018 UndreamtMayhem</small>\n            </div>\n        </nav>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n        <a class=\"navbar-brand\" href=\"/\">SpotifyClone</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavId\" aria-controls=\"collapsibleNavId\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n        <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n            <ul class=\"navbar-nav justify-content-end w-100\">\n\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/albums\">Albums</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"/artist\">Artists</a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n</div>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grey-section {\r\n    background-color: #f9f9f9;\r\n}\r\n\r\n.padded-container {\r\n    padding: 40px 15px;\r\n}\r\n\r\nh3.section-header {\r\n    color: #000;\r\n    font-size: 32px;\r\n    font-weight: 700;\r\n    letter-spacing: -1px;\r\n    margin: 10px 0;\r\n}\r\n\r\n.searchform.large input {\r\n    padding: 15px 15% 15px 20px;\r\n    border-radius: 10px;\r\n    -webkit-border-radius: 10px;\r\n    -moz-border-radius: 10px;\r\n    -ms-border-radius: 10px;\r\n    -o-border-radius: 10px;\r\n}\r\n\r\n.searchform input {\r\n    outline: none;\r\n    width: 100%;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    padding: 8px 15% 8px 18px;\r\n    border: 2px solid rgba(25, 25, 25, .3);\r\n    border-radius: 5px;\r\n    background-color: #fff;\r\n    background-image: url('/assets/img/search-solid.svg');\r\n    background-size: 20px;\r\n    background-repeat: no-repeat;\r\n    background-position: 95% 50%;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"grey-section\">\n    <div class=\"container padded-container\" data-spacing=\"300\" style=\"transform: translateY(0px) translateX(0px); opacity: 1;\">\n        <h3 class=\"section-header\">Quick Search</h3>\n        <div class=\"searchform large\">\n            <form role=\"search\" method=\"get\" class=\"search-form\" action=\"\">\n                <input [(ngModel)]=\"searchStr\" (keyup)=\"searchMusic()\" placeholder=\"Search for artist ....\" value=\"\" name=\"s\" type=\"text\">\n            </form>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/pages/album/albumindex/albumindex.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/album/albumindex/albumindex.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/album/albumindex/albumindex.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/album/albumindex/albumindex.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"grey-section\">\n    <div class=\"container padded-container \" data-spacing=\"300\" style=\"transform: translateY(0px) translateX(0px); opacity: 1;\">\n        <h3 class=\"ani fadeInUp section-header \">Search Album</h3>\n        <div class=\"ani fadeInDown searchform large\">\n            <form role=\"search\" method=\"get\" class=\"search-form\" action=\"\">\n                <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" placeholder=\"Search for album ....\" value=\"\" name=\"s\" type=\"text\">\n            </form>\n        </div>\n    </div>\n</section>\n\n<div class=\" container\">\n    <section *ngIf=\"submittable != true\">\n        <h2 class=\"mt-3 text-center\">Recent Searches</h2>\n        <div class=\"card-group search-result\">\n            <div *ngFor=\"let album of albums\" class=\"ani slideInLeft card\">\n                <img *ngIf=\"album.strAlbumThumb\" class=\"card-img-top\" src={{album.strAlbumThumb}} alt=\"{{album.strAlbum}}\">\n                <div class=\"card-body\">\n                    <h5 *ngIf=\"album.strAlbum\" class=\"card-title\">{{album.strAlbum}}\n                        <a routerLink=\"/albums/{{album.idAlbum}}/tracks\" class=\"btn btn-success float-right\">View Tracks</a>\n                    </h5>\n                    <p *ngIf=\"album.strDescriptionEN\" class=\"card-text description\">{{album.strDescriptionEN | slice:0:250}}</p>\n                </div>\n                <ul class=\"list-group list-group-flush\">\n                    <li *ngIf=\"album.intYearReleased\" class=\"list-group-item\">Year Released: {{album.intYearReleased}}</li>\n                    <li *ngIf=\"album.strGenre\" class=\"list-group-item\">Genre: {{album.strGenre}}</li>\n                    <li *ngIf=\"album.strLabel\" class=\"list-group-item\">Record Label: {{album.strLabel}}</li>\n                </ul>\n            </div>\n        </div>\n    </section>\n    <section *ngIf=\"submittable\">\n        <h2 class=\"mt-3 text-center\">Search Results</h2>\n        <div class=\"card-group search-result\">\n            <div *ngFor=\"let album of matchedAlbums$ | async\" class=\"ani slideInLeft card\">\n                <div *ngIf='album.noresult'>\n                    <img class=\"card-img-top\" src=\"assets/img/abstract-art1.jpg\" alt=\"No results found\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">No results found</h5>\n                    </div>\n                </div>\n                <div *ngIf='album.noresult != true'>\n                    <img *ngIf=\"album.strAlbumThumb\" class=\"card-img-top\" src={{album.strAlbumThumb}} alt=\"{{album.strAlbum}}\">\n                    <div class=\"card-body\">\n                        <h5 *ngIf=\"album.strAlbum\" class=\"card-title\">{{album.strAlbum}}\n                            <a routerLink=\"/albums/{{album.idAlbum}}/tracks\" class=\"btn btn-primary float-right\">View Tracks</a>\n                        </h5>\n                        <p *ngIf=\"album.strDescriptionEN\" class=\"card-text description\">{{album.strDescriptionEN | slice:0:250}}</p>\n                    </div>\n                    <ul class=\"list-group list-group-flush\">\n                        <li *ngIf=\"album.intYearReleased\" class=\"list-group-item\">Year Released: {{album.intYearReleased}}</li>\n                        <li *ngIf=\"album.strGenre\" class=\"list-group-item\">Genre: {{album.strGenre}}</li>\n                        <li *ngIf=\"album.strLabel\" class=\"list-group-item\">Record Label: {{album.strLabel}}</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>"

/***/ }),

/***/ "./src/app/pages/album/albumindex/albumindex.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/album/albumindex/albumindex.component.ts ***!
  \****************************************************************/
/*! exports provided: AlbumindexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumindexComponent", function() { return AlbumindexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_album_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/album.service */ "./src/app/services/album.service.ts");
/* harmony import */ var _shared_search_formsearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/search/formsearch */ "./src/app/shared/search/formsearch.ts");
/* harmony import */ var _data_mockAlbums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/mockAlbums */ "./src/data/mockAlbums.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AlbumindexComponent = /** @class */ (function () {
    function AlbumindexComponent(albumService) {
        this.albumService = albumService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.albums = _data_mockAlbums__WEBPACK_IMPORTED_MODULE_5__["ALBUMS"];
        this.searchForm = new _shared_search_formsearch__WEBPACK_IMPORTED_MODULE_4__["SearchAPI"]();
    }
    // Push a search term into the observable stream.
    AlbumindexComponent.prototype.search = function (term) {
        this.submittable = this.searchForm.isSubmitable(term);
        if (this.submittable) {
            var searchterm = this.searchForm.cleansedSearch(term);
            this.searchTerms.next(searchterm);
        }
    };
    AlbumindexComponent.prototype.setupSearch = function () {
        var _this = this;
        this.matchedAlbums$ = this.searchTerms.pipe(
        // wait 700ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) {
            return _this.albumService.retrieveAlbumbyName(term);
        }));
    };
    AlbumindexComponent.prototype.ngOnInit = function () {
        this.setupSearch();
    };
    AlbumindexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-albumindex',
            template: __webpack_require__(/*! ./albumindex.component.html */ "./src/app/pages/album/albumindex/albumindex.component.html"),
            styles: [__webpack_require__(/*! ./albumindex.component.css */ "./src/app/pages/album/albumindex/albumindex.component.css")]
        }),
        __metadata("design:paramtypes", [_services_album_service__WEBPACK_IMPORTED_MODULE_3__["AlbumService"]])
    ], AlbumindexComponent);
    return AlbumindexComponent;
}());



/***/ }),

/***/ "./src/app/pages/album/tracks/tracks.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/album/tracks/tracks.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/album/tracks/tracks.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/album/tracks/tracks.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row my-4\">\n        <div class=\"ani slideInLeft col-md-3\">\n            <ul class=\"list-group list-group-flush\">\n                <li *ngFor=\"let album of albums\" class=\"list-group-item text-center\">\n                    <img src=\"{{album.strAlbumThumb}}\" alt=\"{{album.strAlbum}}\" class=\"img-fluid\">\n                    <h3>{{album.strAlbum}}</h3>\n                    <p>\n                        <a routerLink=\"/artist/{{album.idArtist}}\">{{album.strArtist}}</a>\n                    </p>\n                    <p>{{album.strStyle}}</p>\n                    <p>Songs: {{albumtracks.length}} </p>\n                    <div class=\"btn btn-success btn-lg btn-block\">Play</div>\n                </li>\n            </ul>\n        </div>\n        <div class=\"ani slideInRight col-md-9\">\n            <ul *ngFor=\"let track of albumtracks\" class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\">\n                    <div class=\"row\">\n                        <div class=\"col-md-1\">\n                            <i class=\"fas fa-music\"></i>\n                        </div>\n                        <div class=\"col-md-11\">\n                            <h6> {{track.strTrack}}\n                                <span class=\"float-right\">Track NO: {{track.intTrackNumber}} </span>\n                            </h6>\n                            <p>\n                                <a routerLink=\"/artist/{{track.idArtist}}\">{{track.strArtist}}</a>\n                            </p>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/album/tracks/tracks.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/album/tracks/tracks.component.ts ***!
  \********************************************************/
/*! exports provided: TracksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TracksComponent", function() { return TracksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_album_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/album.service */ "./src/app/services/album.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TracksComponent = /** @class */ (function () {
    function TracksComponent(route, albumService, location) {
        this.route = route;
        this.albumService = albumService;
        this.location = location;
    }
    TracksComponent.prototype.getAlbumTracks = function (albumid) {
        var _this = this;
        this.albumService.retrieveTracksFromAlbumById(albumid)
            .subscribe(function (albums) { return _this.albumtracks = albums; });
    };
    TracksComponent.prototype.getAlbumInformation = function (albumid) {
        var _this = this;
        this.albumService.retrieveAlbumById(albumid)
            .subscribe(function (albums) { return _this.albums = albums; });
    };
    TracksComponent.prototype.ngOnInit = function () {
        var albumid = +this.route.snapshot.paramMap.get('id');
        this.getAlbumTracks(albumid);
        this.getAlbumInformation(albumid);
    };
    TracksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tracks',
            template: __webpack_require__(/*! ./tracks.component.html */ "./src/app/pages/album/tracks/tracks.component.html"),
            styles: [__webpack_require__(/*! ./tracks.component.css */ "./src/app/pages/album/tracks/tracks.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_album_service__WEBPACK_IMPORTED_MODULE_3__["AlbumService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], TracksComponent);
    return TracksComponent;
}());



/***/ }),

/***/ "./src/app/pages/artist/albums/albums.component.css":
/*!**********************************************************!*\
  !*** ./src/app/pages/artist/albums/albums.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/artist/albums/albums.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/artist/albums/albums.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"ani fadeInUp text-center\">\n        <a routerLink=\"/artist/{{artistsAlbums[0].idArtist}}\">\n      {{artistsAlbums[0].strArtist}}\n    </a>\n    </h1>\n\n    <div class=\"card-group\">\n        <div *ngFor=\"let artist of artistsAlbums\" class=\"ani slideInLeft card\">\n            <img *ngIf=\"artist.strAlbumThumb\" class=\"card-img-top\" src={{artist.strAlbumThumb}} alt=\"{{artist.strArtist}}\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">\n                    <a routerLink=\"/albums/{{artist.idAlbum}}/tracks\">\n                        {{artist.strAlbum}}\n                    </a>\n                </h5>\n                <p *ngIf=\"artist.strDescriptionEN\" class=\"card-text description\">{{artist.strDescriptionEN | slice:0:250}}</p>\n            </div>\n            <ul class=\"list-group list-group-flush\">\n                <li *ngIf=\"artist.intYearReleased\" class=\"list-group-item\">Year Formed: {{artist.intYearReleased}}</li>\n                <li *ngIf=\"artist.strGenre\" class=\"list-group-item\">Genre: {{artist.strGenre}}</li>\n                <li *ngIf=\"artist.strLabel\" class=\"list-group-item\">Record Label: {{artist.strLabel}}</li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/artist/albums/albums.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/artist/albums/albums.component.ts ***!
  \*********************************************************/
/*! exports provided: AlbumsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsComponent", function() { return AlbumsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_album_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/album.service */ "./src/app/services/album.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlbumsComponent = /** @class */ (function () {
    function AlbumsComponent(route, albumService, location) {
        this.route = route;
        this.albumService = albumService;
        this.location = location;
    }
    AlbumsComponent.prototype.getAlbumsById = function (artistid) {
        var _this = this;
        this.albumService.retrieveAlbumbyArtistId(artistid)
            .subscribe(function (artistsAlbums) { return _this.artistsAlbums = artistsAlbums; });
    };
    AlbumsComponent.prototype.ngOnInit = function () {
        var artistid = +this.route.snapshot.paramMap.get('id');
        this.getAlbumsById(artistid);
    };
    AlbumsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-albums',
            template: __webpack_require__(/*! ./albums.component.html */ "./src/app/pages/artist/albums/albums.component.html"),
            styles: [__webpack_require__(/*! ./albums.component.css */ "./src/app/pages/artist/albums/albums.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_album_service__WEBPACK_IMPORTED_MODULE_3__["AlbumService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], AlbumsComponent);
    return AlbumsComponent;
}());



/***/ }),

/***/ "./src/app/pages/artist/artistindex/artistindex.component.css":
/*!********************************************************************!*\
  !*** ./src/app/pages/artist/artistindex/artistindex.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/artist/artistindex/artistindex.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/artist/artistindex/artistindex.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"grey-section\">\n    <div class=\"container padded-container\" data-spacing=\"300\" style=\"transform: translateY(0px) translateX(0px); opacity: 1;\">\n        <h3 class=\"ani fadeInUp section-header\">Search Artists</h3>\n        <div class=\"ani fadeInDown searchform large\">\n            <form role=\"search\" method=\"get\" class=\"search-form\" action=\"\">\n                <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" placeholder=\"Search for Artist ....\" value=\"\" name=\"s\" type=\"text\">\n            </form>\n        </div>\n    </div>\n</section>\n\n<div class=\"container\">\n\n    <section *ngIf=\"submittable != true\">\n        <h2 class=\"mt-3 text-center\">Recent Searches</h2>\n        <div class=\"card-group\">\n            <div *ngFor=\"let artist of artists\" class=\"ani slideInLeft card\">\n                <img class=\"card-img-top\" src={{artist.strArtistThumb}} alt=\"{{artist.strArtist}}\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">\n                        <a routerLink=\"{{artist.idArtist}}/albums\">{{artist.strArtist}}</a>\n                    </h5>\n                    <p class=\"card-text description\">{{artist.strBiographyEN | slice:0:250}}</p>\n                </div>\n                <ul class=\"list-group list-group-flush\">\n                    <li *ngIf=\"artist.intFormedYear\" class=\"list-group-item\">Year Formed: {{artist.intFormedYear}}</li>\n                    <li *ngIf=\"artist.strGenre\" class=\"list-group-item\">Genre: {{artist.strGenre}}</li>\n                    <li *ngIf=\"artist.strLabel\" class=\"list-group-item\">Record Label: {{artist.strLabel}}</li>\n                </ul>\n                <div class=\"card-body\">\n                    <a href='http://{{artist.strWebsite}}' class=\"card-link\">Website</a>\n                    <a routerLink=\"{{artist.idArtist}}/albums\" class=\"card-link\">Albums</a>\n                    <a routerLink='{{artist.idArtist}}/videos' class=\"card-link\">Videos</a>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section *ngIf=\"submittable\">\n        <h2 class=\"mt-3 text-center\">Search Results</h2>\n        <div class=\"card-group\">\n            <div *ngFor=\"let artist of matchedArtists$ | async\" class=\"ani slideInLeft card\">\n                <div *ngIf='artist.noresult'>\n                    <img class=\"card-img-top\" src=\"assets/img/abstract-art1.jpg\" alt=\"No results found\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">No results found</h5>\n                    </div>\n                </div>\n                <div *ngIf='artist.noresult != true'>\n                    <img class=\"card-img-top\" src={{artist.strArtistThumb}} alt=\"{{artist.strArtist}}\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">{{artist.strArtist}}</h5>\n                        <p class=\"card-text description\">{{artist.strBiographyEN | slice:0:250}}</p>\n                    </div>\n                    <ul class=\"list-group list-group-flush\">\n                        <li class=\"list-group-item\">Year Formed: {{artist.intFormedYear}}</li>\n                        <li class=\"list-group-item\">Genre: {{artist.strGenre}}</li>\n                        <li class=\"list-group-item\">Record Label: {{artist.strLabel}}</li>\n                    </ul>\n                    <div class=\"card-body\">\n                        <a href='http://{{artist.strWebsite}}' class=\"card-link\">Website</a>\n                        <a routerLink=\"{{artist.idArtist}}/albums\" class=\"card-link\">Albums</a>\n                        <a routerLink='{{artist.idArtist}}/videos' class=\"card-link\">Videos</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/artist/artistindex/artistindex.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/artist/artistindex/artistindex.component.ts ***!
  \*******************************************************************/
/*! exports provided: ArtistindexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistindexComponent", function() { return ArtistindexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_artist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/artist.service */ "./src/app/services/artist.service.ts");
/* harmony import */ var _data_mockArtists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../data/mockArtists */ "./src/data/mockArtists.ts");
/* harmony import */ var _shared_search_formsearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/search/formsearch */ "./src/app/shared/search/formsearch.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArtistindexComponent = /** @class */ (function () {
    function ArtistindexComponent(artistService) {
        this.artistService = artistService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.artists = _data_mockArtists__WEBPACK_IMPORTED_MODULE_4__["ARTISTS"];
        this.searchForm = new _shared_search_formsearch__WEBPACK_IMPORTED_MODULE_5__["SearchAPI"]();
    }
    // Push a search term into the observable stream.
    ArtistindexComponent.prototype.search = function (term) {
        this.submittable = this.searchForm.isSubmitable(term);
        if (this.submittable) {
            var searchterm = this.searchForm.cleansedSearch(term);
            this.searchTerms.next(searchterm);
        }
    };
    ArtistindexComponent.prototype.setupSearch = function () {
        var _this = this;
        this.matchedArtists$ = this.searchTerms.pipe(
        // wait 700ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) {
            return _this.artistService.retrieveArtistByName(term);
        }));
    };
    ArtistindexComponent.prototype.ngOnInit = function () {
        this.setupSearch();
    };
    ArtistindexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-artistindex',
            template: __webpack_require__(/*! ./artistindex.component.html */ "./src/app/pages/artist/artistindex/artistindex.component.html"),
            styles: [__webpack_require__(/*! ./artistindex.component.css */ "./src/app/pages/artist/artistindex/artistindex.component.css")]
        }),
        __metadata("design:paramtypes", [_services_artist_service__WEBPACK_IMPORTED_MODULE_3__["ArtistService"]])
    ], ArtistindexComponent);
    return ArtistindexComponent;
}());



/***/ }),

/***/ "./src/app/pages/artist/id/id.component.css":
/*!**************************************************!*\
  !*** ./src/app/pages/artist/id/id.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/artist/id/id.component.html":
/*!***************************************************!*\
  !*** ./src/app/pages/artist/id/id.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"ani fadeInUp text-center\">\n    {{artists[0].strArtist}}\n</h1>\n\n<div class=\"container\">\n    <div class=\"card-group\">\n        <div *ngFor=\"let artist of artists\" class=\"ani slideInLeft card\">\n            <img class=\"card-img-top\" src={{artist.strArtistThumb}} alt=\"{{artist.strArtist}}\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">{{artist.strArtist}}</h5>\n                <p class=\"card-text description\">{{artist.strBiographyEN | slice:0:250}}</p>\n            </div>\n            <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\">Year Formed: {{artist.intFormedYear}}</li>\n                <li class=\"list-group-item\">Genre: {{artist.strGenre}}</li>\n                <li class=\"list-group-item\">Record Label: {{artist.strLabel}}</li>\n            </ul>\n            <div class=\"card-body\">\n                <a href='http://{{artist.strWebsite}}' class=\"card-link\">Personal Link</a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/artist/id/id.component.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/artist/id/id.component.ts ***!
  \*************************************************/
/*! exports provided: IdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdComponent", function() { return IdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_artist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/artist.service */ "./src/app/services/artist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IdComponent = /** @class */ (function () {
    function IdComponent(route, artistService, location) {
        this.route = route;
        this.artistService = artistService;
        this.location = location;
    }
    IdComponent.prototype.getArtists = function (artistid) {
        var _this = this;
        this.artistService.retrieveByArtistId(artistid)
            .subscribe(function (artistsAlbums) { return _this.artists = artistsAlbums; });
    };
    IdComponent.prototype.ngOnInit = function () {
        var artistid = +this.route.snapshot.paramMap.get('id');
        this.getArtists(artistid);
    };
    IdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-id',
            template: __webpack_require__(/*! ./id.component.html */ "./src/app/pages/artist/id/id.component.html"),
            styles: [__webpack_require__(/*! ./id.component.css */ "./src/app/pages/artist/id/id.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_artist_service__WEBPACK_IMPORTED_MODULE_3__["ArtistService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], IdComponent);
    return IdComponent;
}());



/***/ }),

/***/ "./src/app/pages/artist/videos/videos.component.css":
/*!**********************************************************!*\
  !*** ./src/app/pages/artist/videos/videos.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/artist/videos/videos.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/artist/videos/videos.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <section *ngIf=\"submittable != true\">\n        <h2 class=\"ani fadeInUp mt-3 text-center\">Artists Videos</h2>\n        <div class=\"card-group\">\n            <div *ngFor=\"let video of artistsVideos let i  = index\" class=\"ani slideInLeft card\">\n                <div *ngIf=\"i === 0\">\n                    <iframe class=\"embed-responsive-item w-100 h-50\" [src]=\"sanitizer.bypassSecurityTrustResourceUrl(video.strMusicVid)\" allowfullscreen></iframe>\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">\n                            {{video.strTrack}}\n                        </h5>\n                        <p *ngIf=\"video.strDescriptionEN\" class=\"card-text description\">{{video.strDescriptionEN | slice:0:250}}</p>\n                        <a class=\"btn btn-success btn-outline\" routerLink=\"/albums/{{video.idAlbum}}/tracks\">\n                            View Album\n                        </a>\n                    </div>\n                </div>\n                <div *ngIf=\"i > 0\">\n                    <img *ngIf=\"video.strTrackThumb\" class=\"card-img-top\" src={{video.strTrackThumb}} alt=\"{{video.strArtist}}\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">\n                            {{video.strTrack}}\n                        </h5>\n                        <p *ngIf=\"video.strDescriptionEN\" class=\"card-text description\">{{video.strDescriptionEN | slice:0:250}}</p>\n                        <a class=\"btn btn-success btn-outline\" routerLink=\"/albums/{{video.idAlbum}}/tracks\">\n                            View Album\n                        </a>\n                        <a href=\"{{video.strMusicVid}}\" class=\"btn btn-primary float-right\">Watch Video</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>"

/***/ }),

/***/ "./src/app/pages/artist/videos/videos.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/artist/videos/videos.component.ts ***!
  \*********************************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_artist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/artist.service */ "./src/app/services/artist.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VideosComponent = /** @class */ (function () {
    function VideosComponent(route, artistService, location, sanitizer) {
        this.route = route;
        this.artistService = artistService;
        this.location = location;
        this.sanitizer = sanitizer;
    }
    VideosComponent.prototype.getVideosByArtistId = function (artistid) {
        var _this = this;
        this.artistService.retrieveArtistVideosById(artistid)
            .subscribe(function (artistsVideos) { return _this.artistsVideos = artistsVideos; });
    };
    VideosComponent.prototype.ngOnInit = function () {
        var artistid = +this.route.snapshot.paramMap.get('id');
        this.getVideosByArtistId(artistid);
    };
    VideosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__(/*! ./videos.component.html */ "./src/app/pages/artist/videos/videos.component.html"),
            styles: [__webpack_require__(/*! ./videos.component.css */ "./src/app/pages/artist/videos/videos.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_artist_service__WEBPACK_IMPORTED_MODULE_4__["ArtistService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], VideosComponent);
    return VideosComponent;
}());



/***/ }),

/***/ "./src/app/pages/index/index.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/index/index.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".albums {\r\n    margin: 40px -15px 0;\r\n}\r\n\r\n.album-art {\r\n    position: relative;\r\n    float: left;\r\n    width: 50%;\r\n    height: 50%;\r\n}\r\n\r\n.call-to-action {\r\n    margin: 5% 0%;\r\n}\r\n\r\n.call-to-action .header {\r\n    font-weight: 800;\r\n    margin: 0 0 2rem 0;\r\n}\r\n\r\n.device-list {\r\n    float: left;\r\n    width: 50%;\r\n}\r\n\r\n.device-list li {\r\n    list-style-type: none;\r\n    font-size: 1.1rem;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.device-list a {\r\n    color: #f36f7e;\r\n}"

/***/ }),

/***/ "./src/app/pages/index/index.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/index/index.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-carousel></app-carousel>\n<app-search></app-search>\n<!-- MAKE AS COMPONENTS -->\n<section>\n    <div class=\"call-to-action\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-5\">\n                    <h3 class=\"ani fadeInUp header\">\n                        What will you discover\n                    </h3>\n                    <div class=\"ani fadeInUp\">\n                        <h3>\n                            Albums\n                        </h3>\n                        <p>\n                            You’ll find all the albums you love and get your mood going.\n                        </p>\n                    </div>\n                    <div class=\"ani fadeInUp\">\n                        <h3>\n                            Tracks\n                        </h3>\n                        <p>\n                            There are millions of songs information in our database. Discover new tracks, find your favorite and build the perfect collection.\n                        </p>\n                    </div>\n                    <div class=\"ani fadeInUp\">\n                        <h3>\n                            Artists\n                        </h3>\n                        <p>\n                            Find your favorite artists and discover their albums.\n                        </p>\n                    </div>\n                </div>\n\n                <div class=\"col-sm-8 offset-sm-2 col-md-6 offset-md-0 ani  fadeInUp\">\n                    <div class=\"albums clearfix ani  fadeInUp\">\n                        <div>\n                            <img src=\"assets/img/albumcover.jpg\" class=\"img-fluid album-art\" style=\"display: block;\">\n                        </div>\n                        <div>\n                            <img src=\"assets/img/albumcover.jpg\" class=\"img-fluid album-art\" style=\"display: block;\">\n                        </div>\n                        <div>\n                            <img src=\"assets/img/albumcover.jpg\" class=\"img-fluid album-art\" style=\"display: block;\">\n                        </div>\n                        <div>\n                            <img src=\"assets/img/albumcover.jpg\" class=\"img-fluid album-art\" style=\"display: block;\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<section class=\"bg-light py-4\">\n    <div class=\"devices\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 col-md-6\">\n                    <div class=\"ani  fadeInUp\">\n                        <h4 class=\"mb-4 text-dark\">\n                            No matter what device. You can search your favorite tracks, artist, albums anywhere.\n                        </h4>\n                    </div>\n                    <div class=\"ani fadeInUp\">\n                        <ul class=\"device-list\">\n                            <li>Mobile</li>\n                            <li>Computer</li>\n                            <li>Tablet</li>\n                        </ul>\n                        <ul class=\"device-list\">\n                            <li>\n                                <a id=\"playstation-text-link\" href=\"/\">PlayStation\n                  <sup>®</sup>\n                </a>\n                            </li>\n                            <li>\n                                <a id=\"xbox-text-link\" href=\"/\">Xbox</a>\n                            </li>\n                            <li>\n                                <a id=\"tv-text-link\" href=\"/\">TV</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col-sm-8 offset-sm-2 col-md-6 offset-md-0 ani fadeInUp\">\n                    <img class=\"center-block img-devices img-fluid\" src=\"assets/img/devices.jpg\" alt=\"One account. Listen everywhere.\">\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/pages/index/index.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/pages/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/pages/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/services/album.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/album.service.ts ***!
  \*******************************************/
/*! exports provided: AlbumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumService", function() { return AlbumService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumService = /** @class */ (function () {
    function AlbumService(http) {
        this.http = http;
        this.apikey = 195003;
        this.failedSearchObject = [{ 'noresult': true }];
    }
    AlbumService.prototype.retrieveAlbumById = function (albumid) {
        var _this = this;
        this.albumByIdURL = "http://www.theaudiodb.com/api/v1/json/" + this.apikey + "/album.php?m=" + albumid;
        return this.http.get(this.albumByIdURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            if (res['album'] === null) {
                return _this.failedSearchObject;
            }
            else {
                console.log(res['album']);
                return res['album'];
            }
        }));
    };
    AlbumService.prototype.retrieveAlbumbyName = function (album) {
        var _this = this;
        this.albumByNameURL = "http://www.theaudiodb.com/api/v1/json/" + this.apikey + "/searchalbum.php?a=" + album;
        return this.http.get(this.albumByNameURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            if (res['album'] === null) {
                return _this.failedSearchObject;
            }
            else {
                console.log(res['album']);
                return res['album'];
            }
        }));
    };
    AlbumService.prototype.retrieveTracksFromAlbumById = function (albumid) {
        var _this = this;
        this.albumTracksURL = "http://www.theaudiodb.com/api/v1/json/" + this.apikey + "/track.php?m=" + albumid;
        return this.http.get(this.albumTracksURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            if (res['track'] === null) {
                return _this.failedSearchObject;
            }
            else {
                console.log(res['track']);
                return res['track'];
            }
        }));
    };
    AlbumService.prototype.retrieveAlbumbyArtistId = function (artistid) {
        var _this = this;
        this.albumByArtistIdURL = "http://www.theaudiodb.com/api/v1/json/" + this.apikey + "/album.php?i=" + artistid;
        return this.http.get(this.albumByArtistIdURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            if (res['album'] === null) {
                return _this.failedSearchObject;
            }
            else {
                console.log(res['album']);
                return res['album'];
            }
        }));
    };
    // needs fixing
    // future implememt
    AlbumService.prototype.retrieveAlbumByArtist = function (artistname) {
        this.albumByArtistNameURL = "http://www.theaudiodb.com/api/v1/json/" + this.apikey + "/searchalbum.php?s=" + artistname;
        return this.http.get(this.albumByArtistNameURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (res) { return console.log(res); }));
    };
    AlbumService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AlbumService);
    return AlbumService;
}());



/***/ }),

/***/ "./src/app/services/artist.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/artist.service.ts ***!
  \********************************************/
/*! exports provided: ArtistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistService", function() { return ArtistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/video */ "./src/app/shared/video.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtistService = /** @class */ (function () {
    function ArtistService(http) {
        this.http = http;
        this.apikey = 195003;
        this.failedSearchObject = [{ 'noresult': true }];
    }
    ArtistService.prototype.retrieveArtistByName = function (artistname) {
        var _this = this;
        this.searchUrl = "http://www.theaudiodb.com/api/v1/json/" + this.apikey + "/search.php?s=" + artistname;
        return this.http.get(this.searchUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            if (res['artists'] === null) {
                return _this.failedSearchObject;
            }
            else {
                console.log(res['artists']);
                return res['artists'];
            }
        }));
    };
    // ID
    ArtistService.prototype.retrieveByArtistId = function (artistid) {
        var _this = this;
        this.artistUrl = "http://www.theaudiodb.com/api/v1/json/" + this.apikey + "/artist.php?i=" + artistid;
        return this.http.get(this.artistUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            if (res['artists'] === null) {
                return _this.failedSearchObject;
            }
            else {
                console.log(res['artists']);
                return res['artists'];
            }
        }));
    };
    ArtistService.prototype.retrieveArtistVideosById = function (artistid) {
        var _this = this;
        this.artistVideosUrl = "http://www.theaudiodb.com/api/v1/json/" + this.apikey + "/mvid.php?i=" + artistid;
        return this.http.get(this.artistVideosUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            if (res['mvids'] === null) {
                return _this.failedSearchObject;
            }
            else {
                res['mvids'].map(function (video) {
                    // reduce to function
                    if (video.strTrackThumb === null) {
                        video.strTrackThumb = "assets/img/abstract-art2.jpg";
                    }
                    video.strMusicVid = video.strMusicVid.replace('watch?v=', 'embed/');
                    return new _shared_video__WEBPACK_IMPORTED_MODULE_3__["Video"](video.idArtist, video.idAlbum, video.idTrack, video.strTrack, video.strTrackThumb, video.strMusicVid, video.strDescriptionEN);
                });
                return res['mvids'];
            }
        }));
    };
    ArtistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ArtistService);
    return ArtistService;
}());



/***/ }),

/***/ "./src/app/shared/search/formsearch.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/search/formsearch.ts ***!
  \*********************************************/
/*! exports provided: SearchAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAPI", function() { return SearchAPI; });
var SearchAPI = /** @class */ (function () {
    function SearchAPI() {
    }
    SearchAPI.prototype.isSubmitable = function (term) {
        // Remove white space and beginning and end
        this.SearchTermWhitespaceTrimmed = term.replace(/^\s+/, '').replace(/\s+$/, '');
        // If search box is empty dont send a request
        if (this.SearchTermWhitespaceTrimmed === '') {
            return false;
        }
        else {
            return true;
        }
    };
    SearchAPI.prototype.cleansedSearch = function (term) {
        // Remove white space and beginning and end
        this.SearchTermWhitespaceTrimmed = term.replace(/^\s+/, '').replace(/\s+$/, '');
        return this.SearchTermWhitespaceTrimmed;
    };
    return SearchAPI;
}());



/***/ }),

/***/ "./src/app/shared/video.ts":
/*!*********************************!*\
  !*** ./src/app/shared/video.ts ***!
  \*********************************/
/*! exports provided: Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
var Video = /** @class */ (function () {
    function Video(idArtist, idAlbum, idTrack, strTrack, strTrackThumb, strMusicVid, strDescriptionEN) {
        this.idArtist;
        this.idAlbum;
        this.idTrack;
        this.strTrack;
        this.strTrackThumb;
        this.strMusicVid;
        this.strDescriptionEN;
    }
    return Video;
}());



/***/ }),

/***/ "./src/data/mockAlbums.ts":
/*!********************************!*\
  !*** ./src/data/mockAlbums.ts ***!
  \********************************/
/*! exports provided: ALBUMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALBUMS", function() { return ALBUMS; });
var ALBUMS = [
    {
        idAlbum: 2273294,
        idArtist: 132234,
        idLabel: 44378,
        strAlbum: 'SremmLife 2',
        strAlbumStripped: 'SremmLife 2',
        strArtist: 'Rae Sremmurd',
        strArtistStripped: 'Rae Sremmurd',
        intYearReleased: 2016,
        strStyle: '',
        strGenre: 'Hip-Hop',
        strLabel: 'Interscope Records',
        strReleaseFormat: 'Album',
        intSales: 0,
        strAlbumThumb: 'http://assets.fanart.tv/fanart/music/c78c3026-426b-4580-ab23-08490bb8b515/albumcover/sremmlife-2-57e3daaa1d98b.jpg',
        strAlbumThumbBack: null,
        strAlbumCDart: '',
        strAlbumSpine: null,
        strDescriptionEN: "SremmLife 2 is the second studio album by American hip hop duo Rae Sremmurd. It was released on August 12, 2016, by EarDrummers Entertainment and Interscope Records. The album serves as a sequel to SremmLife (2015). The album was supported by three singles: \By Chance\, \Look Alive\ and \Black Beatles\ featuring Gucci Mane.\n\nThe lead single from the album, called \By Chance\ was released on February 13, 2016. The track was produced by the duo's frequent collaborator Mike Will Made It, with additional production by one of these newest members from his EarDrummers label Resource.The song did not fair well commercially, becoming the group's only single that has failed to chart on the Billboard Hot 100.\n\nThe second single from the album, called \Look Alive\ was released on April 14, 2016. Mike Will Made It also produced this track. The song performed moderately on charts, peaking at number 76 on the Billboard Hot 100.\n\n\Black Beatles\ was sent to urban radio on September 13, 2016, as the third single. On September 22, 2016, the music video for \Black Beatles\ was released on Rae Sremmurd's Vevo account on YouTube.It peaked at number one on the Billboard Hot 100, becoming Rae Sremmurd's first number one single and making it the most successful single of their career.\n\nRae Sremmurd announced that they would tour with a American rapper Lil Yachty, in promotion of his new album. The \u2018SremmLife 2\u2019 tour begins in New Orleans, Louisiana at the Republic NOLA on October 1, 2016, and ends in San Diego, California at the Observatory on November 16, 2016.",
        strDescriptionDE: null,
        strDescriptionFR: null,
        strDescriptionCN: null,
        strDescriptionIT: null,
        strDescriptionJP: null,
        strDescriptionRU: null,
        strDescriptionES: null,
        strDescriptionPT: null,
        strDescriptionSE: null,
        strDescriptionNL: null,
        strDescriptionHU: null,
        strDescriptionNO: null,
        strDescriptionIL: null,
        strDescriptionPL: null,
        intLoved: null,
        intScore: 7.5,
        intScoreVotes: 2,
        strReview: '',
        strMood: 'Angry',
        strTheme: '',
        strSpeed: 'Medium',
        strLocation: null,
        strMusicBrainzID: 'c9a9adc7-3c09-4bec-948c-4cccb3e6bfdc',
        strMusicBrainzArtistID: 'c78c3026-426b-4580-ab23-08490bb8b515',
        strAllMusicID: null,
        strBBCReviewID: null,
        strRateYourMusicID: null,
        strDiscogsID: '1051795',
        strWikidataID: 'Q23838424',
        strWikipediaID: null,
        strGeniusID: null,
        strLyricWikiID: null,
        strMusicMozID: null,
        strItunesID: null,
        strAmazonID: null,
        strLocked: 'unlocked'
    },
    {
        idAlbum: 2118420,
        idArtist: 112459,
        idLabel: 111,
        strAlbum: 'Red Album',
        strAlbumStripped: 'Red Album',
        strArtist: 'Baroness',
        strArtistStripped: 'Baroness',
        intYearReleased: 2007,
        strStyle: 'Rock/Pop',
        strGenre: 'Metal',
        strLabel: null,
        strReleaseFormat: 'Album',
        intSales: 0,
        strAlbumThumb: 'http://www.theaudiodb.com/images/media/album/thumb/yvqwtp1364729876.jpg',
        strAlbumThumbBack: 'null',
        strAlbumCDart: '',
        strAlbumSpine: null,
        strDescriptionEN: 'Red Album is the first LP released by the progressive metal band Baroness. Red Album was named Album of the Year by heavy metal magazine Revolver.',
        strDescriptionDE: null,
        strDescriptionFR: null,
        strDescriptionCN: null,
        strDescriptionIT: null,
        strDescriptionJP: null,
        strDescriptionRU: null,
        strDescriptionES: null,
        strDescriptionPT: null,
        strDescriptionSE: null,
        strDescriptionNL: null,
        strDescriptionHU: null,
        strDescriptionNO: null,
        strDescriptionIL: null,
        strDescriptionPL: null,
        intLoved: null,
        intScore: null,
        intScoreVotes: null,
        strReview: '',
        strMood: '',
        strTheme: null, strSpeed: '', strLocation: null,
        strMusicBrainzID: '0f72f6e7-e59d - 3501 - 94a5-97ff3061176c',
        strMusicBrainzArtistID: 'eeb41a1e - 4326 - 4d04-8c47-0f564ceecd68',
        strAllMusicID: 'mw0000584888',
        strBBCReviewID: null, strRateYourMusicID: 'red_album',
        strDiscogsID: '60260', strWikidataID: 'Q7303621',
        strWikipediaID: 'Red_Album_(Baroness_album)',
        strGeniusID: null, strLyricWikiID: null,
        strMusicMozID: null, strItunesID: null,
        strAmazonID: null,
        strLocked: 'unlocked'
    },
    {
        idAlbum: 2116854,
        idArtist: 111425,
        idLabel: 111,
        strAlbum: 'Blue',
        strAlbumStripped: 'Blue',
        strArtist: 'Joni Mitchell',
        strArtistStripped: 'Joni Mitchell',
        intYearReleased: 1971,
        strStyle: 'Folk', strGenre: 'Folk',
        strLabel: null, strReleaseFormat: 'Album',
        intSales: 0,
        strAlbumThumb: 'http://www.theaudiodb.com/images/media/album/thumb/utxtpv1375569314.jpg',
        strAlbumThumbBack: null,
        strAlbumCDart: 'http://www.theaudiodb.com/images/media/album/cdart/blue-5012a8cedc625.png',
        strAlbumSpine: null,
        strDescriptionEN: ' Blue(1971) is the fourth album of Canadian singer-songwriter Joni Mitchell.Exploring the various facets of relationships from infatuation on \A Case of You\ to insecurity on \This Flight Tonight\, the songs feature simple accompaniments on piano, guitar, and Appalachian dulcimer.Blue was a critical and commercial success, reaching #15 on the Billboard 200 and #3 in the UK Albums Chart.The single \Carey\ reached #93 on the Billboard Hot 100 chart.In January 2000, the New York Times chose Blue as one of the 25 albums that represented \turning points and pinnacles in 20th - century popular music\.',
        strDescriptionDE: null,
        strDescriptionFR: null, strDescriptionCN: null,
        strDescriptionIT: null, strDescriptionJP: null,
        strDescriptionRU: null, strDescriptionES: null,
        strDescriptionPT: null, strDescriptionSE: null,
        strDescriptionNL: null, strDescriptionHU: null,
        strDescriptionNO: null, strDescriptionIL: null,
        strDescriptionPL: null, intLoved: null,
        intScore: 8.5, intScoreVotes: 2,
        strReview: 'Blue(1971) is the fourth album of Canadian singer - songwriter Joni Mitchell.Exploring the various facets of relationships from infatuation on \A Case of You\ to insecurity on \This Flight Tonight\, the songs feature simple accompaniments on piano, guitar, and Appalachian dulcimer.Blue was a critical and commercial success, reaching #15 on the Billboard 200 and #3 in the UK Albums Chart.The single \Carey\ reached #93 on the Billboard Hot 100 chart.In January 2000, the New York Times chose Blue as one of the 25 albums that represented \turning points and pinnacles in 20th - century popular music\.',
        strMood: 'Dreamy',
        strTheme: '',
        strSpeed: 'Medium', strLocation: null,
        strMusicBrainzID: '42d725fb - a8b7 - 388c - 8866 - 3b02789af326',
        strMusicBrainzArtistID: 'a6de8ef9 - b1a1 - 4756 - 97aa - 481bbb8a4069',
        strAllMusicID: 'mw0000193531',
        strBBCReviewID: 'rvzb', strRateYourMusicID: 'blue',
        strDiscogsID: '47744', strWikidataID: 'Q804554',
        strWikipediaID: 'Blue_(Joni_Mitchell_album)',
        strGeniusID: null,
        strLyricWikiID: null, strMusicMozID: null,
        strItunesID: null, strAmazonID: null, strLocked: 'unlocked'
    },
    {
        idAlbum: 2273294,
        idArtist: 132234,
        idLabel: 44378,
        strAlbum: 'SremmLife 2',
        strAlbumStripped: 'SremmLife 2',
        strArtist: 'Rae Sremmurd',
        strArtistStripped: 'Rae Sremmurd',
        intYearReleased: 2016,
        strStyle: '',
        strGenre: 'Hip-Hop',
        strLabel: 'Interscope Records',
        strReleaseFormat: 'Album',
        intSales: 0,
        strAlbumThumb: 'http://assets.fanart.tv/fanart/music/c78c3026-426b-4580-ab23-08490bb8b515/albumcover/sremmlife-2-57e3daaa1d98b.jpg',
        strAlbumThumbBack: null,
        strAlbumCDart: '',
        strAlbumSpine: null,
        strDescriptionEN: "SremmLife 2 is the second studio album by American hip hop duo Rae Sremmurd. It was released on August 12, 2016, by EarDrummers Entertainment and Interscope Records. The album serves as a sequel to SremmLife (2015). The album was supported by three singles: \By Chance\, \Look Alive\ and \Black Beatles\ featuring Gucci Mane.\n\nThe lead single from the album, called \By Chance\ was released on February 13, 2016. The track was produced by the duo's frequent collaborator Mike Will Made It, with additional production by one of these newest members from his EarDrummers label Resource.The song did not fair well commercially, becoming the group's only single that has failed to chart on the Billboard Hot 100.\n\nThe second single from the album, called \Look Alive\ was released on April 14, 2016. Mike Will Made It also produced this track. The song performed moderately on charts, peaking at number 76 on the Billboard Hot 100.\n\n\Black Beatles\ was sent to urban radio on September 13, 2016, as the third single. On September 22, 2016, the music video for \Black Beatles\ was released on Rae Sremmurd's Vevo account on YouTube.It peaked at number one on the Billboard Hot 100, becoming Rae Sremmurd's first number one single and making it the most successful single of their career.\n\nRae Sremmurd announced that they would tour with a American rapper Lil Yachty, in promotion of his new album. The \u2018SremmLife 2\u2019 tour begins in New Orleans, Louisiana at the Republic NOLA on October 1, 2016, and ends in San Diego, California at the Observatory on November 16, 2016.",
        strDescriptionDE: null,
        strDescriptionFR: null,
        strDescriptionCN: null,
        strDescriptionIT: null,
        strDescriptionJP: null,
        strDescriptionRU: null,
        strDescriptionES: null,
        strDescriptionPT: null,
        strDescriptionSE: null,
        strDescriptionNL: null,
        strDescriptionHU: null,
        strDescriptionNO: null,
        strDescriptionIL: null,
        strDescriptionPL: null,
        intLoved: null,
        intScore: 7.5,
        intScoreVotes: 2,
        strReview: '',
        strMood: 'Angry',
        strTheme: '',
        strSpeed: 'Medium',
        strLocation: null,
        strMusicBrainzID: 'c9a9adc7-3c09-4bec-948c-4cccb3e6bfdc',
        strMusicBrainzArtistID: 'c78c3026-426b-4580-ab23-08490bb8b515',
        strAllMusicID: null,
        strBBCReviewID: null,
        strRateYourMusicID: null,
        strDiscogsID: '1051795',
        strWikidataID: 'Q23838424',
        strWikipediaID: null,
        strGeniusID: null,
        strLyricWikiID: null,
        strMusicMozID: null,
        strItunesID: null,
        strAmazonID: null,
        strLocked: 'unlocked'
    },
    {
        idAlbum: 2118420,
        idArtist: 112459,
        idLabel: 111,
        strAlbum: 'Red Album',
        strAlbumStripped: 'Red Album',
        strArtist: 'Baroness',
        strArtistStripped: 'Baroness',
        intYearReleased: 2007,
        strStyle: 'Rock/Pop',
        strGenre: 'Metal',
        strLabel: null,
        strReleaseFormat: 'Album',
        intSales: 0,
        strAlbumThumb: 'http://www.theaudiodb.com/images/media/album/thumb/yvqwtp1364729876.jpg',
        strAlbumThumbBack: 'null',
        strAlbumCDart: '',
        strAlbumSpine: 'null',
        strDescriptionEN: 'Red Album is the first LP released by the progressive metal band Baroness. Red Album was named Album of the Year by heavy metal magazine Revolver.',
        strDescriptionDE: null, strDescriptionFR: null,
        strDescriptionCN: null, strDescriptionIT: null,
        strDescriptionJP: null, strDescriptionRU: null,
        strDescriptionES: null, strDescriptionPT: null,
        strDescriptionSE: null, strDescriptionNL: null,
        strDescriptionHU: null, strDescriptionNO: null,
        strDescriptionIL: null,
        strDescriptionPL: null,
        intLoved: null,
        intScore: null,
        intScoreVotes: null,
        strReview: '',
        strMood: '',
        strTheme: null,
        strSpeed: '',
        strLocation: null,
        strMusicBrainzID: '0f72f6e7-e59d - 3501 - 94a5-97ff3061176c',
        strMusicBrainzArtistID: 'eeb41a1e - 4326 - 4d04-8c47-0f564ceecd68',
        strAllMusicID: 'mw0000584888',
        strBBCReviewID: null, strRateYourMusicID: 'red_album',
        strDiscogsID: '60260', strWikidataID: 'Q7303621',
        strWikipediaID: 'Red_Album_(Baroness_album)',
        strGeniusID: null, strLyricWikiID: null,
        strMusicMozID: null, strItunesID: null,
        strAmazonID: null,
        strLocked: 'unlocked'
    },
];


/***/ }),

/***/ "./src/data/mockArtists.ts":
/*!*********************************!*\
  !*** ./src/data/mockArtists.ts ***!
  \*********************************/
/*! exports provided: ARTISTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARTISTS", function() { return ARTISTS; });
var ARTISTS = [
    {
        idArtist: 132234,
        strArtist: 'Rae Sremmurd',
        strArtistStripped: null,
        strArtistAlternate: '',
        strLabel: 'Interscope Records',
        idLabel: 44378, intFormedYear: 2013,
        intBornYear: 2013,
        intDiedYear: null,
        strDisbanded: null,
        strStyle: 'Urban / R & B',
        strGenre: 'Hip - Hop',
        strMood: 'Angry',
        strWebsite: 'www.raesremmurd.com',
        strFacebook: '', strTwitter: '',
        strBiographyEN: "Rae Sremmurd is an American hip hop duo, composed of Swae Lee(born June 7, 1995) and Slim Jimmy(born December 29, 1993) from Tupelo, Mississippi.They are perhaps best known for their single \No Flex Zone!\, which has so far peaked at number 36 on the US Billboard Hot 100 chart.Similarly, their song \No Type\ reached 17 on the Hot 100 November 2014. They are based in Atlanta, Georgia.\n\n\Rae Sremmurd\ is \Ear Drummers\ backwards, which is the name of their home label.Khalif \Swae Lee\ Brown and Aaquil \Slim Jimmy\ Brown grew up in Tupelo, Mississippi.According to an interview by Complex, at a point in their life they were homeless.\nBefore they became Rae Sremmurd, they were in a trio going by the name of \Dem Outta State Boyz\ which used to upload videos to social media like YouTube and song to Reverbnation, looking for recognition.They first became noticed by P - Nasty when his cousin had told him about them.P - Nasty had called them telling them he was interested in their music, and for them to make more music and get a video ready",
        strBiographyDE: null, strBiographyFR: null,
        strBiographyCN: null, strBiographyIT: null,
        strBiographyJP: null, strBiographyRU: null,
        strBiographyES: null, strBiographyPT: null,
        strBiographySE: null, strBiographyNL: null,
        strBiographyHU: null, strBiographyNO: null,
        strBiographyIL: null, strBiographyPL: null,
        strGender: 'Male',
        intMembers: 2,
        strCountry: 'Tupelo, Mississippi',
        strCountryCode: 'US',
        strArtistThumb: 'http://www.theaudiodb.com/images/media/artist/thumb/wvvqpq1416742426.jpg',
        strArtistLogo: 'http://media.theaudiodb.com/images/media/artist/logo/ssvywu1480075645.png', strArtistClearart: null, strArtistWideThumb: null,
        strArtistFanart: 'http://media.theaudiodb.com/images/media/artist/fanart/rwuxyq1441506216.jpg',
        strArtistFanart2: 'http://media.theaudiodb.com/images/media/artist/fanart/xwxyxu1441506246.jpg',
        strArtistFanart3: 'http://media.theaudiodb.com/images/media/artist/fanart/qswqxx1441506282.jpg',
        strArtistBanner: 'http://media.theaudiodb.com/images/media/artist/banner/uswxxw1471527905.jpg',
        strMusicBrainzID: 'c78c3026 - 426b - 4580 - ab23 - 08490bb8b515',
        strLastFMChart: null,
        strLocked: 'unlocked'
    },
    {
        idArtist: 111239,
        idLabel: 45114,
        intBornYear: null,
        intDiedYear: null,
        intFormedYear: 1996,
        intMembers: 4,
        strArtist: "Coldplay",
        strArtistAlternate: "",
        strArtistBanner: "http://www.theaudiodb.com/images/media/artist/banner/xuypqw1386331010.jpg",
        strArtistClearart: "http://media.theaudiodb.com/images/media/artist/clearart/ruyuwv1510827568.png",
        strArtistFanart: "http://media.theaudiodb.com/images/media/artist/fanart/spvryu1347980801.jpg",
        strArtistFanart2: "http://media.theaudiodb.com/images/media/artist/fanart/uupyxx1342640221.jpg",
        strArtistFanart3: "http://media.theaudiodb.com/images/media/artist/fanart/qstpsp1342640238.jpg",
        strArtistLogo: "http://www.theaudiodb.com/images/media/artist/logo/urspuv1434553994.png",
        strArtistStripped: null,
        strArtistThumb: "http://www.theaudiodb.com/images/media/artist/thumb/uxrqxy1347913147.jpg",
        strArtistWideThumb: "http://media.theaudiodb.com/images/media/artist/widethumb/sxqspt1516190718.jpg",
        strBiographyCN: "酷玩樂團（英语：Coldplay）是成立於1997年、來自倫敦的英國另類搖滾樂團。團員包括克里斯·馬汀（主唱、鍵盤、吉他）、強尼·邦藍（主奏吉他）、蓋·貝瑞曼（貝斯吉他）及威爾·查恩（鼓、合音、其他樂器）。樂團最早成形於馬汀與邦藍就讀於倫敦大學學院 (UCL)時期。 酷玩樂團的早期作品常被與電台司令、U2、傑夫·巴克利及崔維斯相提並論[1]。2000年，他們以單曲《Yellow》漸獲關注，隨後發行首張專輯《降落傘》，初試啼聲便在國際間大放異彩，並以該專輯獲水星音樂獎提名。2002年，酷玩樂團以第二張專輯《玩過頭》，奪得NME雜誌年度最佳專輯獎等多項大獎。酷玩樂團接著在2005年發行《XY密碼》專輯，雖然反應不如上述作品熱烈，但仍普遍獲得正面評價。2008年，酷玩樂團與製作人布萊恩·伊諾，推出第四張專輯《玩酷人生》，廣受好評，勇奪葛萊美等多項大獎[2]。2011年，他們繼續與布萊恩·伊諾合作，發行了第五張專輯《彩繪人生》，和之前的幾張專輯一樣取得了熱烈的反響。在全球，酷玩樂團已擁有超過五千萬的專輯銷售量[3]。 自發行了《降落傘》後，酷玩樂團的每張專輯作品皆來有自各方的影響，如《玩過頭》的回聲與兔人合唱團[4]、凱特·布希、喬治·哈里森[5]與謬思合唱團[6]，《XY密碼》的強尼·凱許與發電廠樂團[7]，以及《玩酷人生》的布勒合唱團、拱廊之火樂團與我的血腥情人節合唱團[8]。酷玩樂團同時也積極投身於社會與政治組織活動，如樂施會的貿易要公平活動及國際特赦組織等。酷玩樂團亦參與演出各式慈善活動中，如Band Aid 20、現場八方、青少年癌症籌款音樂會等[9]。",
        strBiographyDE: "Coldplay ist eine britische Pop-Rock-Band, bestehend aus Chris Martin, Jonny Buckland, Will Champion und Guy Berryman. Sie gehört zu den bekanntesten Vertretern des Britpop und ist eine der weltweit erfolgreichsten Bands des vergangenen Jahrzehnts. Die Band hat knapp 60 Millionen Tonträger weltweit verkauft, davon 40 Millionen Alben. Martin, Berryman, Buckland und Champion lernten sich als Studenten am University College London kennen und gründeten im September 1996 eine Band. Martin studierte Alte Geschichte, Buckland Mathematik, Astrophysik und Astronomie und Champion Anthropologie. Berryman studierte zunächst Ingenieurswissenschaften und später Architektur. Im Gegensatz zu allen anderen Bandmitgliedern schloss er kein Studium ab. Chris Martin und Jonny Buckland, die sich in der Orientierungswoche am College kennenlernten, waren die ersten Mitglieder der Band. Sie spielten zunächst in einer Band namens „Pectoralz“, bis Guy Berryman, ein Klassenkamerad der beiden, hinzustieß. Ursprünglich gründeten die vier Mitglieder die Band unter dem Namen „Starfish“. Unter diesem Namen spielte die Band zunächst einige Gigs in kleineren Clubs in Camden. Phil Harvey, ein Studienkollege und Freund von Chris, wurde hierfür als Manager engagiert. Im März 1998 erschien die Safety EP, von der nur 500 Kopien veröffentlicht wurden. Diese diente größtenteils als Demo, sodass lediglich 50 Kopien in den offiziellen Verkauf gingen. Die EP ist somit eine Rarität und wird unter Sammlern enorm hoch gehandelt. Coldplay wurden daraufhin vom kleinen Independent-Label Fierce Panda Records unter Vertrag genommen. Die erste Veröffentlichung war die Brothers and Sisters EP, die im Februar 1999 in gerade einmal vier Tagen aufgenommen wurde. Im Frühling 1999 unterschrieben Coldplay einen Fünf-Alben-Vertrag bei Parlophone, wo sie bis heute unter Vertrag sind. Nach ihrem ersten Auftritt beim Glastonbury Festival ging die Band ins Studio, um ihre dritte EP The Blue Room aufzunehmen, von der im Oktober 5000 Stück in den Verkauf gingen. Bei der Produktion kam es zu Streitereien innerhalb der Band, sodass Champion durch Martin aus der Band geworfen wurde, jedoch kurz darauf wieder zurückgeholt wurde. Um weiteren Ärger zu vermeiden, beschlossen die vier, Regeln innerhalb der Band einzuführen: 1. Gewinne werden geteilt, 2. Drogenkonsum führt zum Ausschluss aus der Band.",
        strBiographyEN: "Coldplay are a British alternative rock band formed in 1996 by lead vocalist Chris Martin and lead guitarist Jonny Buckland at University College London. After they formed Pectoralz, Guy Berryman joined the group as a bassist and they changed their name to Starfish. Will Champion joined as a drummer, backing vocalist, and multi-instrumentalist, completing the line-up. Manager Phil Harvey is often considered an unofficial fifth member. The band renamed themselves 'Coldplay' in 1998, before recording and releasing three EPs; Safety in 1998, Brothers & Sisters as a single in 1999 and The Blue Room in the same year. The latter was their first release on a major label, after signing to Parlophone. They achieved worldwide fame with the release of the single 'Yellow' in 2000, followed by their debut album released in the same year, Parachutes, which was nominated for the Mercury Prize. The band's second album, A Rush of Blood to the Head (2002), was released to critical acclaim and won multiple awards, including NME's Album of the Year, and has been widely considered the best of the Nelson-produced Coldplay albums. Their next release, X&Y, the best-selling album worldwide in 2005, was met with mostly positive reviews upon its release, though some critics felt that it was inferior to its predecessor. The band's fourth studio album, Viva la Vida or Death and All His Friends (2008), was produced by Brian Eno and released again to largely favourable reviews, earning several Grammy nominations and wins at the 51st Grammy Awards. On 24 October 2011, they released their fifth studio album, Mylo Xyloto, which was met with mixed to positive reviews, and was the UK's best-selling rock album of 2011. The band has won a number of music awards throughout their career, including seven Brit Awards winning Best British Group three times, four MTV Video Music Awards, and seven Grammy Awards from twenty nominations. As one of the world's best-selling music artists, Coldplay have sold over 55 million records worldwide. In December 2009, Rolling Stone readers voted the group the fourth best artist of the 2000s. Coldplay have been an active supporter of various social and political causes, such as Oxfam's Make Trade Fair campaign and Amnesty International. The group have also performed at various charity projects such as Band Aid 20, Live 8, Sound Relief, Hope for Haiti Now: A Global Benefit for Earthquake Relief, The Secret Policeman's Ball, and the Teenage Cancer Trust.",
        strBiographyES: "Coldplay es una banda británica de rock alternativo formada en Londres en 1996. El grupo está integrado por Chris Martin (voz, teclado, guitarra), Jon Buckland (guitarra principal), Guy Berryman (bajo eléctrico) y Will Champion (batería, coros y otros instrumentos). Los primeros trabajos de Coldplay hicieron que la banda fuera comparada repetidas veces con artistas como Oasis, Radiohead, INXS, U2 y Travis. Alcanzaron el éxito internacional con el lanzamiento de su sencillo «Yellow», seguido por su álbum de debut, Parachutes (2000), que fue nominado a los Premios Mercury. Su segundo álbum, A Rush of Blood to the Head (2002) ganó múltiples premios, incluido el de Álbum del Año según el semanario NME. Pese a que su tercer álbum, X&Y (2005) no causó tanto entusiasmo, tuvo igualmente una recepción positiva. El cuarto álbum de estudio de la banda, Viva la Vida or Death and All His Friends (2008) fue producido por Brian Eno y generó excelentes críticas, llegando a recibir nominaciones a los premios Grammy y otra clase de homenajes. Coldplay ha vendido internacionalmente 50 millones de copias. Tras el lanzamiento de Parachutes, la banda recibió la influencia de otros artistas, tales como Kate Bush, U2, George Harrison, y Muse en A Rush of Blood to the Head, Johnny Cash en X&Y y Blur y Arcade Fire en Viva la Vida. Coldplay ha sido siempre un grupo defensor activo de varias causas políticas y sociales como la campaña de Oxfam Make Trade Fair y Amnistía Internacional. Además han participado en muchos proyectos de caridad como Band Aid 20, Live 8, Sound Relief, Hope for Haiti Now: A Global Benefit for Earthquake Relief y Teenage Cancer Trust. Su nuevo álbum, Mylo Xyloto debutó en el número 1 en 21 países. Debutando también en UK con 208.000 copias, muy lejos de su álbum antecesor Viva la Vida or Death and All His Friends. Hasta la fecha el álbum ha vendido más de 6 millones copias, siendo el mejor álbum de rock vendido a nivel mundial desde el anterior álbum de la banda publicado en 2008.",
        strBiographyFR: "Coldplay est un groupe de rock britannique formé à Londres en 1996 par le chanteur, guitariste et pianiste Chris Martin et le guitariste Jon Buckland. Le bassiste Guy Berryman rejoint ensuite la formation, qui prend le nom de Starfish avant que le batteur Will Champion devienne membre à son tour et que le producteur Phil Harvey s'associe avec eux dans leur entreprise3. En 1998, le groupe voit le jour sous son appellation définitive et sort deux premiers EPs. Ils en profitent alors pour signer chez le label Parlophone2. Avec cinq albums studio publiés, le dernier étant Mylo Xyloto, sorti le 24 octobre 20114, Coldplay est aujourd'hui l'un des plus grands groupes à succès du nouveau millénaire avec près de 60 millions d'albums vendus5. Critiqué mais régulièrement récompensé, le groupe a remporté 8 Brit Awards, 7 Grammy Awards, 6 Q Awards et 5 NME Awards. Il est aussi élu en décembre 2009, quatrième meilleur artiste des années 2000 par les lecteurs du magazine Rolling Stone6. Le groupe prend cause dans différentes œuvres caritatives et officie depuis ses débuts pour le commerce équitable aux côtés d'Oxfam international7 et d'Amnesty International8. Cet engagement les conduit à participer à des groupes caritatifs tels que Band Aid 20 et à jouer dans des concerts tels que le Live 8, le Fairplay7, le Sound Relief, le Hope for Haiti Now7 ou le Teenage Cancer Trust9. Chris Martin et Jonny Buckland se rencontrent en septembre 1996 à l’University College de Londres. Les deux amis, passionnés de musique, passent le reste de l'année universitaire à la planification d'un groupe, finalement appelé Pectoralz. Ils sont bientôt rejoints par Guy Berryman, qui étudie à la même université. Le groupe est formé en 1997. Un ami de Chris Martin, Phil Harvey, est engagé comme manager. Le 8 janvier 1998, ils recrutent un quatrième membre, Will Champion qui devient le batteur alors qu’il n'a jamais touché une batterie de sa vie. A peine engagé, Will Champion organise le premier concert du groupe au Laurel Tree de Londres. Pour ce concert donné le 16 janvier 1998, ils se baptisent provisoirement Starfish10. Le nom Coldplay est proposé par Tim Crompton11, un ami commun d'université qui a d'abord imaginé ce nom pour son propre groupe, avant de l'abandonner, le trouvant trop déprimant. Chris Martin et ses acolytes trouvent ce nom parfait et décident de le garder.",
        strBiographyHU: "A Coldplay egy angol alternatív rockegyüttes, amely 1998 januárjában alakult. Tagjai: Chris Martin énekes-gitáros-zongorista, Jonny Buckland gitáros, Guy Berryman basszusgitáros és Will Champion dobos. Több mint 30 millió lemezt adtak el és olyan ismert slágereik vannak, mint például a Yellow, a Scientist, a Speed of Sound, Grammy-díjas Clocks, vagy a az ötödik stúdióalbumukról a 'Paradise' . Az együttes egyébként jelenleg hét Grammy-díj birtokosa. Világhírnévre a Yellow című dalukkal tettek szert, melyet debütáló albumuk, a Parachutes (2000) követett. 2002-ben jelent meg második albumuk A Rush of Blood to the Head címmel, amelyet a Rolling Stone magazin beválasztott minden idők 500 legjobb albuma közé. A következő stúdióalbumuk, az X&Y (2005) talán kevésbé lelkes, de még mindig pozitív fogadtatásban részesült. Negyedik stúdióalbumuk, a Viva la Vida or Death and All His Friends (2008), melynek társproducere Brian Eno volt, ismét pozitív fogadtatásra talált, az ötödik stúdióalbumukat, a 'Mylo Xyloto'-t (2011), pedig egy kisebb stílus váltás jellemez.",
        strBiographyIL: '',
        strBiographyIT: " Coldplay sono un gruppo alternative rock britannico formatosi a Londra nel 1997. La band è composta da Chris Martin (voce, tastiere, chitarra), Jonny Buckland (chitarra), Guy Berryman (basso) e Will Champion (batteria). I Coldplay raggiunsero la fama mondiale con il loro singolo Yellow, contenuto nel loro album di debutto Parachutes (2000). Il brano diventò presto una hit e nel luglio 2000 arrivò a piazzarsi alla quarta posizione della classifica dei singoli britannica. Il loro secondo album A Rush of Blood to the Head (2002) segna la loro consacrazione e consente alla band di acquisire notorietà in tutto il mondo. L'album si piazzò direttamente al 1º posto della UK Albums Chart e al 5º posto della Billboard 200. La loro successiva pubblicazione, X&Y (2005) ricevette una fredda accoglienza da parte della critica, ma riuscì comunque a tenere i ritmi di vendita dei precedenti album. Con il loro quarto album in studio Viva la Vida or Death and All His Friends, trainato dalla hit Viva la vida e prodotto da Brian Eno, la band ottenne numerose recensioni favorevoli, oltre alla vittoria di tre Grammy. I Coldplay con il loro quarto album in studio hanno raggiunto il traguardo dei 50 milioni totali di dischi venduti. Lo stile dei Coldplay del periodo Parachutes è comparabile con quello dei Radiohead, degli U2, dei Travis e a quello di Jeff Buckley.[9] Per A Rush of Blood to the Head, i Coldplay si rifanno a stili più similari a The Beatles, Echo & the Bunnymen, Kate Bush e George Harrison; per X&Y vengono influenzati da Johnny Cash e Kraftwerk, mentre si basano sullo stile dei Blur, degli Arcade Fire e dei My Bloody Valentine per Viva la Vida or Death and all his Friends. La band ha anche molto a cuore le questioni politiche e sociali del mondo, sono impegnati attivamente nella causa portata avanti da Oxfam ed hanno sostenuto altre importanti cause suonando in concerti come il Live 8 e partecipando al Band Aid.",
        strBiographyJP: "大衆性を強く持つ楽曲が多く、現在の音楽シーンにおいて最も大きな商業的成功を得ているバンドの一つである。 1997年にロンドンで結成される。メンバーは、クリス・マーティン（ボーカル・ギター・ピアノ）、ジョニー・バックランド（ギター）、ガイ・ベリーマン（ベース）、ウィル・チャンピオン（ドラム）から構成される。メンバー4人とも教師の息子たちである。 2000年、デビュー・アルバム『パラシューツ』とシングル「Yellow」の大ヒットにより世界的な成功を得た。現在までに総計6600万枚以上のアルバムを売り上げ、2000年代における最も成功したバンドのひとつである。『パラシューツ』は全世界で約950万枚、2ndアルバム『静寂の世界』は約1400万枚、3rdアルバムとなる『X&Y』は約1000万枚のセールスを記録した。ブライアン・イーノをプロデューサーに迎えた4枚目となるスタジオ・アルバム、『美しき生命』は2008年6月にリリースされ、約3,300万枚の大ヒットを記録した。「イエロー」、「スピード・オブ・サウンド」や2003年にグラミー賞「最優秀レコード賞」を受賞した「クロックス」、さらに最新シングル「美しき生命」といった数多くのヒット曲があることで知られる。 コールドプレイはさまざまなアーティストの影響を受けている。ギターとファルセットボーカル中心の曲が多いレディオヘッドやトラヴィスをはじめ、U2からも強い影響を受けているとされる。『パラシューツ』以降は他方面からの影響を得たとされ、『静寂の世界』ではエコー&ザ・バニーメンやジョージ・ハリスン、『X&Y』ではジョニー・キャッシュからの影響やクラフトワーク的作風にも挑戦している。 コールドプレイはフェアトレードやアムネスティ・インターナショナルなどの社会的・政治的運動を活発に支持している。さらにバンド・エイドやLIVE 8などの慈善コンサートにおいても公演を行っている。",
        strBiographyNL: "Coldplay is een Britse alternatieverockband, die in 1996 in Londen werd gevormd. De leden zijn zanger Chris Martin, gitarist Jonny Buckland, drummer Will Champion en bassist Guy Berryman. In het begin werd Coldplay vergeleken met andere artiesten en bands, waaronder Radiohead, U2 en Travis. De band brak met de single Yellow door, gevolgd door hun debuutalbum Parachutes (2000). A Rush of Blood to the Head (2002), het tweede album, betekende hun definitieve doorbraak. Het album won ook meerdere prijzen. In 2005 kwam het album X&Y, dat in zestien landen op nummer één kwam. Het vierde album, Viva la Vida or Death and All His Friends, werd samen met Brian Eno geproduceerd en ontving meerdere Grammy's. Hun vijfde album Mylo Xyloto is tevens weer geproduceerd door Eno. Grote hits van Coldplay zijn onder meer Speed of Sound, Clocks, Yellow, Viva La Vida, Talk, Fix You en Paradise.",
        strBiographyNO: "Coldplay er et britisk band som spiller alternativ rock, dannet i London, England i 1998. Gruppen består av vokalist/pianist/gitarist Chris Martin, sologitarist Jonny Buckland, bassist Guy Berryman og trommeslager/multiinstrumentalist Will Champion. Coldplay har solgt over 40 millioner plater på verdensbasis, og er kjent for hitlåter som «Yellow», «The Scientist», «Clocks», «Speed Of Sound», «Fix You» og «Viva La Vida». Coldplays gjennombrudd kom med singelen «Yellow» fra debutalbumet Parachutes i år 2000, og albumet ble nominert til Mercury Prize. Oppfølgeren, A Rush Of Blood To The Head, kom i 2002 og ble en stor suksess. Albumet vant diverse priser, blant annet NME sin pris for årets album. Bandets neste utgivelse, X&Y ble utgitt tre år senere, til omtrent samme respons som forløperen. Coldplays fjerde album, Viva la Vida or Death and All His Friends, fra 2008 ble produsert av Brian Eno og fikk særdeles god kritikk, og ble nominert til flere Grammy-priser. Bandets femte album, Mylo Xyloto, ble sluppet ut 24. oktober 2011. Alle Coldplays album har nytt kommersiell suksess.",
        strBiographyPL: "Coldplay – brytyjska grupa muzyczna, grająca rock alternatywny. Członkowie zespołu są zaangażowani także w działalność społeczno-polityczną. Coldplay ma na koncie ponad 50 milionów sprzedanych płyt oraz liczne nagrody branży muzycznej.",
        strBiographyPT: "Coldplay é uma banda de rock alternativo britânica formada em 1996 pelo vocalista Chris Martin eo guitarrista Jonny Buckland no University College London. Depois de formado Pectoralz, Guy Berryman se juntou ao grupo como baixista e eles mudaram o nome para Starfish. Will Champion entrou como baterista, backing vocal e multi-instrumentista, completando o line-up. Gerente de Phil Harvey é muitas vezes considerado um quinto membro não oficial. A própria banda 'Coldplay' rebatizado em 1998, antes de gravar e lançar três EPs; Segurança em 1998, Brothers & Sisters como um single em 1999 e The Blue Room, no mesmo ano. O último foi o primeiro lançamento em uma grande gravadora, depois de assinar com a Parlophone. Eles alcançaram a fama mundial com o lançamento do single 'Yellow', em 2000, seguido por seu álbum de estréia lançado no mesmo ano, Parachutes, que foi indicado para o Mercury Prize. O segundo álbum da banda, A Rush of Blood ao Chefe (2002), foi lançado para aclamação da crítica e ganhou vários prêmios, incluindo Álbum do Ano da NME, e tem sido amplamente considerado o melhor dos álbuns do Coldplay Nelson produzidos. Seu próximo lançamento, X & Y, o álbum mais vendido em todo o mundo em 2005, foi recebido com críticas positivas sobre o seu lançamento, embora alguns críticos sentiram que era inferior ao seu antecessor. O quarto álbum de estúdio da banda, Viva la Vida ou Morte e Todos os Seus Amigos (2008), foi produzido por Brian Eno e lançado novamente para comentários amplamente favoráveis, ganhando várias indicações ao Grammy e vitórias no Grammy Awards 51. Em 24 de outubro de 2011, eles lançaram seu quinto álbum de estúdio, Mylo Xyloto, que foi recebido com misto de comentários positivos, e foi best-seller álbum de rock do Reino Unido de 2011. A banda já ganhou vários prêmios ao longo da sua carreira, incluindo sete Brit Awards ganhando Melhor Grupo Britânico três vezes, quatro MTV Video Music Awards, e sete Prêmios Grammy de vinte indicações. Como um dos artistas da música mais vendidos do mundo, o Coldplay já venderam mais de 55 milhões de discos em todo o mundo. Em dezembro de 2009, do Rolling leitores Pedra votado o grupo a quarta melhor artista da década de 2000. Coldplay tem sido um apoiante activo de várias causas sociais e políticas, como a campanha Make Trade Fair da Oxfam e Anistia Internacional. O grupo também participou de vários projetos de caridade como o Band Aid 20, Live 8, Sound Relief, Hope for Haiti Now: A Benefit Global para Earthquake Relief, Bola do Secret Policeman, eo Teenage Cancer Trust.",
        strBiographyRU: "«Coldplay» (произносится как Колдплэ̀й) — британская рок-группа. Начав играть осенью 1996 года, и выпустив свою первую демо-запись Safety в 1998 группа пошла по дороге славы, но настоящего успеха в мире Coldplay добились только в 2000 году, после выхода их второго сингла «Yellow» из альбома Parachutes, ворвавшегося на вершины всех чартов Великобритании и Соединённых Штатов Америки. Альбомы Coldplay разошлись тиражом более 80 миллионов экземпляров. Группа принимала участие в различных социальных проектах, таких как Band Aid 20, Live 8, кампании в поддержку детей, больных раком. Также Coldplay выступили на закрытии паралимпийских игр 2012 в Лондоне. Участники Coldplay являются активными сторонниками различных социальных и политических кампаний, в частности Оксфэм — Make Trade Fair и Международной Амнистии. В декабре 2012 года портал Last.fm назвал Coldplay лучшим исполнителем за 10 лет скробблинга. Coldplay получали премию Грэмми за все альбомы, кроме A Rush of Blood to the Head. Песни «In My Place» (в 2003 году), «Speed of Sound» (в 2006), «Talk» (в 2007), «Viva la Vida» (в 2009), «Life in Technicolor II» (2009), «Paradise» (в 2012), «Every Teardrop Is a Waterfall» (в 2012) и «Charlie Brown» (в 2013) Coldplay также получили или были номинированы на премии Грэмми.",
        strBiographySE: "Coldplay, är ett brittiskt rockband som bildades 1996 i University College London. Bandmedlemmarna Chris Martin (gitarr, vokalist, piano/keyboards), Guy Berryman (bas), Jonny Buckland (gitarr, kör) och Will Champion (trummor, kör) träffade varandra som studenter på University College London. Bandet har sålt över 60 miljoner skivor över hela världen, varav ”A Rush of Blood to the Head” som deras mest sålda skiva, med över 16 miljoner sålda skivor och fick 9 plantinum i hemlandet Storbritannien. Bandet släppte tre EP:s innan debutalbumet Parachutes kom ut. Dessa heter The Safety EP, Brothers and sisters och The Blue Room. Med låten Yellow fick de sitt genombrott och har på senare tid (framförallt med albumet X&Y som är mer arenarock än de tidigare) blivit jämförda med bland andra U2 och Radiohead. Själva säger sig Coldplay ha inspirerats musikaliskt till stor del av grupper såsom U2 och norska a-ha. Coldplay hette till en början Starfish. Några kompisar till Guy, Jon, Chris och Will hade ett band som hette Coldplay, så när de bytte namn så överläts namnet till dåvarande Starfish som alltså blev Coldplay. De fick namnet av sina kompisar eftersom de tyckte att de lät ”alltför deprimerande”. ",
        strCountry: "London, England",
        strCountryCode: "GB",
        strDisbanded: null,
        strFacebook: "www.facebook.com/coldplay",
        strGender: "Male",
        strGenre: "Alternative Rock",
        strLabel: "Parlophone",
        strLastFMChart: "http://www.last.fm/music/Coldplay/+charts?rangetype=6month",
        strLocked: "unlocked",
        strMood: "Happy",
        strMusicBrainzID: "cc197bad-dc9c-440d-a5b5-d52ba2e14234",
        strStyle: "Rock/Pop",
        strTwitter: "www.twitter.com/coldplay",
        strWebsite: "www.coldplay.com",
    }, {
        idArtist: 113724,
        idLabel: null,
        intBornYear: 1979,
        intDiedYear: null,
        intFormedYear: 2002,
        intMembers: 1,
        strArtist: "The Game",
        strArtistAlternate: "Game",
        strArtistBanner: "http://www.theaudiodb.com/images/media/artist/banner/tqqtxy1362751624.jpg",
        strArtistClearart: null,
        strArtistFanart: "http://media.theaudiodb.com/images/media/artist/fanart/tvuwst1362751534.jpg",
        strArtistFanart2: "http://media.theaudiodb.com/images/media/artist/fanart/rxwusv1362751504.jpg",
        strArtistFanart3: "http://media.theaudiodb.com/images/media/artist/fanart/rtwyxu1362751511.jpg",
        strArtistLogo: "http://www.theaudiodb.com/images/media/artist/logo/vrwtus1359222564.png",
        strArtistStripped: null,
        strArtistThumb: "http://www.theaudiodb.com/images/media/artist/thumb/rvyrwq1420582393.jpg",
        strArtistWideThumb: null,
        strBiographyCN: null,
        strBiographyDE: null,
        strBiographyEN: "Jayceon Terrell Taylor (born November 29, 1979 in Compton, California, United States), better known by his stage name Game, formerly known as The Game, is an American Grammy Award winning gangsta rapper signed to Aftermath Entertainment through his own label Black Wall Street Records, with which he founded with his half brother Big Fase 100. He rose to fame in 2005 with the success of his debut album, The Documentary, and his two Grammy nominations. Since then he has released several other critically acclaimed albums, 2006’s Doctor’s Advocate and 2008’s LAX, which he claimed to be the final album he would release, but in mid-2009 he started recording The RED Album, which was released August 23, 2011. In the near future he also plans to focus on acting and other business ventures. All of his four albums debuted at #1 on the Billboard Top 100, and he is widely considered to be a driving force in bringing back the West Coast hip hop scene and competing with many of his East Coast counterparts. Studying various influential rap albums, Game developed a strategy to become a rapper himself and with help from Big Fase, they founded The Black Wall Street Records. The label originally featured such artists as Glasses Malone, Vita, and Nu Jerzey Devil, along with Game himself. His stage name was coined by his grandmother.",
        strBiographyES: null,
        strBiographyFR: null,
        strBiographyHU: null,
        strBiographyIL: null,
        strBiographyIT: null,
        strBiographyJP: null,
        strBiographyNL: null,
        strBiographyNO: null,
        strBiographyPL: null,
        strBiographyPT: null,
        strBiographyRU: null,
        strBiographySE: null,
        strCountry: "Compton, California, USA",
        strCountryCode: "US",
        strDisbanded: null,
        strFacebook: "www.facebook.com/thegame",
        strGender: "Male",
        strGenre: "Hip-Hop",
        strLabel: null,
        strLastFMChart: null,
        strLocked: "unlocked",
        strMood: "Confrontational",
        strMusicBrainzID: "07cc14fb-4784-4a25-804b-2686ed5ef52c",
        strStyle: "Urban/R&B",
        strTwitter: "twitter.com/thegame",
        strWebsite: "www.comptongame.com",
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Daniel\Desktop\WORKING ON\0. Angular\Project\spotify\spotifyclone\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map