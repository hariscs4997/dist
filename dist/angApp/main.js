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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-resource/add-resource.component.css":
/*!*********************************************************!*\
  !*** ./src/app/add-resource/add-resource.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1yZXNvdXJjZS9hZGQtcmVzb3VyY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/add-resource/add-resource.component.html":
/*!**********************************************************!*\
  !*** ./src/app/add-resource/add-resource.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-7 ml-5 mt-5 mb-5 form-container\">\n  <form [formGroup]=\"addResource\" class=\"form\" (submit)='addResourceHandler()'>\n    <div class=\"form-group\">\n      <label>Link</label>\n      <input type=\"link\" class=\"form-control\" formControlName='link' placeholder=\"Enter Resource Link\">\n      <label class=\"error\" *ngIf=\"subbmitted && f.link.errors\">Enter Valid Link</label>\n    </div>\n    <div class=\"form-group\">\n      <label>Subject</label>\n      <select class=\"form-control\" (change)='getLevel($event)' formControlName='subject'>\n        <option value=\"\" disabled>Select Subject</option>\n        <option [value]=\"sub.id\" *ngFor='let sub of subjects'>{{sub.title}}</option>\n      </select>\n      <label class=\"error\" *ngIf=\"subbmitted && f.subject.errors\">Subject is required</label>\n    </div>\n    <div class=\"form-group\">\n      <label>Level</label>\n      <select class=\"form-control\" (change)='getTopic($event)' formControlName='level'>\n          <option value=\"\" disabled>Select Level</option>\n          <option [value]=\"sub.id\" *ngFor='let sub of subCat'>{{sub.title}}</option>\n        </select>\n      <label class=\"error\" *ngIf=\"subbmitted && f.level.errors\">Level is required</label>\n    </div>\n    <div class=\"form-group\">\n      <label>Topic</label>\n      <select class=\"form-control\" formControlName='topic'>\n          <option value=\"\" disabled>Select Topic</option>\n          <option [value]=\"sub.id\" *ngFor='let sub of topic'>{{sub.title}}</option>\n        </select>\n      <label class=\"error\" *ngIf=\"subbmitted && f.topic.errors\">Topic is required</label>\n    </div>\n    <div class=\"form-group\">\n      <label>Resource type</label>\n      <select class=\"form-control\" formControlName='resource_type'>\n          <option value=\"\" disabled>Select Resource Type</option>\n          <option value=\"notes\">Notes</option>\n          <option value=\"exercise\">Exercise</option>\n        </select>\n      <label class=\"error\" *ngIf=\"subbmitted && f.resource_type.errors\">Resource type is required</label>\n    </div>\n    <div class=\"form-group\">\n        <label>Description</label>\n        <textarea class=\"form-control\" formControlName='description' placeholder=\"Enter Description\" rows=\"5\"></textarea>\n        <label class=\"error\" *ngIf=\"subbmitted && f.description.errors\">Description is required</label>\n      </div>\n    <button type=\"submit\" class=\"btn btn-success btn-block\">Submit</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/add-resource/add-resource.component.ts":
/*!********************************************************!*\
  !*** ./src/app/add-resource/add-resource.component.ts ***!
  \********************************************************/
/*! exports provided: AddResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddResourceComponent", function() { return AddResourceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




var AddResourceComponent = /** @class */ (function () {
    function AddResourceComponent(fb, api) {
        var _this = this;
        this.fb = fb;
        this.api = api;
        this.subbmitted = false;
        this.getSubjects = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getData('get_subjects/')];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            console.log(res);
                            if (res.length > 0) {
                                _this.subjects = res;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); };
    }
    AddResourceComponent.prototype.ngOnInit = function () {
        this.getSubjects();
        var reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
        this.addResource = this.fb.group({
            link: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(reg)]],
            subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            level: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            topic: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            resource_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    AddResourceComponent.prototype.getLevel = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.sub_id = e.target.value;
                        return [4 /*yield*/, this.api.getData('get_level_by_subject/?sub_id=' + this.sub_id)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            console.log(res);
                            _this.subCat = res;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddResourceComponent.prototype.getTopic = function (e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.lvl_id = e.target.value;
                        return [4 /*yield*/, this.api.getData("get_topic_by_sub_level/?sub_id=" + this.sub_id + "&lev_id=" + this.lvl_id)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            console.log(res);
                            _this.topic = res;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddResourceComponent.prototype.addResourceHandler = function () {
        var _this = this;
        if (this.addResource.invalid) {
            this.subbmitted = true;
        }
        else {
            var topic = {
                link: this.addResource.controls['link'].value,
                subject: this.addResource.controls['subject'].value,
                level: this.addResource.controls['level'].value,
                topic: this.addResource.controls['topic'].value,
                resource_type: this.addResource.controls['resource_type'].value,
                description: this.addResource.controls['description'].value,
            };
            var data = this.api.postData('get_create_resource/', topic);
            data.subscribe(function (res) {
                console.log(res);
                _this.addResource.reset();
            });
        }
    };
    Object.defineProperty(AddResourceComponent.prototype, "f", {
        get: function () { return this.addResource.controls; },
        enumerable: true,
        configurable: true
    });
    AddResourceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-resource',
            template: __webpack_require__(/*! ./add-resource.component.html */ "./src/app/add-resource/add-resource.component.html"),
            styles: [__webpack_require__(/*! ./add-resource.component.css */ "./src/app/add-resource/add-resource.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], AddResourceComponent);
    return AddResourceComponent;
}());



/***/ }),

/***/ "./src/app/addtopic/addtopic.component.css":
/*!*************************************************!*\
  !*** ./src/app/addtopic/addtopic.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHRvcGljL2FkZHRvcGljLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/addtopic/addtopic.component.html":
/*!**************************************************!*\
  !*** ./src/app/addtopic/addtopic.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex\">\n  \n  \n  <nav class=\"navbar navbar-expand-lg navbar-light col-md-10\" style=\"background-color:#fff\">\n    <a class=\"navbar-brand pr-2\" routerLink=\"/pending\" >Pending</a>\n    <a class=\"navbar-brand pr-2\" routerLink=\"/addtopic\" >Add Topic</a>     \n  </nav>\n</div>\n\n<div class=\"col-md-7 ml-5 mt-5 mb-5 form-container\">\n  <form [formGroup]=\"addTopic\" class=\"form\" (submit)='addTopicHandler()'>\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Title</label>\n      <input type=\"text\" class=\"form-control\" formControlName='title' placeholder=\"Enter Resource Link Here\">\n      <label class=\"error\" *ngIf=\"subbmitted && f.title.errors\">Title is required</label>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Subject</label>\n      <input type=\"number\" class=\"form-control\" formControlName='subject'  placeholder=\"Subject\">\n      <label class=\"error\" *ngIf=\"subbmitted && f.subject.errors\">Subject is required</label>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Level</label>\n      <input type=\"number\" class=\"form-control\" formControlName='level'  placeholder=\"Topic Level\">\n      <label class=\"error\" *ngIf=\"subbmitted && f.level.errors\">Level is required</label>\n    </div>   \n    <button type=\"submit\" class=\"btn btn-success btn-block\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/addtopic/addtopic.component.ts":
/*!************************************************!*\
  !*** ./src/app/addtopic/addtopic.component.ts ***!
  \************************************************/
/*! exports provided: AddtopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtopicComponent", function() { return AddtopicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




var AddtopicComponent = /** @class */ (function () {
    function AddtopicComponent(fb, api) {
        this.fb = fb;
        this.api = api;
        this.subbmitted = false;
    }
    AddtopicComponent.prototype.ngOnInit = function () {
        this.addTopic = this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            level: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    };
    AddtopicComponent.prototype.addTopicHandler = function () {
        var _this = this;
        if (this.addTopic.invalid) {
            this.subbmitted = true;
        }
        else {
            var topic = {
                title: this.addTopic.controls['title'].value,
                subject: this.addTopic.controls['subject'].value,
                level: this.addTopic.controls['level'].value
            };
            var data = this.api.postData('/create_topic/', topic);
            data.subscribe(function (res) {
                console.log(res);
                _this.addTopic.reset();
            });
        }
    };
    Object.defineProperty(AddtopicComponent.prototype, "f", {
        get: function () { return this.addTopic.controls; },
        enumerable: true,
        configurable: true
    });
    AddtopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addtopic',
            template: __webpack_require__(/*! ./addtopic.component.html */ "./src/app/addtopic/addtopic.component.html"),
            styles: [__webpack_require__(/*! ./addtopic.component.css */ "./src/app/addtopic/addtopic.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], AddtopicComponent);
    return AddtopicComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main\n{\n    display: none   ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5cbntcbiAgICBkaXNwbGF5OiBub25lICAgO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex\">\n  \n  \n  <nav class=\"navbar navbar-expand-lg navbar-light col-md-10\" style=\"background-color:#fff\">\n    <a class=\"navbar-brand pr-2\" routerLink=\"/pending\" >Pending</a>\n    <a class=\"navbar-brand pr-2\" routerLink=\"/addtopic\" >Add Topic</a>     \n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.baseurl = "https://immense-caverns-13289.herokuapp.com/";
        this.httpHeaders = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('Token') }) };
    }
    ApiService.prototype.getallsubjects = function () {
        return this.http.get(this.baseurl + '/admin/boardapp/subjectmodel/', this.httpHeaders);
    };
    ApiService.prototype.getData = function (url) {
        return this.http.get(this.baseurl + url, this.httpHeaders);
    };
    ApiService.prototype.postData = function (url, data) {
        return this.http.post(this.baseurl + url, data, this.httpHeaders);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _resource_resource_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource/resource.component */ "./src/app/resource/resource.component.ts");
/* harmony import */ var _subcat_subcat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subcat/subcat.component */ "./src/app/subcat/subcat.component.ts");
/* harmony import */ var _gridresource_gridresource_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gridresource/gridresource.component */ "./src/app/gridresource/gridresource.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _addtopic_addtopic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addtopic/addtopic.component */ "./src/app/addtopic/addtopic.component.ts");
/* harmony import */ var _pending_pending_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pending/pending.component */ "./src/app/pending/pending.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _topics_topics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./topics/topics.component */ "./src/app/topics/topics.component.ts");
/* harmony import */ var _sub_topic_sub_topic_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sub-topic/sub-topic.component */ "./src/app/sub-topic/sub-topic.component.ts");
/* harmony import */ var _add_resource_add_resource_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-resource/add-resource.component */ "./src/app/add-resource/add-resource.component.ts");
/* harmony import */ var _top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./top-rated/top-rated.component */ "./src/app/top-rated/top-rated.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _teachers_list_teachers_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./teachers-list/teachers-list.component */ "./src/app/teachers-list/teachers-list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");



















