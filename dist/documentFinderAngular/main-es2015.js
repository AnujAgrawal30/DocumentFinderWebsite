(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<div class=\"center\">\n    <h1>Enter the path of the directory where the files are saved</h1>\n    <h6>For eg: C:\\Users\\Default\\Documents</h6>\n</div>\n<div class=\"center\">\n    <input type=\"text\" #train (keyup.enter)=\"trainPath(train.value)\">\n    <button (click)=\"trainPath(train.value)\">Submit</button>\n    <button (click)=\"goBack()\">Go Back</button>\n</div>\n<div class=\"center\" *ngIf=\"loading\">\n    <div class=\"lds-circle\"><div></div></div>\n</div>\n<div class=\"center\" *ngIf=\"done\">\n    <p>Done</p>\n</div>\n\n<div class=\"center\">\n    <h1>Enter the path of the .db file where the data is stored</h1>\n    <h6>For eg: C:\\Users\\Default\\Documents\\database.db</h6>\n</div>\n<div class=\"center\">\n    <input type=\"text\" #train (keyup.enter)=\"trainPathDB(train.value)\">\n    <button (click)=\"trainPathDB(train.value)\">Submit</button>\n    <button (click)=\"goBack()\">Go Back</button>\n</div>\n<div class=\"center\" *ngIf=\"loadingDB\">\n    <div class=\"lds-circle\"><div></div></div>\n</div>\n<div class=\"center\" *ngIf=\"doneDB\">\n    <p>Done</p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- main app container -->\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n<!-- credits -->\n<!-- <div class=\"text-center mt-4\">\n  <p>\n      <a href=\"https://jasonwatmore.com/post/2019/06/22/angular-8-jwt-authentication-example-tutorial\" target=\"_top\">Angular 8 - JWT Authentication Example & Tutorial</a>\n  </p>\n  <p>\n      <a href=\"http://jasonwatmore.com\" target=\"_top\">JasonWatmore.com</a>\n  </p>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div ><button (click)='addDirectory()'>Add a directory</button></div>\n<div><button (click)='searchKeyword()'>Search for Files</button></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<div class=\"center\">\n    <h1>Search for a keyword to search the files</h1>\n    <input type=\"text\" #search (keyup.enter)=\"sendMsg(search.value)\">\n    <button (click)=\"goBack()\">Go Back</button>\n</div>\n<h2 *ngIf=\"results\">Results:</h2>\n<h2 *ngIf='noResultFound' class=\"error\">No Results Found, Please try some other keyword</h2>\n<div *ngFor=\"let item of results\" class=\"w3-container\" >\n        <span (click)=\"goTo(item.id)\">\n            <ul class=\"w3-ul w3-card-4 w3-white\">\n            <li class=\"w3-padding-16\">\n                <span class=\"w3-medium\">Name: {{item.name}}{{item.type}}</span><br>\n            </li>\n            <li class=\"w3-padding-16\">\n                <span class=\"w3-small\">Text: {{item.text}}</span><br>\n            </li>\n            <li class=\"w3-padding-16\" >\n                <span class=\"w3-small\" >Tags: {{item.tags}}</span><br>\n            </li>\n            <li class=\"w3-padding-16\">\n                <span class=\"w3-small\">Path: {{item.path}}</span><br>\n            </li>\n            </ul>\n        </span>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tag/tag.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tag/tag.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<div class=\"center\">\n    <div class=\"lds-circle\" *ngIf=\"!fileInfo\"><div></div></div>\n\n    <div *ngIf=\"fileInfo\" class=\"center\">\n        <h3> {{this.fileInfo.name}}{{this.fileInfo.type}} </h3>\n        <p class=\"text\"> Text: {{this.fileInfo.text}} </p>\n        <p > Path: {{this.fileInfo.path}} </p>\n        <p > Tags: {{this.fileInfo.tags}} </p>\n\n\n        <div class=\"dropdown\" >\n            <p>\n                Add Tags: \n                <input type=\"text\" #tag (keyup.enter)=\"addTag(tag.value, this.fileInfo)\">\n                <button (click)=\"addTag(tag.value, this.fileInfo)\">Submit</button>\n                <button (click)=\"goBack()\">Go Back</button>\n            </p>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/add/add.component.css":
/*!***************************************!*\
  !*** ./src/app/add/add.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\r\n    /* padding-top: 5%; */\r\n    /* margin-top: 300px; */\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: 100px;\r\n    margin: 0 auto;\r\n    /* align-items: center; */\r\n}\r\n\r\n/* h6 {\r\n    margin: 0 auto;\r\n} */\r\n\r\n/* .center :hover{\r\n    background-color: rgb(71, 146, 245);\r\n    cursor: pointer;\r\n} */\r\n\r\ninput[type=text], select {\r\n    /* width: 50%; */\r\n    /* padding: 12px 20px; */\r\n    /* margin: 8px 0; */\r\n    margin-top: 20px    ;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n  }\r\n\r\nbutton {\r\n    /* position: absolute; */\r\n    /* left: 50%; */\r\n    /* padding: 50px; */\r\n    background-color: skyblue;\r\n    margin-left: 30px;\r\n    /* padding: 5%; */\r\n    border: none;\r\n    border-radius: 5px;\r\n    color: white;\r\n    font-size: 1.5rem;\r\n    font-family: 'Prata';\r\n    letter-spacing: 2px;\r\n  }\r\n\r\nbutton:hover{\r\n    background-color: rgb(71, 146, 245);\r\n    cursor: pointer;\r\n  }\r\n\r\np {\r\n      color: green;\r\n  }\r\n\r\n.lds-circle {\r\n    display: inline-block;\r\n    -webkit-transform: translateZ(1px);\r\n            transform: translateZ(1px);\r\n  }\r\n\r\n.lds-circle > div {\r\n    display: inline-block;\r\n    width: 64px;\r\n    height: 64px;\r\n    margin: 8px;\r\n    border-radius: 50%;\r\n    background: #8dfbff;\r\n    -webkit-animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;\r\n            animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;\r\n  }\r\n\r\n@-webkit-keyframes lds-circle {\r\n    0%, 100% {\r\n      -webkit-animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\r\n              animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\r\n    }\r\n    0% {\r\n      -webkit-transform: rotateY(0deg);\r\n              transform: rotateY(0deg);\r\n    }\r\n    50% {\r\n      -webkit-transform: rotateY(1800deg);\r\n              transform: rotateY(1800deg);\r\n      -webkit-animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\r\n              animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotateY(3600deg);\r\n              transform: rotateY(3600deg);\r\n    }\r\n  }\r\n\r\n@keyframes lds-circle {\r\n    0%, 100% {\r\n      -webkit-animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\r\n              animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\r\n    }\r\n    0% {\r\n      -webkit-transform: rotateY(0deg);\r\n              transform: rotateY(0deg);\r\n    }\r\n    50% {\r\n      -webkit-transform: rotateY(1800deg);\r\n              transform: rotateY(1800deg);\r\n      -webkit-animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\r\n              animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotateY(3600deg);\r\n              transform: rotateY(3600deg);\r\n    }\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkL2FkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTs7R0FFRzs7QUFFSDs7O0dBR0c7O0FBR0g7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxtQ0FBbUM7SUFDbkMsZUFBZTtFQUNqQjs7QUFFQTtNQUNJLFlBQVk7RUFDaEI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsa0NBQTBCO1lBQTFCLDBCQUEwQjtFQUM1Qjs7QUFDQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdFQUFnRTtZQUFoRSxnRUFBZ0U7RUFDbEU7O0FBQ0E7SUFDRTtNQUNFLCtEQUF1RDtjQUF2RCx1REFBdUQ7SUFDekQ7SUFDQTtNQUNFLGdDQUF3QjtjQUF4Qix3QkFBd0I7SUFDMUI7SUFDQTtNQUNFLG1DQUEyQjtjQUEzQiwyQkFBMkI7TUFDM0IsK0RBQXVEO2NBQXZELHVEQUF1RDtJQUN6RDtJQUNBO01BQ0UsbUNBQTJCO2NBQTNCLDJCQUEyQjtJQUM3QjtFQUNGOztBQWRBO0lBQ0U7TUFDRSwrREFBdUQ7Y0FBdkQsdURBQXVEO0lBQ3pEO0lBQ0E7TUFDRSxnQ0FBd0I7Y0FBeEIsd0JBQXdCO0lBQzFCO0lBQ0E7TUFDRSxtQ0FBMkI7Y0FBM0IsMkJBQTJCO01BQzNCLCtEQUF1RDtjQUF2RCx1REFBdUQ7SUFDekQ7SUFDQTtNQUNFLG1DQUEyQjtjQUEzQiwyQkFBMkI7SUFDN0I7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkZC9hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gICAgLyogcGFkZGluZy10b3A6IDUlOyAqL1xyXG4gICAgLyogbWFyZ2luLXRvcDogMzAwcHg7ICovXHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG59XHJcblxyXG4vKiBoNiB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufSAqL1xyXG5cclxuLyogLmNlbnRlciA6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDE0NiwgMjQ1KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSAqL1xyXG5cclxuXHJcbmlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCB7XHJcbiAgICAvKiB3aWR0aDogNTAlOyAqL1xyXG4gICAgLyogcGFkZGluZzogMTJweCAyMHB4OyAqL1xyXG4gICAgLyogbWFyZ2luOiA4cHggMDsgKi9cclxuICAgIG1hcmdpbi10b3A6IDIwcHggICAgO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gICAgLyogbGVmdDogNTAlOyAqL1xyXG4gICAgLyogcGFkZGluZzogNTBweDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIC8qIHBhZGRpbmc6IDUlOyAqL1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogJ1ByYXRhJztcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgfVxyXG5cclxuICBidXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDE0NiwgMjQ1KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgICBjb2xvcjogZ3JlZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5sZHMtY2lyY2xlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxcHgpO1xyXG4gIH1cclxuICAubGRzLWNpcmNsZSA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogIzhkZmJmZjtcclxuICAgIGFuaW1hdGlvbjogbGRzLWNpcmNsZSAyLjRzIGN1YmljLWJlemllcigwLCAwLjIsIDAuOCwgMSkgaW5maW5pdGU7XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgbGRzLWNpcmNsZSB7XHJcbiAgICAwJSwgMTAwJSB7XHJcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjUsIDAsIDEsIDAuNSk7XHJcbiAgICB9XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODAwZGVnKTtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAsIDAuNSwgMC41LCAxKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMzYwMGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _network_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../network-calls.service */ "./src/app/network-calls.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let AddComponent = class AddComponent {
    constructor(network_service, _location) {
        this.network_service = network_service;
        this._location = _location;
        this.loading = false;
        this.done = false;
        this.loadingDB = false;
        this.doneDB = false;
    }
    ngOnInit() {
    }
    goBack() {
        this._location.back();
    }
    trainPath(path) {
        this.loading = true;
        this.done = false;
        console.log(path);
        this.network_service.addTrainPath(path)
            .subscribe(data => {
            console.log(data);
            this.loading = false;
            this.done = true;
        });
    }
    trainPathDB(path) {
        this.loadingDB = true;
        this.doneDB = false;
        console.log(path);
        this.network_service.addTrainPathDB(path)
            .subscribe(data => {
            console.log(data);
            this.loadingDB = false;
            this.doneDB = true;
        });
    }
};
AddComponent.ctorParameters = () => [
    { type: _network_calls_service__WEBPACK_IMPORTED_MODULE_2__["NetworkCallsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add.component.css */ "./src/app/add/add.component.css")).default]
    })
], AddComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _tag_tag_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tag/tag.component */ "./src/app/tag/tag.component.ts");







