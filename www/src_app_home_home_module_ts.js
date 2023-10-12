"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var _services_countries_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/countries.service */ 9809);






let HomePage = class HomePage {
    constructor(countryProvider) {
        this.countryProvider = countryProvider;
        this.imageLoaded = false;
    }
    ionViewWillEnter() {
        this.getAllCountries();
        setTimeout(() => {
            this.imageLoaded = true;
        }, 2000);
    }
    getAllCountries() {
        this.countryProvider.getAllCountries().subscribe(data => {
            this.countries = data;
            this.countryService = [...this.countries];
        }, err => {
            console.log('Error');
        });
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
    filterRegion(event) {
        if (event.detail.value === 'all') {
            this.getAllCountries();
        }
        else {
            this.countryProvider.getCountriesByRegion(event.detail.value).subscribe(data => {
                this.countries = data;
            }, err => {
                (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(err);
            });
        }
    }
    filterCountries(event) {
        const val = event.target.value.toLowerCase();
        if (!val) {
            this.countries = this.countryService;
        }
        const temp = this.countryService.filter((row) => {
            return Object.keys(row).some((property) => {
                return row[property] === null ? null : row[property].toString().toLowerCase().indexOf(val) !== -1;
            });
        });
        this.countries = temp;
    }
};
HomePage.ctorParameters = () => [
    { type: _services_countries_service__WEBPACK_IMPORTED_MODULE_2__.CountriesService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&display=swap\");\n* {\n  font-family: \"Nunito Sans\", sans-serif;\n}\n.form {\n  margin-top: 30px;\n}\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\n.img-wrapper {\n  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);\n  --border-radius:20px;\n}\n.img-wrapper ion-card-subtitle {\n  font-family: \"\" Nunito Sans \", sans-serif\";\n  font-weight: bold;\n}\n.img-wrapper img {\n  max-width: 100%;\n  width: 200%;\n  border: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFdpbmRvd3MlMjAxMFxcRGVza3RvcFxcRmxleGktQXBfVGVzdF9SZXBvXFxmbGV4aS10ZXN0XFxzcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUZBQUE7QUFFUjtFQUNFLHNDQUFBO0FDQUY7QURHQTtFQUNJLGdCQUFBO0FDQUo7QURHQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0RGO0FESUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNERjtBRElBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNIRjtBRE1BO0VBQ0UscUJBQUE7QUNIRjtBRE1BO0VBS0ksbU9BQ0E7RUFNQSxvQkFBQTtBQ2JKO0FERUk7RUFDSSwwQ0FBQTtFQUNBLGlCQUFBO0FDQVI7QURVSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ1JOIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnM6d2dodEAyMDAmZGlzcGxheT1zd2FwJyk7XG5cbioge1xuICBmb250LWZhbWlseTonTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4uZm9ybSB7XG4gICAgbWFyZ2luLXRvcDozMHB4O1xufVxuXG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmltZy13cmFwcGVyIHtcbiAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OicnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmJztcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICB9XG4gICAgYm94LXNoYWRvdzpcbiAgICAwIDIuOHB4IDIuMnB4IHJnYmEoMCwgMCwgMCwgMC4wMzQpLFxuICAgIDAgNi43cHggNS4zcHggcmdiYSgwLCAwLCAwLCAwLjA0OCksXG4gICAgMCAxMi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpLFxuICAgIDAgMjIuM3B4IDE3LjlweCByZ2JhKDAsIDAsIDAsIDAuMDcyKSxcbiAgICAwIDQxLjhweCAzMy40cHggcmdiYSgwLCAwLCAwLCAwLjA4NiksXG4gICAgMCAxMDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgLS1ib3JkZXItcmFkaXVzOjIwcHg7XG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIHdpZHRoOjIwMCU7XG4gICAgICBib3JkZXI6IDA7XG4gICAgfVxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2Fuczp3Z2h0QDIwMCZkaXNwbGF5PXN3YXBcIik7XG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmZvcm0ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmltZy13cmFwcGVyIHtcbiAgYm94LXNoYWRvdzogMCAyLjhweCAyLjJweCByZ2JhKDAsIDAsIDAsIDAuMDM0KSwgMCA2LjdweCA1LjNweCByZ2JhKDAsIDAsIDAsIDAuMDQ4KSwgMCAxMi41cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDIyLjNweCAxNy45cHggcmdiYSgwLCAwLCAwLCAwLjA3MiksIDAgNDEuOHB4IDMzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDg2KSwgMCAxMDBweCA4MHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIC0tYm9yZGVyLXJhZGl1czoyMHB4O1xufVxuLmltZy13cmFwcGVyIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiXCIgTnVuaXRvIFNhbnMgXCIsIHNhbnMtc2VyaWZcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaW1nLXdyYXBwZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMjAwJTtcbiAgYm9yZGVyOiAwO1xufSJdfQ== */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Where in the world ?\n    </ion-title>\n    <ion-item slot=\"end\" lines=\"none\" style=\"background-color:none\">\n      <ion-icon name=\"moon-outline\"></ion-icon>\n      <ion-toggle  name=\"blueberry\"  (ionChange)=\"toggleTheme($event)\"></ion-toggle>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <div>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n                <!-- Searchbar with cancel button always shown -->\n              <ion-searchbar showCancelButton=\"always\" animated (ionInput)=\"filterCountries($event)\" style=\"box-shadow:none\"></ion-searchbar>\n          </ion-col>\n          <ion-col>\n            <ion-item lines=\"none\">\n              <ion-label>Countries</ion-label>\n              <ion-select (ionChange)=\"filterRegion($event)\">\n                <ion-select-option value=\"all\">All</ion-select-option>\n                <ion-select-option value=\"Africa\">Africa</ion-select-option>\n                <ion-select-option value=\"America\">America</ion-select-option>\n                <ion-select-option value=\"Asia\">Asia</ion-select-option>\n                <ion-select-option value=\"Europe\">Europe</ion-select-option>\n                <ion-select-option value=\"Ocenia\">Ocenia</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div *ngIf=\"imageLoaded\">\n        <ion-grid>\n          <ion-row>\n            <ion-col sizeLg=\"3\" sizeMd=\"4\" sizeXs=\"6\"  *ngFor=\"let c of countries\">\n                 <ion-card class=\"img-wrapper\"  [routerLink]=\"['/country-details',c.name.common]\">\n                    <img [src]=\"c.flags.png\"  width=\"300\" height=\"300\" load=\"lazy\"/>\n                    <ion-card-header>\n                      <h1>{{c.name.common}}</h1>\n                      <ion-card-title>Population:  {{c.population | currency:'2'}}</ion-card-title>\n                      <ion-card-title>Region:  {{c.region}}</ion-card-title>\n                      <ion-card-title>Capital:  {{c.capital}}</ion-card-title>\n                    </ion-card-header>\n                </ion-card>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    </div>\n    <div *ngIf=\"!imageLoaded\">\n      <ion-grid>\n        <ion-row>\n          <ion-col sizeLg=\"4\" sizeMd=\"4\" sizeXs=\"6\"  *ngFor=\"let c of countries\">\n               <ion-card class=\"img-wrapper\">\n                  <img src=\"https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png\"/>\n                  <ion-card-header>\n                    <ion-card-subtitle><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></ion-card-subtitle>\n                    <ion-card-title><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></ion-card-title>\n                    <ion-card-title><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></ion-card-title>\n                    <ion-card-title><ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text></ion-card-title>\n                  </ion-card-header>\n              </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map