var routes = [
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { path: "categories", component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"] },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: "resource", component: _resource_resource_component__WEBPACK_IMPORTED_MODULE_5__["ResourceComponent"] },
    { path: "subcat/:id", component: _subcat_subcat_component__WEBPACK_IMPORTED_MODULE_6__["SubcatComponent"] },
    { path: "gridresource", component: _gridresource_gridresource_component__WEBPACK_IMPORTED_MODULE_7__["GridresourceComponent"] },
    { path: "admin", component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"] },
    { path: "pending", component: _pending_pending_component__WEBPACK_IMPORTED_MODULE_10__["PendingComponent"] },
    { path: "addtopic", component: _addtopic_addtopic_component__WEBPACK_IMPORTED_MODULE_9__["AddtopicComponent"] },
    { path: "search", component: _search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"] },
    { path: "topics", component: _topics_topics_component__WEBPACK_IMPORTED_MODULE_12__["TopicsComponent"] },
    { path: "sub-topics", component: _sub_topic_sub_topic_component__WEBPACK_IMPORTED_MODULE_13__["SubTopicComponent"] },
    { path: "add-resource", component: _add_resource_add_resource_component__WEBPACK_IMPORTED_MODULE_14__["AddResourceComponent"] },
    { path: "top-rated", component: _top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_15__["TopRatedComponent"] },
    { path: "role", component: _role_role_component__WEBPACK_IMPORTED_MODULE_16__["RoleComponent"] },
    { path: "teachers", component: _teachers_list_teachers_list_component__WEBPACK_IMPORTED_MODULE_17__["TeachersListComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "h5 > a{\n    color:black;\n}\n\nh6 > a{\n    color:black;\n}\n\n.dropdown ul{\n    margin-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg1ID4gYXtcbiAgICBjb2xvcjpibGFjaztcbn1cblxuaDYgPiBhe1xuICAgIGNvbG9yOmJsYWNrO1xufVxuXG4uZHJvcGRvd24gdWx7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar Header -->\n<div class=\"d-flex bg-light\">\n\n  <div class=\"col-md-2 pt-2\" style=\"text-align: center\">\n    <a routerLink=\"/categories\"><img src=\"assets/images/logo1.png\" width=\"100\" height=\"60\"></a>\n  </div>\n\n  <div class=\"col-md-6 pt-3\">\n    <div class=\"input-group mb-3\">\n      <input type=\"search\" class=\"form-control\" #inputSearch placeholder=\"Search\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-success\" (click)=\"searchContents()\">Search</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-1\"> </div>\n\n  <!-- <div class=\"col-md-2 mt-3 mb-3 text-center bg-theme text-white\" style=\"border-radius: 3px;padding-top:5px;\"\n    *ngIf='!logged'>\n    <a class=\"pointer\" (click)=\"login()\">Login With Google</a>\n  </div> -->\n  <div class=\"dropdown col-md-3 pt-3 pr-5 text-right\" *ngIf='logged'>\n    <a class=\" dropdown-toggle user\" data-toggle=\"dropdown\">\n      <img height=\"40\" width=\"40\" src=\"assets/images/user-logo.png\">\n    </a>\n    <ul class=\"dropdown-menu text-center\">\n      <li><a class=\"pointer\" (click)=\"logout()\">Logout</a></li>\n    </ul>\n  </div>\n\n</div>\n\n\n\n<!-- Second Navabr -->\n<!-- <div class=\"d-flex\">\n\n  <div class=\"col-md-2 pt-3 pb-2 bg-theme\">\n    <div class=\"d-flex pl-4 pr-2\">\n      <h4 style=\"color: White\">Resources</h4>\n    </div>\n  </div>\n\n  <nav class=\"navbar navbar-expand-lg navbar-light col-md-10\" style=\"background-color:#fff\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\"\n      aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" href=\"#\">My Pins</a>\n        <a class=\"nav-item nav-link\" routerLink=\"/pending\">Admin</a>\n      </div>\n    </div>\n  </nav>\n</div> -->\n\n<div class=\"d-flex\" style=\"min-height: 80vh;\" *ngIf='!loginPage'>\n  <div class=\"col-md-2 bg-light px-0\" style=\"text-align: center\">\n    <div class=\"col-12 pt-3 pb-2 px-0 bg-theme mb-3\">\n      <div class=\"pl-4 pr-2\">\n        <h4 style=\"color: White\">Resources</h4>\n      </div>\n    </div>\n    <h5><a routerLink=\"/resource\">My Resources</a></h5>\n    <h6 class=\"pt-2\"><a routerLink=\"/add-resource\">Create Resource</a></h6>\n    <h5 class=\"pt-2\"><a href=\"#\" style=\"color: #1d8459;\">Follow</a></h5>\n    <div class=\"pl-5\">\n      <hr>\n    </div>\n    <h6><a class=\"nav-item nav-link\" href=\"#\">My Pins</a></h6>\n    <h6><a class=\"nav-item nav-link\" routerLink=\"/pending\">Admin</a></h6>\n    <h6><a routerLink=\"/categories\">Categories</a></h6>\n    <h6 class=\"pt-1\"><a routerLink=\"/top-rated\">Top Rated</a></h6>\n    <h6 class=\"pt-1\"><a href=\"#\">Top Authors</a></h6>\n    <!-- <div class=\"pl-5\">\n                    <hr>\n                </div> -->\n    <h6 class=\"pt-1\"><a href=\"#\">Most viewed</a></h6>\n    <h6 class=\"pt-1\"><a href=\"#\">Most Popular</a></h6>\n    <div class=\"my-rating\"></div>\n  </div>\n\n  <div class=\"col-md-10\" style=\"background-color: #eeeeee\">\n    <router-outlet></router-outlet>\n  </div>\n\n\n</div>\n<div class=\"d-flex\" style=\"min-height: 80vh;text-align: center;align-items: center;width: 75%;justify-content: space-around;\" *ngIf='loginPage'>\n    <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(http, router, api, authService) {
        this.http = http;
        this.router = router;
        this.api = api;
        this.authService = authService;
        this.title = 'angApp';
        this.logged = false;
        this.user = null;
        this.loginPage = false;
        if (localStorage.getItem('Token') != null || localStorage.getItem('Token') != undefined) {
            this.logged = true;
        }
        else {
            this.router.navigateByUrl('/login');
        }
        if (window.location.pathname == '/login' || window.location.pathname == '/role') {
            this.loginPage = true;
        }
        else {
            this.loginPage = false;
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.currentUser.subscribe(function (user) {
            _this.user = user;
        });
        console.log(this.user);
    };
    // async login() {
    //   let res = await this.authService.doGoogleLogin();
    //   if (res) {
    //     this.logged = true
    //     let data = await this.api.getData('set_retrieve_role/')
    //     await data.subscribe((res: any) => {
    //       console.log('go to home')
    //       this.router.navigateByUrl('/categories')
    //     }, (err: any) => {
    //       this.router.navigateByUrl('/role')
    //       console.log('Set Profile')
    //     })
    //   }
    // }
    AppComponent.prototype.logout = function () {
        var res = this.authService.logout();
        if (res) {
            this.logged = false;
        }
    };
    AppComponent.prototype.searchContents = function () {
        if (this.search.nativeElement.value != '') {
            this.router.navigateByUrl('search?q=' + this.search.nativeElement.value);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("inputSearch"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "search", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _subcat_subcat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./subcat/subcat.component */ "./src/app/subcat/subcat.component.ts");
/* harmony import */ var _resource_resource_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resource/resource.component */ "./src/app/resource/resource.component.ts");
/* harmony import */ var _gridresource_gridresource_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gridresource/gridresource.component */ "./src/app/gridresource/gridresource.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _pending_pending_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pending/pending.component */ "./src/app/pending/pending.component.ts");
/* harmony import */ var _addtopic_addtopic_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./addtopic/addtopic.component */ "./src/app/addtopic/addtopic.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _topics_topics_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./topics/topics.component */ "./src/app/topics/topics.component.ts");
/* harmony import */ var _sub_topic_sub_topic_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sub-topic/sub-topic.component */ "./src/app/sub-topic/sub-topic.component.ts");
/* harmony import */ var _add_resource_add_resource_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-resource/add-resource.component */ "./src/app/add-resource/add-resource.component.ts");
/* harmony import */ var _top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./top-rated/top-rated.component */ "./src/app/top-rated/top-rated.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _teachers_list_teachers_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./teachers-list/teachers-list.component */ "./src/app/teachers-list/teachers-list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_7__["CategoriesComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _subcat_subcat_component__WEBPACK_IMPORTED_MODULE_9__["SubcatComponent"],
                _resource_resource_component__WEBPACK_IMPORTED_MODULE_10__["ResourceComponent"],
                _gridresource_gridresource_component__WEBPACK_IMPORTED_MODULE_11__["GridresourceComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
                _pending_pending_component__WEBPACK_IMPORTED_MODULE_13__["PendingComponent"],
                _addtopic_addtopic_component__WEBPACK_IMPORTED_MODULE_14__["AddtopicComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"],
                _topics_topics_component__WEBPACK_IMPORTED_MODULE_16__["TopicsComponent"],
                _sub_topic_sub_topic_component__WEBPACK_IMPORTED_MODULE_17__["SubTopicComponent"],
                _add_resource_add_resource_component__WEBPACK_IMPORTED_MODULE_18__["AddResourceComponent"],
                _top_rated_top_rated_component__WEBPACK_IMPORTED_MODULE_19__["TopRatedComponent"],
                _role_role_component__WEBPACK_IMPORTED_MODULE_23__["RoleComponent"],
                _teachers_list_teachers_list_component__WEBPACK_IMPORTED_MODULE_24__["TeachersListComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].firebase),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__["AngularFireAuthModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                user.getIdToken().then(function (tok) {
                    console.log(tok);
                });
                _this.currentUserSubject.next(user);
            }
            else {
                localStorage.setItem('currentUser', null);
            }
        });
    }
    Object.defineProperty(AuthService.prototype, "currentUserValue", {
        get: function () {
            this.currentUserSubject.value;
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.doGoogleLogin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var provider;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
                        provider.addScope('profile');
                        provider.addScope('email');
                        return [4 /*yield*/, this.afAuth.auth
                                .signInWithPopup(provider).then(function (result) {
                                result.user.getIdToken().then(function (tok) {
                                    localStorage.setItem('Token', 'JWT ' + tok);
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    AuthService.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // remove user from local storage to log user out
                    return [4 /*yield*/, this.afAuth.auth.signOut().then(function (response) {
                            localStorage.removeItem('currentUser');
                            localStorage.removeItem('user');
                            localStorage.removeItem('Token');
                            _this.currentUserSubject.next(null);
                            return true;
                        })];
                    case 1:
                        // remove user from local storage to log user out
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    text-align: center;\n    margin-left: 10px;\n    margin-bottom: 5px;\n        }\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1Q0FBdUM7SUFDdkMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO1FBQ2Q7O0FBRVI7RUFDRSx3Q0FBd0M7QUFDMUMiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG5cbi5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex pb-5\">\n    <!-- <div class=\"col-md-2 pt-1 bg-light\" style=\"text-align: center\"></div> -->\n    <div class=\"col-md-12 pt-4\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"card col-md-3\" *ngFor='let sub of subjects'>\n                    <div class=\"card-block pt-3\">\n                        <a [routerLink]=\"['/subcat', sub.id]\"><img src=\"assets\\images\\folder.jpg\" width=\"100%\"></a>\n                        <div>\n                            <h4>{{sub.title}}</h4>\n                            <p>John Doe</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"not_found\" *ngIf='empty'>\n                    <img src=\"assets/images/not-found.png\" alt=\"\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(api) {
        var _this = this;
        this.api = api;
        this.empty = false;
        this.getResources = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getData('get_subjects/')];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            if (res.length > 0) {
                                _this.subjects = res;
                            }
                            else {
                                _this.empty = true;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); };
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.getResources();
    };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/gridresource/gridresource.component.css":
/*!*********************************************************!*\
  !*** ./src/app/gridresource/gridresource.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyaWRyZXNvdXJjZS9ncmlkcmVzb3VyY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/gridresource/gridresource.component.html":
/*!**********************************************************!*\
  !*** ./src/app/gridresource/gridresource.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"col-md-4\">\n            <a routerLink=\"/gridresource\"><img src=\"https://img.icons8.com/ios-filled/30/000000/activity-grid--v2.png\"></a>\n            <a routerLink=\"/resource\"><img src=\"https://img.icons8.com/material-two-tone/40/000000/day-view.png\"></a>\n    </div>\n</div>\n\n<!--Resource Grid -->\n<div class=\"container-fulid pt-2\">\n  <div class=\"d-flex\">\n    <div class=\"col-md-3 pb-3\">\n        <!-- Title -->\n        <div class=\"card\">\n            <h5 class=\"card-title pt-2\" style=\"text-align: center;\">Nota Sains Tahun 2</h5>\n            <img class=\"card-img-top\"  src=\"assets/images/book.png\"  alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"www.google.com/first+bar+website.png\" style=\"border: 1px solid black\">\n              <p class=\"card-text\" style=\"text-align: center;\">Some Text Here Related to the snippet</p>\n              </div>\n          </div>\n    </div>\n\n    <div class=\"col-md-3 pb-3\">\n        <!-- Title -->\n        <div class=\"card\">\n            <h5 class=\"card-title pt-2\" style=\"text-align: center;\">Nota Sains Tahun 2</h5>\n            <img class=\"card-img-top\"  src=\"assets/images/book.png\"  alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"www.google.com/first+bar+website.png\" style=\"border: 1px solid black\">\n              <p class=\"card-text\" style=\"text-align: center;\">Some Text Here Related to the snippet</p>\n              </div>\n          </div>\n    </div>\n\n    <div class=\"col-md-3 pb-3\">\n        <!-- Title -->\n        <div class=\"card\">\n            <h5 class=\"card-title pt-2\" style=\"text-align: center;\">Nota Sains Tahun 2</h5>\n            <img class=\"card-img-top\"  src=\"assets/images/book.png\"  alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"www.google.com/first+bar+website.png\" style=\"border: 1px solid black\">\n              <p class=\"card-text\" style=\"text-align: center;\">Some Text Here Related to the snippet</p>\n              </div>\n          </div>\n    </div>\n\n    <div class=\"col-md-3 pb-3\">\n        <!-- Title -->\n        <div class=\"card\">\n            <h5 class=\"card-title pt-2\" style=\"text-align: center;\">Nota Sains Tahun 2</h5>\n            <img class=\"card-img-top\"  src=\"assets/images/book.png\"  alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"www.google.com/first+bar+website.png\" style=\"border: 1px solid black\">\n              <p class=\"card-text\" style=\"text-align: center;\">Some Text Here Related to the snippet</p>\n              </div>\n          </div>\n    </div>\n  </div> \n</div>"

/***/ }),

/***/ "./src/app/gridresource/gridresource.component.ts":
/*!********************************************************!*\
  !*** ./src/app/gridresource/gridresource.component.ts ***!
  \********************************************************/
/*! exports provided: GridresourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridresourceComponent", function() { return GridresourceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridresourceComponent = /** @class */ (function () {
    function GridresourceComponent() {
    }
    GridresourceComponent.prototype.ngOnInit = function () {
    };
    GridresourceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gridresource',
            template: __webpack_require__(/*! ./gridresource.component.html */ "./src/app/gridresource/gridresource.component.html"),
            styles: [__webpack_require__(/*! ./gridresource.component.css */ "./src/app/gridresource/gridresource.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GridresourceComponent);
    return GridresourceComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  transition: 0.3s;\n  text-align: center;\n  margin-left: 15px;\n  margin-bottom: 15px;\n      }\n\n.card:hover {\nbox-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7RUFDdkMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO01BQ2Y7O0FBRU47QUFDQSx3Q0FBd0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgfVxuXG4uY2FyZDpob3ZlciB7XG5ib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Cards Heading -->\n<div class=\"d-flex\">\n <!-- <div class=\"col-md-2 pt-3 bg-light\" style=\"text-align: center\"></div> -->\n  <div class=\"col-md-10\">\n      <div class=\"d-flex pt-5 \">\n          <h4>Featured</h4>\n      </div>\n  </div>\n \n  <div class=\"col-md-2 \">\n      <div class=\"d-flex pt-5 \">\n          <button type=\"button\" class=\"btn btn-success\">See All</button>\n      </div>\n  </div>\n\n</div>\n\n      <!-- Cards -->\n<div class=\"d-flex pb-5\">\n  <!-- <div class=\"col-md-2 pt-1 bg-light\" style=\"text-align: center\"></div> -->\n  \n  <div class=\"col-md-12 pt-4\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n\n          <div class=\"card col-md-3\" *ngFor=\"let subject of featured\" >\n              <div class=\"card-block pt-3\">\n                <a routerLink=\"/subcat\"><img src=\"assets\\images\\folder.jpg\" width=\"100%\"></a>\n                  <div>\n                      <h4 >{{subject.title}}</h4> \n                      <p>{{subject.author}}</p> \n                  </div>\n              </div>                   \n          </div>\n      \n        </div>\n          \n      \n              \n    </div>\n  </div>\n</div>\n\n\n\n<!-- Cards 2 Heading -->\n<div class=\"d-flex\">\n <!-- <div class=\"col-md-2 pt-3 bg-light\" style=\"text-align: center\"></div> -->\n  <div class=\"col-md-10\">\n      <div class=\"d-flex pt-5 \">\n          <h4>New and Updated</h4>\n      </div>\n  </div>\n  \n  <div class=\"col-md-2 \">\n      <div class=\"d-flex pt-5 \">\n          <button type=\"button\" class=\"btn btn-success\">See All</button>\n      </div>\n  </div>\n\n</div>\n \n       <!-- Cards 2 -->\n       <div class=\"d-flex pb-5\">\n            <!-- <div class=\"col-md-2 pt-1 bg-light\" style=\"text-align: center\"></div> -->\n            \n            <div class=\"col-md-12 pt-4\">\n              <div class=\"container-fluid\">\n                  <div class=\"row\" >\n          \n                    <div class=\"card col-md-3\" *ngFor=\"let subject of new\" >\n                        <div class=\"card-block pt-3\">\n                           <a routerLink=\"/subcat\"><img src=\"assets\\images\\folder.jpg\" width=\"100%\"></a>\n                            <div>\n                                <h4>{{subject.title}}</h4> \n                                <p>{{subject.author}}</p> \n                            </div>\n                        </div>                   \n                    </div>\n                \n                    \n          \n                  </div>\n                    \n                \n                        \n              </div>\n            </div>\n          </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(api) {
        var _this = this;
        this.api = api;
        this.featured = [
            {
                title: 'Maths',
                author: 'Daniel'
            },
            {
                title: 'Physics',
                author: 'Farde'
            },
            {
                title: 'Chemistry',
                author: 'Smith'
            },
            {
                title: 'Pakistan Studies',
                author: 'Ayesha Malik'
            },
        ];
        this.new = [
            {
                title: 'Computer Science',
                author: 'Bill'
            },
            {
                title: 'Biology',
                author: 'Juairia Gem'
            },
            {
                title: 'Economic',
                author: 'Smith Mark'
            }
        ];
        this.getSubjects = function () {
            _this.api.getallsubjects().subscribe(function (data) { _this.featured = data; }, function (error) { console.log(error); });
        };
        this.getSubjects();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            providers: [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]],
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Shared */\n.loginBtn {\n    box-sizing: border-box;\n    position: relative;\n    /* width: 13em;  - apply for fixed size */\n    margin: 0.2em;\n    padding: 0 15px 0 46px;\n    border: none;\n    text-align: left;\n    line-height: 34px;\n    white-space: nowrap;\n    border-radius: 0.2em;\n    font-size: 16px;\n    color: #FFF;\n  }\n.loginBtn:before {\n    content: \"\";\n    box-sizing: border-box;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 34px;\n    height: 100%;\n  }\n.loginBtn:focus {\n    outline: none;\n  }\n.loginBtn:active {\n    box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\n  }\n/* Google */\n.loginBtn--google {\n    /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\n    background: #DD4B39;\n  }\n.loginBtn--google:before {\n    border-right: #BB3F30 1px solid;\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\n  }\n.loginBtn--google:hover,\n  .loginBtn--google:focus {\n    background: #E74B37;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxXQUFXO0FBQ1g7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFdBQVc7RUFDYjtBQUNBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDQTtJQUNFLDRDQUE0QztFQUM5QztBQUVBLFdBQVc7QUFDWDtJQUNFLG9EQUFvRDtJQUNwRCxtQkFBbUI7RUFDckI7QUFDQTtJQUNFLCtCQUErQjtJQUMvQix1R0FBdUc7RUFDekc7QUFDQTs7SUFFRSxtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2hhcmVkICovXG4ubG9naW5CdG4ge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIHdpZHRoOiAxM2VtOyAgLSBhcHBseSBmb3IgZml4ZWQgc2l6ZSAqL1xuICAgIG1hcmdpbjogMC4yZW07XG4gICAgcGFkZGluZzogMCAxNXB4IDAgNDZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI0ZGRjtcbiAgfVxuICAubG9naW5CdG46YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAzNHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAubG9naW5CdG46Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgLmxvZ2luQnRuOmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMzJweCByZ2JhKDAsMCwwLDAuMSk7XG4gIH1cbiAgXG4gIC8qIEdvb2dsZSAqL1xuICAubG9naW5CdG4tLWdvb2dsZSB7XG4gICAgLypmb250LWZhbWlseTogXCJSb2JvdG9cIiwgUm9ib3RvLCBhcmlhbCwgc2Fucy1zZXJpZjsqL1xuICAgIGJhY2tncm91bmQ6ICNERDRCMzk7XG4gIH1cbiAgLmxvZ2luQnRuLS1nb29nbGU6YmVmb3JlIHtcbiAgICBib3JkZXItcmlnaHQ6ICNCQjNGMzAgMXB4IHNvbGlkO1xuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQwODIvaWNvbl9nb29nbGUucG5nJykgNnB4IDZweCBuby1yZXBlYXQ7XG4gIH1cbiAgLmxvZ2luQnRuLS1nb29nbGU6aG92ZXIsXG4gIC5sb2dpbkJ0bi0tZ29vZ2xlOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiAjRTc0QjM3O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\" style=\"border-radius: 5px;padding: 100px;background-color: #eee;color: black;\">\n  <h3 class=\"mb-3\">Register/Login First</h3>\n  <button class=\"loginBtn loginBtn--google\" (click)=\"login()\">\n    Login with Google\n  </button>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, api, router) {
        this.authService = authService;
        this.api = api;
        this.router = router;
        this.logged = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res, data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.doGoogleLogin()];
                    case 1:
                        res = _a.sent();
                        if (!res) return [3 /*break*/, 3];
                        this.logged = true;
                        return [4 /*yield*/, this.api.getData('set_retrieve_role/')];
                    case 2:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            console.log(res);
                            console.log('go to home');
                            _this.router.navigateByUrl('/categories');
                        }, function (err) {
                            console.log('Set Profile');
                            console.log(err);
                            _this.router.navigateByUrl('/role');
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pending/pending.component.css":
/*!***********************************************!*\
  !*** ./src/app/pending/pending.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlbmRpbmcvcGVuZGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pending/pending.component.html":
/*!************************************************!*\
  !*** ./src/app/pending/pending.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex\">\n\n\n  <nav class=\"navbar navbar-expand-lg navbar-light col-md-10\" style=\"background-color:#fff\">\n    <a class=\"navbar-brand pr-2\" routerLink=\"/pending\">Pending</a>\n    <a class=\"navbar-brand pr-2\" routerLink=\"/addtopic\">Add Topic</a>\n  </nav>\n</div>\n\n<div class=\"container-fulid pt-2\">\n  <div class=\"row\">\n    <div class=\"col-md-3 pb-3\" *ngFor='let item of data; let i = index'>\n      <div class=\"card\">\n        <h5 class=\"card-title pt-2 text-center ellipsis\">{{item.resource_type}}</h5>\n        <img class=\"card-img-top\" src=\"assets/images/book.png\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"www.google.com/first+bar+website.png\"\n            style=\"border: 1px solid black\">\n          <p class=\"card-text ellipsis\">{{item.description}}</p>\n          <button class=\"btn btn-success\" (click)='approve(item.id,i)'>Approve Topic</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"not_found\" *ngIf='empty'>\n      <img src=\"assets/images/not-found.png\" alt=\"\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pending/pending.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pending/pending.component.ts ***!
  \**********************************************/
/*! exports provided: PendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingComponent", function() { return PendingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



var PendingComponent = /** @class */ (function () {
    function PendingComponent(api) {
        this.api = api;
        this.empty = false;
    }
    PendingComponent.prototype.ngOnInit = function () {
        this.getPending();
    };
    PendingComponent.prototype.getPending = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getData('get_pending/')];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            console.log(res);
                            if (res.length == 0) {
                                _this.empty = true;
                            }
                            else {
                                _this.data = res;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PendingComponent.prototype.approve = function (id, i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getData('approve_resource/?rsc_id=' + id)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            console.log(res);
                            _this.data.splice(i, 1);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PendingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pending',
            template: __webpack_require__(/*! ./pending.component.html */ "./src/app/pending/pending.component.html"),
            styles: [__webpack_require__(/*! ./pending.component.css */ "./src/app/pending/pending.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], PendingComponent);
    return PendingComponent;
}());



/***/ }),

/***/ "./src/app/resource/resource.component.css":
/*!*************************************************!*\
  !*** ./src/app/resource/resource.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Title {\n  text-align: center;\n  color: white;\n}\n.grey_title {\n  border-radius: 10px;\n}\n.pic_padding {\n  padding-left: 0px;\n}\n#Description {\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzb3VyY2UvcmVzb3VyY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9yZXNvdXJjZS9yZXNvdXJjZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI1RpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uZ3JleV90aXRsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucGljX3BhZGRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbiNEZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/resource/resource.component.html":
/*!**************************************************!*\
  !*** ./src/app/resource/resource.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"col-md-4\">\n        <a class=\"pointer\" (click)=\"layoutChange(1)\"><img\n                src=\"https://img.icons8.com/ios-filled/30/000000/activity-grid--v2.png\"></a>\n        <a class=\"pointer\" (click)=\"layoutChange(2)\"><img\n                src=\"https://img.icons8.com/material-two-tone/40/000000/day-view.png\"></a>\n    </div>\n</div>\n<!-- Header -->\n<div *ngIf='list'>\n    <div class=\"container-fulid d-flex pt-2\" *ngFor='let resource of data'>\n        <div class=\"col-md-7 offset-md-1 grey_title pb-1\" style=\"background-color: #1d8459; border: 1px solid black\">\n            <div class=\"pt-2\" id=\"Title\">\n                <h5>{{resource.resource_type}}</h5>\n            </div>\n            <div class=\"d-flex\">\n                <img src=\"assets/images/book.png\" width=\"20%\" class=\"pl-2\">\n                <p class=\"pt-3 pl-3\" id=\"Description\"><b>{{resource.description}}</b></p>\n            </div>\n        </div>\n        <div class=\"col-md-3 pl-5\">\n            <div class=\"d-flex\">\n                <div class=\"d-flex flex-column\">\n                    <a href=\"#\"><img src=\"assets/images/Plus.png\" width=\"55px\" title=\"Save This\"></a>\n                    <a href=\"#\"><img src=\"assets/images/Share.png\" width=\"55px\" title=\"Share It\"></a>\n                    <a class=\"pointer\" (click)=\"followAuther(resource.author)\"><img src=\"assets/images/Profile.png\"\n                            width=\"60px\" title=\"Follow Auther\"></a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-fulid pt-2\" *ngIf='grid'>\n    <div class=\"row\">\n        <div class=\"col-md-3 pb-3\" *ngFor='let resource of data'>\n            <!-- Title -->\n            <div class=\"card\">\n                <h5 class=\"card-title pt-2 text-capitalize\" style=\"text-align: center;\">{{resource.resource_type}}</h5>\n                <img class=\"card-img-top\" src=\"assets/images/book.png\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"www.google.com/first+bar+website.png\"\n                        style=\"border: 1px solid black\">\n                    <p class=\"card-text\" style=\"text-align: center;\">{{resource.description}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"not_found\" *ngIf='empty'>\n    <img src=\"assets/images/not-found.png\" alt=\"\">\n</div>\n\n<!-- \n<div class=\"row pt-4\">\n    <div class=\"col-md-7 offset-md-1\">\n        <form [formGroup]='commentForm'>\n            <div class=\"form-group\">\n                <div>\n                    <h5>Rate This Link</h5>\n                </div>\n                <div>\n                    <img src=\"assets/images/BlackStar.png\" width=\"6%\">\n                    <img src=\"assets/images/BlackStar.png\" width=\"6%\">\n                    <img src=\"assets/images/BlackStar.png\" width=\"6%\">\n                    <img src=\"assets/images/FillStar.png\" width=\"6%\">\n                    <img src=\"assets/images/FillStar.png\" width=\"6%\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <h5 for=\"exampleInputPassword1\">Comment : </h5>\n                <textarea type=\"password\" class=\"form-control\" formControlName=\"rate\"                     placeholder=\"Enter Your Comment Here\"></textarea>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n            <button class=\"btn btn-success ml-2\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseExample\"\n                aria-expanded=\"false\" aria-controls=\"collapseExample\">All Comment</button>\n        </form>\n    </div>\n</div>\n<div class=\"d-flex\">\n    <div class=\"col-md-10 offset-md-1\">\n        <hr>\n    </div>\n</div>\n<div class=\"d-flex collapse\" id=\"collapseExample\">\n    <div class=\"col-md-2 offset-md-1\">\n        <div class=\"d-flex pic_padding\">\n            <img src=\"assets/images/Author.png\" width=\"70%\">\n        </div>\n    </div>\n    <div class=\"col-md-5 pr-5 pic_padding\">\n        <div class=\"d-flex flex-column\">\n            <h4>Fiona Macdonald</h4>\n            <div class=\"d-flex flex-row\">\n                <img src=\"assets/images/BlackStar.png\" width=\"4%\">\n                <img src=\"assets/images/BlackStar.png\" width=\"4%\">\n                <img src=\"assets/images/BlackStar.png\" width=\"4%\">\n                <img src=\"assets/images/FillStar.png\" width=\"4%\">\n                <img src=\"assets/images/FillStar.png\" width=\"4%\">\n                <span><i style=\"color: #222\" class=\"pl-3\"> October 8, 2019</i></span>\n            </div>\n            <p class=\"pt-2\">\n                Good game but expensive. This is not a game for free players, here you pay to play. Unlike most games\n                there isn't a login bonus unless you buy a pack. These start off cheap then double in price so you can't\n                just spend £5 or £10 when you feel like buying something which means that the developers are ...\n            </p>\n        </div>\n    </div>\n</div> -->"

/***/ }),

/***/ "./src/app/resource/resource.component.ts":
/*!************************************************!*\
  !*** ./src/app/resource/resource.component.ts ***!
  \************************************************/
/*! exports provided: ResourceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceComponent", function() { return ResourceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




var ResourceComponent = /** @class */ (function () {
    function ResourceComponent(route, api) {
        var _this = this;
        this.route = route;
        this.api = api;
        this.empty = false;
        this.grid = false;
        this.list = true;
        this.followAuther = function (auther) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getData('follow_author/?aut_id=1')];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            console.log(res);
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.query = this.route.queryParams;
        this.subcat = this.query._value.subcat;
        this.lvl = this.query._value.lvl;
        this.topic = this.query._value.topic;
        this.type = this.query._value.type;
    }
    ResourceComponent.prototype.ngOnInit = function () {
        this.getResources();
    };
    ResourceComponent.prototype.getResources = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getData("navigate/?sub_id=" + this.subcat + "&lev_id=" + this.lvl + "&tpc_id=" + this.topic)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            console.log(res);
                            if (res.length == 0) {
                                _this.empty = true;
                            }
                            else {
                                _this.data = res.filter(function (r) { return r.resource_type == _this.type; });
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ResourceComponent.prototype.layoutChange = function (n) {
        if (n == 1) {
            this.grid = true;
            this.list = false;
        }
        else {
            this.grid = false;
            this.list = true;
        }
    };
    ResourceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resource',
            template: __webpack_require__(/*! ./resource.component.html */ "./src/app/resource/resource.component.html"),
            styles: [__webpack_require__(/*! ./resource.component.css */ "./src/app/resource/resource.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ResourceComponent);
    return ResourceComponent;
}());



/***/ }),

/***/ "./src/app/role/role.component.css":
/*!*****************************************!*\
  !*** ./src/app/role/role.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGUvcm9sZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/role/role.component.html":
/*!******************************************!*\
  !*** ./src/app/role/role.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center py-5\">\n  <h3> What Best Describe You?</h3>\n  <div class=\"role mt-5 text-center pointer\" (click)=\"setRole('teacher')\" title=\"Register as Teacher\">\n    <img src=\"assets/images/teacher.png\" alt=\"teacher\">\n    <h3 style=\"margin-top:20px;\">Teacher</h3>\n  </div>\n  <div class=\"role mt-5 text-center pointer\" (click)=\"setRole('student')\" title=\"Register as Student\">\n    <img src=\"assets/images/student.png\" alt=\"student\" style=\"border-radius: 50%;border: 6px solid #f36f3a;\">\n    <h3 style=\"margin-top:20px;\">Student</h3>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/role/role.component.ts":
/*!****************************************!*\
  !*** ./src/app/role/role.component.ts ***!
  \****************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RoleComponent = /** @class */ (function () {
    function RoleComponent(api, router) {
        var _this = this;
        this.api = api;
        this.router = router;
        this.setRole = function (role) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(role);
                        return [4 /*yield*/, this.api.postData('set_retrieve_role/', { 'role': role })];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            console.log(res);
                            _this.router.navigateByUrl('/categories');
                        });
                        return [2 /*return*/];
                }
            });
        }); };
    }
    RoleComponent.prototype.ngOnInit = function () {
    };
    RoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/role/role.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/role/role.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RoleComponent);
    return RoleComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Title {\n  text-align: center;\n  color: white;\n}\n.grey_title {\n  border-radius: 10px;\n}\n.pic_padding {\n  padding-left: 0px;\n}\n#Description {\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNUaXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmdyZXlfdGl0bGUge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnBpY19wYWRkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4jRGVzY3JpcHRpb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"col-md-4\">\n        <a routerLink=\"/gridresource\"><img src=\"https://img.icons8.com/ios-filled/30/000000/activity-grid--v2.png\"></a>\n        <a routerLink=\"/resource\"><img src=\"https://img.icons8.com/material-two-tone/40/000000/day-view.png\"></a>\n    </div>\n</div>\n\n<!-- Header -->\n<div class=\"container-fulid d-flex pt-2\" *ngFor='let item of data'>\n    <!-- Title -->\n\n    <div class=\"col-md-7 offset-md-1 grey_title pb-1\" style=\"background-color: #1d8459; border: 1px solid black\">\n        <div class=\"pt-2\" id=\"Title\">\n            <h5>{{item.resource_type}}</h5>\n        </div>\n        <!-- Search Bar-->\n        <!-- <div class=\"d-flex\">\n            <a href=\"#\"><img src=\"assets/images/left.png\" width=\"40px\"></a>\n            <a href=\"#\"><img src=\"assets/images/Right.png\" width=\"40px\"></a>\n            <a href=\"#\"><img src=\"assets/images/Reset.png\" width=\"60px\"></a>\n            <input type=\"text\" class=\"form-control\"  placeholder=\"www.google.com/first+bar+website.png\"\n                style=\"border: 1px solid black\">\n        </div>\n        <div style=\"background-color: #fff; border: 1px solid Black\">\n            <div class=\"d-flex pt-3 pb-3\">\n            </div>\n        </div> -->\n        <div class=\"d-flex\">\n            <img src=\"assets/images/book.png\" width=\"20%\" class=\"pl-2\">\n            <p class=\"pt-3 pl-3\" id=\"Description\"><b>{{item.description}}</b></p>\n        </div>\n    </div>\n    <div class=\"col-md-3 pl-5\">\n        <div class=\"d-flex\">\n            <div class=\"d-flex flex-column\">\n                <a href=\"#\"><img src=\"assets/images/Plus.png\" width=\"55px\" title=\"Save This\"></a>\n                <a href=\"#\"><img src=\"assets/images/Share.png\" width=\"55px\" title=\"Share It\"></a>\n                <a href=\"#\"><img src=\"assets/images/Profile.png\" width=\"60px\"></a>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"not_found\" *ngIf='empty'>\n    <img src=\"assets/images/not-found.png\" alt=\"\">\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, api) {
        this.route = route;
        this.api = api;
        this.empty = false;
        this.query = this.route.queryParams;
        this.query = this.query._value.q;
        console.log('test');
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.getSearchResult();
    };
    SearchComponent.prototype.getSearchResult = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getData('search/?q=' + this.query)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            console.log(res);
                            if (res.length == 0) {
                                _this.empty = true;
                            }
                            else {
                                _this.data = res;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/sub-topic/sub-topic.component.css":
/*!***************************************************!*\
  !*** ./src/app/sub-topic/sub-topic.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Yi10b3BpYy9zdWItdG9waWMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sub-topic/sub-topic.component.html":
/*!****************************************************!*\
  !*** ./src/app/sub-topic/sub-topic.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex pb-5\"> \n  <div class=\"col-md-12 pt-4\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"card col-md-3\">\n                <div class=\"card-block pt-3\">\n                        <a [routerLink]=\"['/resource']\" [queryParams]=\"{ subcat: subcat,lvl:lvl,topic:topic,type:'exercise'}\"><img src=\"assets\\images\\folder.jpg\" width=\"100%\"></a>\n                    <div>\n                        <h4>Excercise</h4>\n                    </div>\n                </div>                   \n            </div>  \n          <div class=\"card col-md-3\">\n              <div class=\"card-block pt-3\">\n                      <a [routerLink]=\"['/resource']\" [queryParams]=\"{ subcat: subcat,lvl:lvl,topic:topic,type:'notes'}\"><img src=\"assets\\images\\folder.jpg\" width=\"100%\"></a>\n                  <div>\n                      <h4>Notes</h4>\n                  </div>\n              </div>                   \n          </div>        \n        </div> \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sub-topic/sub-topic.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sub-topic/sub-topic.component.ts ***!
  \**************************************************/
/*! exports provided: SubTopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTopicComponent", function() { return SubTopicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




var SubTopicComponent = /** @class */ (function () {
    function SubTopicComponent(route, api) {
        this.route = route;
        this.api = api;
        this.query = this.route.queryParams;
        this.subcat = this.query._value.subcat;
        this.lvl = this.query._value.lvl;
        this.topic = this.query._value.topic;
    }
    SubTopicComponent.prototype.ngOnInit = function () {
    };
    SubTopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sub-topic',
            template: __webpack_require__(/*! ./sub-topic.component.html */ "./src/app/sub-topic/sub-topic.component.html"),
            styles: [__webpack_require__(/*! ./sub-topic.component.css */ "./src/app/sub-topic/sub-topic.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], SubTopicComponent);
    return SubTopicComponent;
}());



/***/ }),

/***/ "./src/app/subcat/subcat.component.css":
/*!*********************************************!*\
  !*** ./src/app/subcat/subcat.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    transition: 0.3s;\n    text-align: center;\n    margin-left: 10px;\n    margin-bottom: 5px;\n        }\n  \n  .card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViY2F0L3N1YmNhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtRQUNkOztFQUVOO0VBQ0Esd0NBQXdDO0VBQ3hDIiwiZmlsZSI6InNyYy9hcHAvc3ViY2F0L3N1YmNhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgXG4gIC5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/subcat/subcat.component.html":
/*!**********************************************!*\
  !*** ./src/app/subcat/subcat.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex pb-5\">\n  <div class=\"col-md-12 pt-4\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"card col-md-3\" *ngFor=\"let level of data\">\n          <div class=\"card-block pt-3\">\n            <a [routerLink]=\"['/topics']\" [queryParams]=\"{ subcat: id,lvl:level.id}\"><img src=\"assets\\images\\folder.jpg\"\n                width=\"100%\"></a>\n            <div>\n              <h4>{{level.title}}</h4>\n            </div>\n          </div>\n        </div>\n        <div class=\"not_found\" *ngIf='empty'>\n          <img src=\"assets/images/not-found.png\" alt=\"\">\n      </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/subcat/subcat.component.ts":
/*!********************************************!*\
  !*** ./src/app/subcat/subcat.component.ts ***!
  \********************************************/
/*! exports provided: SubcatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcatComponent", function() { return SubcatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SubcatComponent = /** @class */ (function () {
    function SubcatComponent(api, route) {
        var _this = this;
        this.api = api;
        this.route = route;
        this.empty = false;
        this.levels = [
            {
                lev: '1',
            },
            {
                lev: '2',
            },
            {
                lev: '3',
            }
        ];
        this.getSubCategories = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getData('get_level_by_subject/?sub_id=' + this.id)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            console.log(res);
                            if (res.length == 0) {
                                _this.empty = true;
                            }
                            else {
                                _this.data = res;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.id = this.route.snapshot.params['id'];
        console.log(this.id);
    }
    SubcatComponent.prototype.ngOnInit = function () {
        this.getSubCategories();
    };
    SubcatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subcat',
            template: __webpack_require__(/*! ./subcat.component.html */ "./src/app/subcat/subcat.component.html"),
            styles: [__webpack_require__(/*! ./subcat.component.css */ "./src/app/subcat/subcat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SubcatComponent);
    return SubcatComponent;
}());



/***/ }),

/***/ "./src/app/teachers-list/teachers-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/teachers-list/teachers-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYWNoZXJzLWxpc3QvdGVhY2hlcnMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/teachers-list/teachers-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/teachers-list/teachers-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fulid d-flex pt-2\" *ngFor='let resource of data'> -->\n<div class=\"container-fulid d-flex pt-2\" >\n  <div class=\"col-md-7 offset-md-1 grey_title pb-1\" style=\"background-color: #1d8459; border: 1px solid black\">\n      <div class=\"pt-2\" id=\"Title\">\n          <h5>resource.resource_type</h5>\n      </div>\n      <!-- Search Bar-->\n      <!-- <div class=\"d-flex\">\n          <a href=\"#\"><img src=\"assets/images/left.png\" width=\"40px\"></a>\n          <a href=\"#\"><img src=\"assets/images/Right.png\" width=\"40px\"></a>\n          <a href=\"#\"><img src=\"assets/images/Reset.png\" width=\"60px\"></a>\n          <input type=\"text\" class=\"form-control\" placeholder=\"www.google.com/first+bar+website.png\"\n              style=\"border: 1px solid black\">\n      </div>\n      <div style=\"background-color: #fff; border: 1px solid Black\">\n          <div class=\"d-flex pt-3 pb-3\">\n          </div>\n      </div> -->\n      <div class=\"d-flex\">\n          <img src=\"assets/images/book.png\" width=\"20%\" class=\"pl-2\">\n          <p class=\"pt-3 pl-3\" id=\"Description\"><b>resource.description</b></p>\n      </div>\n  </div>\n  <div class=\"col-md-3 pl-5\">\n      <div class=\"d-flex\">\n          <div class=\"d-flex flex-column\">\n              <a href=\"#\"><img src=\"assets/images/Plus.png\" width=\"55px\" title=\"Save This\"></a>\n              <a href=\"#\"><img src=\"assets/images/Share.png\" width=\"55px\" title=\"Share It\"></a>\n              <a class=\"pointer\" (click)=\"followAuther(resource.author)\"><img src=\"assets/images/Profile.png\" width=\"60px\" title=\"Follow Auther\"></a>\n          </div>\n      </div>\n  </div>\n</div>\n<div class=\"not_found\" *ngIf='empty'>\n  <img src=\"assets/images/not-found.png\" alt=\"\">\n</div>"

/***/ }),

/***/ "./src/app/teachers-list/teachers-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/teachers-list/teachers-list.component.ts ***!
  \**********************************************************/
/*! exports provided: TeachersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersListComponent", function() { return TeachersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



var TeachersListComponent = /** @class */ (function () {
    function TeachersListComponent(api) {
        var _this = this;
        this.api = api;
        this.empty = false;
        this.getTeacher = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getData('get_teachers/')];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            console.log(res);
                        });
                        return [2 /*return*/];
                }
            });
        }); };
    }
    TeachersListComponent.prototype.ngOnInit = function () {
        this.getTeacher();
    };
    TeachersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teachers-list',
            template: __webpack_require__(/*! ./teachers-list.component.html */ "./src/app/teachers-list/teachers-list.component.html"),
            styles: [__webpack_require__(/*! ./teachers-list.component.css */ "./src/app/teachers-list/teachers-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], TeachersListComponent);
    return TeachersListComponent;
}());