const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: "search", component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] },
    { path: "add", component: _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"] },
    { path: "file/:id", component: _tag_tag_component__WEBPACK_IMPORTED_MODULE_6__["TagComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'documentFinderAngular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _tag_tag_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tag/tag.component */ "./src/app/tag/tag.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
            _add_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _tag_tag_component__WEBPACK_IMPORTED_MODULE_9__["TagComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["APP_BASE_HREF"], useValue: '/' },
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_10__["HashLocationStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nbutton {\r\n    /* position: absolute; */\r\n    /* left: 50%; */\r\n    /* padding: 50px; */\r\n    background-color: skyblue;\r\n    margin-top: 30px;\r\n    padding: 5%;\r\n    border: none;\r\n    border-radius: 40px;\r\n    color: white;\r\n    font-size: 2rem;\r\n    font-family: 'Prata';\r\n    letter-spacing: 2px;\r\n  }\r\n\r\ndiv {\r\n    /* padding-top: 5%; */\r\n    /* margin-top: 300px; */\r\n    width: 300px;\r\n    height: 100px;\r\n    margin: 0 auto;\r\n}\r\n\r\ndiv :hover{\r\n    background-color: rgb(71, 146, 245);\r\n    cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixtQkFBbUI7RUFDckI7O0FBRUY7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYnV0dG9uIHtcclxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuICAgIC8qIGxlZnQ6IDUwJTsgKi9cclxuICAgIC8qIHBhZGRpbmc6IDUwcHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJhdGEnO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICB9XHJcblxyXG5kaXYge1xyXG4gICAgLyogcGFkZGluZy10b3A6IDUlOyAqL1xyXG4gICAgLyogbWFyZ2luLXRvcDogMzAwcHg7ICovXHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbmRpdiA6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDE0NiwgMjQ1KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    addDirectory() {
        this.router.navigateByUrl('/add');
    }
    searchKeyword() {
        this.router.navigateByUrl('/search');
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/network-calls.service.ts":
/*!******************************************!*\
  !*** ./src/app/network-calls.service.ts ***!
  \******************************************/
/*! exports provided: NetworkCallsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkCallsService", function() { return NetworkCallsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let NetworkCallsService = class NetworkCallsService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = "http://127.0.0.1:8000";
    }
    getSearchResults(query, method) {
        return this.http.get(this.BASE_URL + '/search', { params: {
                query: query,
                method: method
            } });
    }
    addTrainPath(path) {
        return this.http.get(this.BASE_URL + '/train', { params: {
                path: path,
            } });
    }
    addTrainPathDB(path) {
        return this.http.get(this.BASE_URL + '/train', { params: {
                path: path,
            } });
    }
    getFileInfo(id) {
        return this.http.get(this.BASE_URL + "/file", { params: {
                id: id.toString(),
            } });
    }
    test() {
        this.http.get(this.BASE_URL)
            .subscribe(data => {
            console.log(data);
        });
    }
    addTag(tag, filepath) {
        return this.http.post(this.BASE_URL + '/tags', {
            filepath: filepath,
            tags: tag,
        });
    }
};
NetworkCallsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
NetworkCallsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NetworkCallsService);



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\r\n    padding: 10px;\r\n    margin-right: 50px;\r\n    margin-left: 20px;\r\n}\r\nh2 {\r\n    align-content: center;\r\n    padding-left: 50px;\r\n}\r\ninput[type='radio']:checked + label .swanky_wrapper__content{\r\n    display: block;\r\n    top: 68px;\r\n    border-bottom: 1px solid rgb(33, 46, 65);\r\n}\r\n.center {\r\n  /* padding-top: 5%; */\r\n  /* margin-top: 300px; */\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  /* height: 100px; */\r\n  margin: 0 auto;\r\n  /* align-items: center; */\r\n}\r\n.error {\r\n  color: red;\r\n}\r\nbutton {\r\n  /* position: absolute; */\r\n  /* left: 50%; */\r\n  /* padding: 50px; */\r\n  background-color: skyblue;\r\n  margin-left: 30px;\r\n  /* padding: 5%; */\r\n  border: none;\r\n  border-radius: 5px;\r\n  color: white;\r\n  font-size: 1.5rem;\r\n  font-family: 'Prata';\r\n  letter-spacing: 2px;\r\n}\r\nbutton:hover{\r\n  background-color: rgb(71, 146, 245);\r\n  cursor: pointer;\r\n}\r\n.lds-circle {\r\n  display: inline-block;\r\n  -webkit-transform: translateZ(1px);\r\n          transform: translateZ(1px);\r\n}\r\n.lds-circle > div {\r\n  display: inline-block;\r\n  width: 64px;\r\n  height: 64px;\r\n  margin: 8px;\r\n  border-radius: 50%;\r\n  background: #8dfbff;\r\n  -webkit-animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;\r\n          animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;\r\n}\r\n@-webkit-keyframes lds-circle {\r\n  0%, 100% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\r\n            animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\r\n  }\r\n  0% {\r\n    -webkit-transform: rotateY(0deg);\r\n            transform: rotateY(0deg);\r\n  }\r\n  50% {\r\n    -webkit-transform: rotateY(1800deg);\r\n            transform: rotateY(1800deg);\r\n    -webkit-animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\r\n            animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotateY(3600deg);\r\n            transform: rotateY(3600deg);\r\n  }\r\n}\r\n@keyframes lds-circle {\r\n  0%, 100% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\r\n            animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\r\n  }\r\n  0% {\r\n    -webkit-transform: rotateY(0deg);\r\n            transform: rotateY(0deg);\r\n  }\r\n  50% {\r\n    -webkit-transform: rotateY(1800deg);\r\n            transform: rotateY(1800deg);\r\n    -webkit-animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\r\n            animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotateY(3600deg);\r\n            transform: rotateY(3600deg);\r\n  }\r\n}\r\ninput[type=text], select {\r\n    /* width: 50%; */\r\n    /* padding: 12px 20px; */\r\n    /* margin: 8px 0; */\r\n    margin-top: 20px    ;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFHQTtJQUNJLGNBQWM7SUFDZCxTQUFTO0lBQ1Qsd0NBQXdDO0FBQzVDO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsZUFBZTtBQUNqQjtBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHdFQUFnRTtVQUFoRSxnRUFBZ0U7QUFDbEU7QUFDQTtFQUNFO0lBQ0UsK0RBQXVEO1lBQXZELHVEQUF1RDtFQUN6RDtFQUNBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQiwrREFBdUQ7WUFBdkQsdURBQXVEO0VBQ3pEO0VBQ0E7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0VBQzdCO0FBQ0Y7QUFkQTtFQUNFO0lBQ0UsK0RBQXVEO1lBQXZELHVEQUF1RDtFQUN6RDtFQUNBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQiwrREFBdUQ7WUFBdkQsdURBQXVEO0VBQ3pEO0VBQ0E7SUFDRSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0VBQzdCO0FBQ0Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbmgyIHtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxufVxyXG5cclxuXHJcbmlucHV0W3R5cGU9J3JhZGlvJ106Y2hlY2tlZCArIGxhYmVsIC5zd2Fua3lfd3JhcHBlcl9fY29udGVudHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdG9wOiA2OHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigzMywgNDYsIDY1KTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgLyogcGFkZGluZy10b3A6IDUlOyAqL1xyXG4gIC8qIG1hcmdpbi10b3A6IDMwMHB4OyAqL1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAvKiBoZWlnaHQ6IDEwMHB4OyAqL1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgLyogbGVmdDogNTAlOyAqL1xyXG4gIC8qIHBhZGRpbmc6IDUwcHg7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAvKiBwYWRkaW5nOiA1JTsgKi9cclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LWZhbWlseTogJ1ByYXRhJztcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcblxyXG5idXR0b246aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcxLCAxNDYsIDI0NSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4gIFxyXG4ubGRzLWNpcmNsZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxcHgpO1xyXG59XHJcbi5sZHMtY2lyY2xlID4gZGl2IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIG1hcmdpbjogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjOGRmYmZmO1xyXG4gIGFuaW1hdGlvbjogbGRzLWNpcmNsZSAyLjRzIGN1YmljLWJlemllcigwLCAwLjIsIDAuOCwgMSkgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyBsZHMtY2lyY2xlIHtcclxuICAwJSwgMTAwJSB7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41LCAwLCAxLCAwLjUpO1xyXG4gIH1cclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwMGRlZyk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjAwZGVnKTtcclxuICB9XHJcbn1cclxuaW5wdXRbdHlwZT10ZXh0XSwgc2VsZWN0IHtcclxuICAgIC8qIHdpZHRoOiA1MCU7ICovXHJcbiAgICAvKiBwYWRkaW5nOiAxMnB4IDIwcHg7ICovXHJcbiAgICAvKiBtYXJnaW46IDhweCAwOyAqL1xyXG4gICAgbWFyZ2luLXRvcDogMjBweCAgICA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _network_calls_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../network-calls.service */ "./src/app/network-calls.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let SearchComponent = class SearchComponent {
    constructor(http, network_service, _location, router) {
        this.http = http;
        this.network_service = network_service;
        this._location = _location;
        this.router = router;
        this.noResultFound = false;
    }
    ngOnInit() {
    }
    sendMsg(query) {
        console.log(query);
        this.noResultFound = false;
        this.results = [];
        this.network_service.getSearchResults(query, 'name').subscribe(data => {
            // console.log(data.length);
            if (data.length == 0) {
                this.noResultFound = true;
            }
            data.forEach(item => {
                this.results.push(item);
            });
        });
        console.log("Sent request for name");
        this.network_service.getSearchResults(query, 'tag').subscribe(data => {
            data.forEach(item => {
                if (this.results.find(this.listEqual, item.path)) {
                    return;
                }
                ;
                this.results.push(item);
            });
        });
        console.log("Sent request for tag");
        this.network_service.getSearchResults(query, 'text').subscribe(data => {
            data.forEach(item => {
                if (this.results.find(this.listEqual, item.path)) {
                    return;
                }
                ;
                this.results.push(item);
            });
        });
        console.log("Sent request for text");
        this.network_service.getSearchResults(query, 'similar').subscribe(data => {
            console.log(data.length);
            data.forEach(item => {
                this.results.push(item);
            });
        });
    }
    listEqual(value) {
        if (value.path == this.toString()) {
            return true;
        }
        return false;
    }
    goBack() {
        this._location.back();
    }
    goTo(id) {
        console.log(id);
        this.router.navigate(['/file', id]);
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _network_calls_service__WEBPACK_IMPORTED_MODULE_3__["NetworkCallsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/tag/tag.component.css":
/*!***************************************!*\
  !*** ./src/app/tag/tag.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\r\n    margin: 0 auto;\r\n    margin-top: 50px;\r\n    text-align: center;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\nh3 {\r\n    font-weight: bold;\r\n}\r\n\r\n.text {\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n    height: 500px;\r\n    overflow-y: scroll;\r\n    border-width: 1px;\r\n    border-radius: 4px;\r\n    border-style: solid;\r\n    border-color: black;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\ninput[type=text], select {\r\n    /* width: 50%; */\r\n    /* padding: 12px 20px; */\r\n    /* margin: 8px 0; */\r\n    margin-top: 20px    ;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n  }\r\n\r\nbutton {\r\n    background-color: skyblue;\r\n    margin-left: 30px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    color: white;\r\n    font-size: 1.5rem;\r\n    font-family: 'Prata';\r\n    letter-spacing: 2px;\r\n  }\r\n\r\nbutton:hover{\r\n    background-color: rgb(71, 146, 245);\r\n    cursor: pointer;\r\n  }\r\n\r\n.lds-circle {\r\n    display: inline-block;\r\n    -webkit-transform: translateZ(1px);\r\n            transform: translateZ(1px);\r\n  }\r\n\r\n.lds-circle > div {\r\n    display: inline-block;\r\n    width: 64px;\r\n    height: 64px;\r\n    border-radius: 50%;\r\n    background: #8dfbff;\r\n    -webkit-animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;\r\n            animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;\r\n  }\r\n\r\n@-webkit-keyframes lds-circle {\r\n    0%, 100% {\r\n      -webkit-animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\r\n              animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\r\n    }\r\n    0% {\r\n      -webkit-transform: rotateY(0deg);\r\n              transform: rotateY(0deg);\r\n    }\r\n    50% {\r\n      -webkit-transform: rotateY(1800deg);\r\n              transform: rotateY(1800deg);\r\n      -webkit-animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\r\n              animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotateY(3600deg);\r\n              transform: rotateY(3600deg);\r\n    }\r\n  }\r\n\r\n@keyframes lds-circle {\r\n    0%, 100% {\r\n      -webkit-animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\r\n              animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\r\n    }\r\n    0% {\r\n      -webkit-transform: rotateY(0deg);\r\n              transform: rotateY(0deg);\r\n    }\r\n    50% {\r\n      -webkit-transform: rotateY(1800deg);\r\n              transform: rotateY(1800deg);\r\n      -webkit-animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\r\n              animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotateY(3600deg);\r\n              transform: rotateY(3600deg);\r\n    }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFnL3RhZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLG1DQUFtQztJQUNuQyxlQUFlO0VBQ2pCOztBQUVGO0lBQ0kscUJBQXFCO0lBQ3JCLGtDQUEwQjtZQUExQiwwQkFBMEI7RUFDNUI7O0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHdFQUFnRTtZQUFoRSxnRUFBZ0U7RUFDbEU7O0FBQ0E7SUFDRTtNQUNFLCtEQUF1RDtjQUF2RCx1REFBdUQ7SUFDekQ7SUFDQTtNQUNFLGdDQUF3QjtjQUF4Qix3QkFBd0I7SUFDMUI7SUFDQTtNQUNFLG1DQUEyQjtjQUEzQiwyQkFBMkI7TUFDM0IsK0RBQXVEO2NBQXZELHVEQUF1RDtJQUN6RDtJQUNBO01BQ0UsbUNBQTJCO2NBQTNCLDJCQUEyQjtJQUM3QjtFQUNGOztBQWRBO0lBQ0U7TUFDRSwrREFBdUQ7Y0FBdkQsdURBQXVEO0lBQ3pEO0lBQ0E7TUFDRSxnQ0FBd0I7Y0FBeEIsd0JBQXdCO0lBQzFCO0lBQ0E7TUFDRSxtQ0FBMkI7Y0FBM0IsMkJBQTJCO01BQzNCLCtEQUF1RDtjQUF2RCx1REFBdUQ7SUFDekQ7SUFDQTtNQUNFLG1DQUEyQjtjQUEzQiwyQkFBMkI7SUFDN0I7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3RhZy90YWcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlucHV0W3R5cGU9dGV4dF0sIHNlbGVjdCB7XHJcbiAgICAvKiB3aWR0aDogNTAlOyAqL1xyXG4gICAgLyogcGFkZGluZzogMTJweCAyMHB4OyAqL1xyXG4gICAgLyogbWFyZ2luOiA4cHggMDsgKi9cclxuICAgIG1hcmdpbi10b3A6IDIwcHggICAgO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LWZhbWlseTogJ1ByYXRhJztcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgfVxyXG5cclxuICBidXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDE0NiwgMjQ1KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4ubGRzLWNpcmNsZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMXB4KTtcclxuICB9XHJcbiAgLmxkcy1jaXJjbGUgPiBkaXYge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOGRmYmZmO1xyXG4gICAgYW5pbWF0aW9uOiBsZHMtY2lyY2xlIDIuNHMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBsZHMtY2lyY2xlIHtcclxuICAgIDAlLCAxMDAlIHtcclxuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNSwgMCwgMSwgMC41KTtcclxuICAgIH1cclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MDBkZWcpO1xyXG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjAwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/tag/tag.component.ts":
/*!**************************************!*\
  !*** ./src/app/tag/tag.component.ts ***!
  \**************************************/
/*! exports provided: TagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _network_calls_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../network-calls.service */ "./src/app/network-calls.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let TagComponent = class TagComponent {
    constructor(route, network_service, _location) {
        this.route = route;
        this.network_service = network_service;
        this._location = _location;
    }
    ngOnInit() {
        this.sub = this.route.params
            .subscribe(params => {
            this.id = +params['id'];
        });
        this.network_service.getFileInfo(this.id)
            .subscribe(response => {
            this.fileInfo = response;
        });
    }
    getInfo() {
        this.network_service.getFileInfo(this.id)
            .subscribe(response => {
            console.log(response);
            this.fileInfo = response;
        });
    }
    addTag(tag, item) {
        this.network_service.addTag(tag, item.path)
            .subscribe(response => {
            if (response) {
                this.fileInfo.tags += " " + tag;
                console.log("Tag added successfully");
            }
            else {
                console.log("Failed due to response: " + response);
            }
        });
    }
    goBack() {
        this._location.back();
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
TagComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _network_calls_service__WEBPACK_IMPORTED_MODULE_3__["NetworkCallsService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
TagComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tag',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tag.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tag/tag.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tag.component.css */ "./src/app/tag/tag.component.css")).default]
    })
], TagComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\anuj\Desktop\Python\DocumentFinder\documentFinderAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map