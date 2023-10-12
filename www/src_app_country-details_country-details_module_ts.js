"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_country-details_country-details_module_ts"],{

/***/ 7518:
/*!*******************************************************************!*\
  !*** ./src/app/country-details/country-details-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryDetailsPageRoutingModule": () => (/* binding */ CountryDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _country_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-details.page */ 9499);




const routes = [
    {
        path: '',
        component: _country_details_page__WEBPACK_IMPORTED_MODULE_0__.CountryDetailsPage
    }
];
let CountryDetailsPageRoutingModule = class CountryDetailsPageRoutingModule {
};
CountryDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CountryDetailsPageRoutingModule);



/***/ }),

/***/ 4266:
/*!***********************************************************!*\
  !*** ./src/app/country-details/country-details.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryDetailsPageModule": () => (/* binding */ CountryDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _country_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-details-routing.module */ 7518);
/* harmony import */ var _country_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country-details.page */ 9499);







let CountryDetailsPageModule = class CountryDetailsPageModule {
};
CountryDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _country_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.CountryDetailsPageRoutingModule
        ],
        declarations: [_country_details_page__WEBPACK_IMPORTED_MODULE_1__.CountryDetailsPage]
    })
], CountryDetailsPageModule);



/***/ }),

/***/ 9499:
/*!*********************************************************!*\
  !*** ./src/app/country-details/country-details.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryDetailsPage": () => (/* binding */ CountryDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _country_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./country-details.page.html?ngResource */ 8205);
/* harmony import */ var _country_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./country-details.page.scss?ngResource */ 2109);
/* harmony import */ var _services_countries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/countries.service */ 9809);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6587);







let CountryDetailsPage = class CountryDetailsPage {
    constructor(route, countryProvider) {
        this.route = route;
        this.countryProvider = countryProvider;
        this.country = this.route.snapshot.params['country'];
    }
    ngOnInit() {
        this.getCountryDetails();
    }
    toggleTheme(event) {
        console.log(event);
        if (event.detail.checked) {
            document.body.setAttribute('color-theme', 'dark');
        }
        else {
            document.body.setAttribute('color-theme', 'light');
        }
    }
    getCountryDetails() {
        this.countryProvider.getCountriesByDetails(this.country).subscribe(data => {
            console.log(data);
            this.countryDetails = data[0];
            this.languages = Object.values(data[0].languages);
        }, err => {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(err);
        });
    }
};
CountryDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _services_countries_service__WEBPACK_IMPORTED_MODULE_2__.CountriesService }
];
CountryDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-country-details',
        template: _country_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_country_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CountryDetailsPage);



/***/ }),

/***/ 2109:
/*!**********************************************************************!*\
  !*** ./src/app/country-details/country-details.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&display=swap\");\n* {\n  font-family: \"Nunito Sans\", sans-serif;\n}\nimg {\n  width: 90%;\n}\n.container {\n  margin-top: 30px;\n}\n.container h1 {\n  font-size: 40px;\n}\n.container ion-label {\n  font-family: \"Nunito Sans\", sans-serif;\n  font-weight: bold;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50cnktZGV0YWlscy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcV2luZG93cyUyMDEwXFxEZXNrdG9wXFxGbGV4aS1BcF9UZXN0X1JlcG9cXGZsZXhpLXRlc3RcXHNyY1xcYXBwXFxjb3VudHJ5LWRldGFpbHNcXGNvdW50cnktZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUZBQUE7QUFJUjtFQUNJLHNDQUFBO0FDRko7QURNRTtFQUNJLFVBQUE7QUNITjtBRE1FO0VBQ0UsZ0JBQUE7QUNISjtBRElJO0VBQ0ksZUFBQTtBQ0ZSO0FES0k7RUFDSSxzQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0hSIiwiZmlsZSI6ImNvdW50cnktZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2Fuczp3Z2h0QDIwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcblxyXG5cclxuKiB7XHJcbiAgICBmb250LWZhbWlseTonTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcblxyXG4gIGltZyB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6MzBweDtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6NDBweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OidOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICBmb250LXNpemU6MjVweDtcclxuICAgIFxyXG4gICAgfVxyXG4gIH0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnM6d2dodEAyMDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbmltZyB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmNvbnRhaW5lciBoMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi5jb250YWluZXIgaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn0iXX0= */";

/***/ }),

/***/ 8205:
/*!**********************************************************************!*\
  !*** ./src/app/country-details/country-details.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Where in the world ?\n    </ion-title>\n    <ion-item slot=\"end\" lines=\"none\" style=\"background-color:none\">\n      <ion-icon name=\"moon-outline\"></ion-icon>\n      <ion-toggle  name=\"blueberry\"  (ionChange)=\"toggleTheme($event)\"></ion-toggle>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content content=\"fullscreen\" *ngIf=\"countryDetails\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <img [src]=\"countryDetails.flags.png\" load=\"lazy\"  width=\"600\" height=\"600\"/>\n      </ion-col>\n      <ion-col>\n          <div class=\"container\" ion-padding style=\"padding-top:60px\">\n              <h1><b>{{countryDetails.name.common}}</b></h1>\n              <ion-item lines=\"none\">\n                  <ion-label>\n                    Population:&nbsp;\n                    <ion-text>{{countryDetails.population | currency:'':''}}</ion-text>\n                  </ion-label>\n              </ion-item>\n              <ion-item lines=\"none\">\n                <ion-label>\n                  Region:&nbsp;\n                  <ion-text>{{countryDetails.region}}</ion-text>\n                </ion-label>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-label>\n                Sub Region:&nbsp;\n                <ion-text>{{countryDetails.name.common}}</ion-text>\n              </ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label>\n              Capital:&nbsp;\n              <ion-text>{{countryDetails.capital}}</ion-text>\n            </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label>\n            Top Level Domain:&nbsp;\n            <ion-text>{{countryDetails.tld}}</ion-text>\n          </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>\n          Languages:&nbsp;\n          <ion-text *ngFor=\"let l of languages\">{{l}}</ion-text>\n        </ion-label>\n      </ion-item>\n          </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_country-details_country-details_module_ts.js.map