/***/ }),

/***/ "./src/app/top-rated/top-rated.component.css":
/*!***************************************************!*\
  !*** ./src/app/top-rated/top-rated.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcC1yYXRlZC90b3AtcmF0ZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/top-rated/top-rated.component.html":
/*!****************************************************!*\
  !*** ./src/app/top-rated/top-rated.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<div class=\"container-fulid d-flex pt-2\" *ngFor='let item of data'>\n  <!-- Title -->\n\n  <div class=\"col-md-7 offset-md-1 grey_title pb-1\" style=\"background-color: #1d8459; border: 1px solid black\">\n      <div class=\"pt-2\" id=\"Title\">\n          <h5 class=\"text-white text-center\">{{item.resource_type}}</h5>\n      </div>\n      <!-- Search Bar-->\n      <!-- <div class=\"d-flex\">\n          <a href=\"#\"><img src=\"assets/images/left.png\" width=\"40px\"></a>\n          <a href=\"#\"><img src=\"assets/images/Right.png\" width=\"40px\"></a>\n          <a href=\"#\"><img src=\"assets/images/Reset.png\" width=\"60px\"></a>\n          <input type=\"text\" class=\"form-control\"  placeholder=\"www.google.com/first+bar+website.png\"\n              style=\"border: 1px solid black\">\n      </div>\n      <div style=\"background-color: #fff; border: 1px solid Black\">\n          <div class=\"d-flex pt-3 pb-3\">\n          </div>\n      </div> -->\n      <div class=\"d-flex\">\n          <img src=\"assets/images/book.png\" width=\"20%\" class=\"pl-2\">\n          <p class=\"pt-3 pl-3 text-white\" id=\"Description\"><b>{{item.description}}</b></p>\n      </div>\n  </div>\n  <div class=\"col-md-3 pl-5\">\n      <div class=\"d-flex\">\n          <div class=\"d-flex flex-column\">\n              <a class=\"pointer\" (click)='saveLink(item.id)'><img src=\"assets/images/Plus.png\" width=\"55px\" title=\"Save This\" /></a>\n              <a href=\"#\"><img src=\"assets/images/Share.png\" width=\"55px\" title=\"Share It\"></a>\n              <a href=\"#\"><img src=\"assets/images/Profile.png\" width=\"60px\"></a>\n          </div>\n      </div>\n  </div>\n</div>\n<div class=\"not_found\" *ngIf='empty'>\n    <img src=\"assets/images/not-found.png\" alt=\"\">\n</div>"

/***/ }),

/***/ "./src/app/top-rated/top-rated.component.ts":
/*!**************************************************!*\
  !*** ./src/app/top-rated/top-rated.component.ts ***!
  \**************************************************/
/*! exports provided: TopRatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopRatedComponent", function() { return TopRatedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



var TopRatedComponent = /** @class */ (function () {
    function TopRatedComponent(api) {
        var _this = this;
        this.api = api;
        this.empty = false;
        this.topRated = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                data = this.api.getData('sort_resources/?rating=True');
                data.subscribe(function (res) {
                    console.log(res);
                    if (res.length == 0) {
                        _this.empty = true;
                    }
                    else {
                        _this.data = res;
                    }
                });
                return [2 /*return*/];
            });
        }); };
        this.saveLink = function (id) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                data = this.api.getData("save_resource?rsc_id=" + id);
                data.subscribe(function (res) {
                    console.log(res);
                    // this.data = res
                });
                return [2 /*return*/];
            });
        }); };
    }
    TopRatedComponent.prototype.ngOnInit = function () {
        this.topRated();
    };
    TopRatedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-rated',
            template: __webpack_require__(/*! ./top-rated.component.html */ "./src/app/top-rated/top-rated.component.html"),
            styles: [__webpack_require__(/*! ./top-rated.component.css */ "./src/app/top-rated/top-rated.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], TopRatedComponent);
    return TopRatedComponent;
}());



/***/ }),

/***/ "./src/app/topics/topics.component.css":
/*!*********************************************!*\
  !*** ./src/app/topics/topics.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcGljcy90b3BpY3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/topics/topics.component.html":
/*!**********************************************!*\
  !*** ./src/app/topics/topics.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex pb-5\"> \n  <div class=\"col-md-12 pt-4\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n          <div class=\"card col-md-3\" *ngFor=\"let topic of data\">\n              <div class=\"card-block pt-3\">\n                      <a [routerLink]=\"['/sub-topics']\" [queryParams]=\"{ subcat: subcat,lvl:lvl,topic:topic.id}\"><img src=\"assets\\images\\folder.jpg\" width=\"100%\"></a>\n                  <div>\n                      <h4>{{topic.title}}</h4>\n                  </div>\n              </div>                   \n          </div>     \n          <div class=\"not_found\" *ngIf='empty'>\n            <img src=\"assets/images/not-found.png\" alt=\"\">\n        </div>   \n        </div> \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/topics/topics.component.ts":
/*!********************************************!*\
  !*** ./src/app/topics/topics.component.ts ***!
  \********************************************/
/*! exports provided: TopicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsComponent", function() { return TopicsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




var TopicsComponent = /** @class */ (function () {
    function TopicsComponent(route, api) {
        this.route = route;
        this.api = api;
        this.empty = false;
        this.levels = [
            {
                lev: '1',
            },
            {
                lev: '2',
            },
            {
                lev: '3',
            }
        ];
        this.query = this.route.queryParams;
        this.subcat = this.query._value.subcat;
        this.lvl = this.query._value.lvl;
    }
    TopicsComponent.prototype.ngOnInit = function () {
        this.getTopics();
    };
    TopicsComponent.prototype.getTopics = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getData("get_topic_by_sub_level/?sub_id=" + this.subcat + "&lev_id=" + this.lvl)];
                    case 1:
                        data = _a.sent();
                        data.subscribe(function (res) {
                            console.log(res);
                            if (res.length == 0) {
                                _this.empty = true;
                            }
                            else {
                                _this.data = res;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TopicsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topics',
            template: __webpack_require__(/*! ./topics.component.html */ "./src/app/topics/topics.component.html"),
            styles: [__webpack_require__(/*! ./topics.component.css */ "./src/app/topics/topics.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], TopicsComponent);
    return TopicsComponent;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAFWbyKlrns5T2BTzHDHeXBoaw93EwZg0k",
        authDomain: "ruangilmu-b77f3.firebaseapp.com",
        databaseURL: "https://ruangilmu-b77f3.firebaseio.com",
        projectId: "ruangilmu-b77f3",
        storageBucket: "ruangilmu-b77f3.appspot.com",
        messagingSenderId: "347312724723",
        appId: "1:347312724723:web:792f93c0054c32c33d3586",
        measurementId: "G-WMV76R3JM7"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\resource\Resource-Management\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map