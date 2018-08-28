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
/* harmony import */ var _core_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _ui_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/user-login/user-login.component */ "./src/app/ui/user-login/user-login.component.ts");
/* harmony import */ var _ui_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/home-page/home-page.component */ "./src/app/ui/home-page/home-page.component.ts");
/* harmony import */ var _notes_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notes/notes-list/notes-list.component */ "./src/app/notes/notes-list/notes-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _ui_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'login', component: _ui_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_3__["UserLoginComponent"] },
    { path: 'notes', component: _notes_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_5__["NotesListComponent"], canActivate: [_core_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\" class=\"content\">\n  <main-nav></main-nav>\n\n  <div class=\"columns\">\n    <aside class=\"column is-2 is-offset-1\">\n      <user-profile></user-profile>\n    </aside>\n\n    <main class=\"column is-8\">\n      <notification-message></notification-message>\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _notes_notes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notes/notes.module */ "./src/app/notes/notes.module.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_functions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2/functions */ "./node_modules/angularfire2/functions/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Accountability App Modules



// AngularFire2 Modules





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_7__["UiModule"],
                _notes_notes_module__WEBPACK_IMPORTED_MODULE_8__["NotesModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase, 'accountability'),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"],
                angularfire2_functions__WEBPACK_IMPORTED_MODULE_13__["AngularFireFunctionsModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('/ngsw-worker.js', {
                    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
                })
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/core/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notify.service */ "./src/app/core/notify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router, notify) {
        this.auth = auth;
        this.router = router;
        this.notify = notify;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) { return !!user; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (loggedIn) {
            if (!loggedIn) {
                console.log('access denied');
                _this.notify.update('You must be logged in!', 'error');
                _this.router.navigate(['/login']);
            }
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _notify_service__WEBPACK_IMPORTED_MODULE_4__["NotifyService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notify.service */ "./src/app/core/notify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs, router, notify) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.notify = notify;
        this.user = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
            }
        })
        // tap(user => localStorage.setItem('user', JSON.stringify(user))),
        // startWith(JSON.parse(localStorage.getItem('user')))
        );
    }
    AuthService.prototype.googleLogin = function () {
        var provider = new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth
            .signInWithPopup(provider)
            .then(function (credential) {
            _this.notify.update('Welcome to Accountability!', 'success');
            return _this.updateUserData(credential.user);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    //// Email/Password Auth ////
    AuthService.prototype.emailSignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (credential) {
            _this.notify.update('Welcome to Accountability!', 'success');
            return _this.updateUserData(credential.user); // if using firestore
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    AuthService.prototype.emailLogin = function (email, password) {
        var _this = this;
        return this.afAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(function (credential) {
            _this.notify.update('Welcome back!', 'success');
            return _this.updateUserData(credential.user);
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    // Sends email allowing user to reset password
    AuthService.prototype.resetPassword = function (email) {
        var _this = this;
        var fbAuth = Object(firebase__WEBPACK_IMPORTED_MODULE_2__["auth"])();
        return fbAuth
            .sendPasswordResetEmail(email)
            .then(function () { return _this.notify.update('Password update email sent', 'info'); })
            .catch(function (error) { return _this.handleError(error); });
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/']);
        });
    };
    // If error, console log and notify user
    AuthService.prototype.handleError = function (error) {
        console.error(error);
        this.notify.update(error.message, 'error');
    };
    // Sets user data to firestore after succesful login
    AuthService.prototype.updateUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email || null,
            displayName: user.displayName || 'nameless user',
            photoURL: user.photoURL || 'https://goo.gl/Fz9nrQ'
        };
        return userRef.set(data);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.guard */ "./src/app/core/auth.guard.ts");
/* harmony import */ var _notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify.service */ "./src/app/core/notify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/notify.service.ts":
/*!****************************************!*\
  !*** ./src/app/core/notify.service.ts ***!
  \****************************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NotifyService = /** @class */ (function () {
    function NotifyService() {
        this._msgSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.msg = this._msgSource.asObservable();
    }
    NotifyService.prototype.update = function (content, style) {
        var msg = { content: content, style: style };
        this._msgSource.next(msg);
    };
    NotifyService.prototype.clear = function () {
        this._msgSource.next(null);
    };
    NotifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NotifyService);
    return NotifyService;
}());



/***/ }),

/***/ "./src/app/notes/note-detail/note-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/notes/note-detail/note-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-note\">\n    <h3>{{ note.content }}</h3>\n    <span class=\"button is-small is-info\" (click)='addHeartToNote(note.hearts)'>\n    Heart <i class=\"fa fa-heart\" style=\"margin-left: 5px;\"></i>\n  </span>\n    <span class=\"button is-small is-danger\" (click)='deleteNote(note?.id)'>Delete</span>\n    <p>This note has been hearted {{ note.hearts || 0 }} times.</p>\n</div>"

/***/ }),

/***/ "./src/app/notes/note-detail/note-detail.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/notes/note-detail/note-detail.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".basic-note {\n  visibility: visible; }\n"

/***/ }),

/***/ "./src/app/notes/note-detail/note-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/notes/note-detail/note-detail.component.ts ***!
  \************************************************************/
/*! exports provided: NoteDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteDetailComponent", function() { return NoteDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notes.service */ "./src/app/notes/notes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoteDetailComponent = /** @class */ (function () {
    function NoteDetailComponent(notesService) {
        this.notesService = notesService;
    }
    NoteDetailComponent.prototype.addHeartToNote = function (val) {
        if (this.note.id) {
            this.notesService.updateNote(this.note.id, { hearts: val + 1 });
        }
        else {
            console.error('Note missing ID!');
        }
    };
    NoteDetailComponent.prototype.deleteNote = function (id) {
        this.notesService.deleteNote(id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NoteDetailComponent.prototype, "note", void 0);
    NoteDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'note-detail',
            template: __webpack_require__(/*! ./note-detail.component.html */ "./src/app/notes/note-detail/note-detail.component.html"),
            styles: [__webpack_require__(/*! ./note-detail.component.scss */ "./src/app/notes/note-detail/note-detail.component.scss")],
        }),
        __metadata("design:paramtypes", [_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"]])
    ], NoteDetailComponent);
    return NoteDetailComponent;
}());



/***/ }),

/***/ "./src/app/notes/notes-list/notes-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/notes/notes-list/notes-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Notes</h1>\n<input [(ngModel)]=\"content\" placeholder=\"Add your own note\" class=\"input\" name=\"note\">\n\n\n<button class=\"button is-success\" (click)=\"clickHandler()\" [disabled]=\"content?.length < 2 || content?.length > 200\">\n  Add Note\n</button>\n<hr>\n<div *ngFor=\"let note of notes | async\">\n    <note-detail [note]=\"note\"></note-detail>\n</div>"

/***/ }),

/***/ "./src/app/notes/notes-list/notes-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/notes/notes-list/notes-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notes/notes-list/notes-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/notes/notes-list/notes-list.component.ts ***!
  \**********************************************************/
/*! exports provided: NotesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesListComponent", function() { return NotesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notes.service */ "./src/app/notes/notes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotesListComponent = /** @class */ (function () {
    function NotesListComponent(notesService) {
        this.notesService = notesService;
    }
    NotesListComponent.prototype.ngOnInit = function () {
        this.notes = this.notesService.getData();
    };
    NotesListComponent.prototype.clickHandler = function () {
        this.notesService.createNote(this.content);
        this.content = '';
    };
    NotesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'notes-list',
            template: __webpack_require__(/*! ./notes-list.component.html */ "./src/app/notes/notes-list/notes-list.component.html"),
            styles: [__webpack_require__(/*! ./notes-list.component.scss */ "./src/app/notes/notes-list/notes-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_notes_service__WEBPACK_IMPORTED_MODULE_1__["NotesService"]])
    ], NotesListComponent);
    return NotesListComponent;
}());



/***/ }),

/***/ "./src/app/notes/notes.module.ts":
/*!***************************************!*\
  !*** ./src/app/notes/notes.module.ts ***!
  \***************************************/
/*! exports provided: NotesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesModule", function() { return NotesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notes-list/notes-list.component */ "./src/app/notes/notes-list/notes-list.component.ts");
/* harmony import */ var _note_detail_note_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note-detail/note-detail.component */ "./src/app/notes/note-detail/note-detail.component.ts");
/* harmony import */ var _notes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notes.service */ "./src/app/notes/notes.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NotesModule = /** @class */ (function () {
    function NotesModule() {
    }
    NotesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_3__["NotesListComponent"], _note_detail_note_detail_component__WEBPACK_IMPORTED_MODULE_4__["NoteDetailComponent"]],
            providers: [_notes_service__WEBPACK_IMPORTED_MODULE_5__["NotesService"]]
        })
    ], NotesModule);
    return NotesModule;
}());



/***/ }),

/***/ "./src/app/notes/notes.service.ts":
/*!****************************************!*\
  !*** ./src/app/notes/notes.service.ts ***!
  \****************************************/
/*! exports provided: NotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesService", function() { return NotesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotesService = /** @class */ (function () {
    function NotesService(afs) {
        this.afs = afs;
        this.notesCollection = this.afs.collection('notes', function (ref) { return ref.orderBy('time', 'desc').limit(5); });
    }
    NotesService.prototype.getData = function () {
        // ['added', 'modified', 'removed']
        return this.notesCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                return __assign({ id: a.payload.doc.id }, data);
            });
        }));
    };
    NotesService.prototype.getNote = function (id) {
        return this.afs.doc("notes/" + id);
    };
    NotesService.prototype.createNote = function (content) {
        var note = {
            content: content,
            hearts: 0,
            time: new Date().getTime(),
        };
        return this.notesCollection.add(note);
    };
    NotesService.prototype.updateNote = function (id, data) {
        return this.getNote(id).update(data);
    };
    NotesService.prototype.deleteNote = function (id) {
        return this.getNote(id).delete();
    };
    NotesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], NotesService);
    return NotesService;
}());



/***/ }),

/***/ "./src/app/ui/home-page/home-page.component.html":
/*!*******************************************************!*\
  !*** ./src/app/ui/home-page/home-page.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to Accountability</h1>\n\n<h3>Shit goes here...</h3>"

/***/ }),

/***/ "./src/app/ui/home-page/home-page.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/ui/home-page/home-page.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/home-page/home-page.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/home-page/home-page.component.ts ***!
  \*****************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
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

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/ui/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/ui/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/ui/loading-spinner/loading-spinner.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/ui/loading-spinner/loading-spinner.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <div class=\"rect1\"></div>\n  <div class=\"rect2\"></div>\n  <div class=\"rect3\"></div>\n  <div class=\"rect4\"></div>\n  <div class=\"rect5\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/ui/loading-spinner/loading-spinner.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/ui/loading-spinner/loading-spinner.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  margin: 100px auto;\n  width: 50px;\n  height: 40px;\n  text-align: center;\n  font-size: 10px; }\n\n.spinner > div {\n  background-color: #333;\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out; }\n\n.spinner .rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.spinner .rect3 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n.spinner .rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.spinner .rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1); } }\n\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1); } }\n"

/***/ }),

/***/ "./src/app/ui/loading-spinner/loading-spinner.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ui/loading-spinner/loading-spinner.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
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

var LoadingSpinnerComponent = /** @class */ (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    LoadingSpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loading-spinner',
            template: __webpack_require__(/*! ./loading-spinner.component.html */ "./src/app/ui/loading-spinner/loading-spinner.component.html"),
            styles: [__webpack_require__(/*! ./loading-spinner.component.scss */ "./src/app/ui/loading-spinner/loading-spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingSpinnerComponent);
    return LoadingSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/ui/main-nav/main-nav.component.html":
/*!*****************************************************!*\
  !*** ./src/app/ui/main-nav/main-nav.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\n  <div class=\"navbar-brand\">\n    <a class=\"navbar-item\" routerLink=\"/\">\n      Accountability\n    </a>\n\n    <a id=\"navToggle\" role=\"button\" class=\"navbar-burger\" (click)=\"toggleCollapse()\" [ngClass]=\"{'is-active': show}\">\n      <span aria-hidden=\"true\"></span>\n      <span aria-hidden=\"true\"></span>\n      <span aria-hidden=\"true\"></span>\n    </a>\n  </div>\n\n  <div class=\"navbar-menu\" [ngClass]=\"{'is-active': show}\">\n    <div class=\"navbar-end\">\n      <a class=\"navbar-item\" routerLink=\"/login\">\n        Login\n      </a>\n      <a class=\"navbar-item\" routerLink=\"/notes\">\n        Notes\n      </a>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/ui/main-nav/main-nav.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/ui/main-nav/main-nav.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  border-bottom: 1px solid #E4E4E4;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-bottom: 25px; }\n\n.navbar-brand {\n  padding: 0 3em 0 2em; }\n\n.navbar-menu {\n  padding-right: 3em; }\n"

/***/ }),

/***/ "./src/app/ui/main-nav/main-nav.component.ts":
/*!***************************************************!*\
  !*** ./src/app/ui/main-nav/main-nav.component.ts ***!
  \***************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
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

var MainNavComponent = /** @class */ (function () {
    function MainNavComponent() {
        this.show = false;
    }
    MainNavComponent.prototype.toggleCollapse = function () {
        this.show = !this.show;
    };
    MainNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/ui/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.scss */ "./src/app/ui/main-nav/main-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/ui/notification-message/notification-message.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/ui/notification-message/notification-message.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"notify.msg | async as msg\" class=\"notification\"\n  [ngClass]=\"{ \n    'is-danger': msg.style == 'error',\n    'is-success': msg.style == 'success',\n    'is-info': msg.style == 'info'\n  }\">\n  <button class=\"delete\" (click)=\"notify.clear()\"></button>\n  {{ msg.content }}\n</div>\n"

/***/ }),

/***/ "./src/app/ui/notification-message/notification-message.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/ui/notification-message/notification-message.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/notification-message/notification-message.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ui/notification-message/notification-message.component.ts ***!
  \***************************************************************************/
/*! exports provided: NotificationMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationMessageComponent", function() { return NotificationMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_notify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/notify.service */ "./src/app/core/notify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationMessageComponent = /** @class */ (function () {
    function NotificationMessageComponent(notify) {
        this.notify = notify;
    }
    NotificationMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'notification-message',
            template: __webpack_require__(/*! ./notification-message.component.html */ "./src/app/ui/notification-message/notification-message.component.html"),
            styles: [__webpack_require__(/*! ./notification-message.component.scss */ "./src/app/ui/notification-message/notification-message.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_notify_service__WEBPACK_IMPORTED_MODULE_1__["NotifyService"]])
    ], NotificationMessageComponent);
    return NotificationMessageComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/ui/user-login/user-login.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/ui/home-page/home-page.component.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/ui/main-nav/main-nav.component.ts");
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loading-spinner/loading-spinner.component */ "./src/app/ui/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _notification_message_notification_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notification-message/notification-message.component */ "./src/app/ui/notification-message/notification-message.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/ui/user-profile/user-profile.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/ui/user-form/user-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            declarations: [
                _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__["UserLoginComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__["MainNavComponent"],
                _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__["LoadingSpinnerComponent"],
                _notification_message_notification_message_component__WEBPACK_IMPORTED_MODULE_8__["NotificationMessageComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"],
                _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_10__["UserFormComponent"]
            ],
            exports: [
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_6__["MainNavComponent"],
                _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__["LoadingSpinnerComponent"],
                _notification_message_notification_message_component__WEBPACK_IMPORTED_MODULE_8__["NotificationMessageComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"],
                _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_10__["UserFormComponent"]
            ]
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/app/ui/user-form/user-form.component.html":
/*!*******************************************************!*\
  !*** ./src/app/ui/user-form/user-form.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"userForm\" *ngIf=\"newUser\" (ngSubmit)=\"signup()\">\n\n    <h3>New User Signup</h3>\n    <p class=\"button is-small\" (click)=\"toggleForm()\">Already Registered?</p>\n    <hr>\n\n    <label for=\"email\">Email</label>\n    <input type=\"email\" class=\"input\" formControlName=\"email\" name=\"email\" required autocomplete=\"new-password\">\n\n    <div *ngIf=\"formErrors.email\" class=\"notification is-danger\">\n        {{ formErrors.email }}\n    </div>\n\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"input\" formControlName=\"password\" name=\"password\" required>\n\n    <div *ngIf=\"formErrors.password\" class=\"notification is-danger\">\n        {{ formErrors.password }}\n    </div>\n\n    <div *ngIf=\"userForm.valid\" class=\"notification is-success\">Form is valid</div>\n    <button type=\"submit\" class=\"button\" [disabled]=\"!userForm.valid\">Submit</button>\n\n</form>\n\n\n<form [formGroup]=\"userForm\" *ngIf=\"!newUser\" (ngSubmit)=\"login()\">\n\n    <h3>Existing User Login</h3>\n    <p class=\"btn button is-small\" (click)=\"toggleForm()\">New User?</p>\n    <hr>\n\n    <label for=\"email\">Email</label>\n    <input type=\"email\" id=\"email\" name=\"email2\" class=\"input\" formControlName=\"email\" required autocomplete=\"new-password\">\n\n    <div *ngIf=\"formErrors.email\" class=\"help is-danger\">\n        {{ formErrors.email }}\n    </div>\n\n    <label for=\"password\">Password</label>\n    <input type=\"password\" id=\"password\" name=\"password2\" class=\"input\" formControlName=\"password\" required autocomplete=\"new-password\">\n\n    <div *ngIf=\"formErrors.password\" class=\"help is-danger\">\n        {{ formErrors.password }}\n    </div>\n\n    <button type=\"submit\" class=\"button\" [disabled]=\"!userForm.valid\">Submit</button>\n\n    <span *ngIf=\"userForm.valid\" class=\"help is-success\">Form Looks Valid</span>\n\n    <a *ngIf=\"!passReset && userForm.controls.email.valid\" class=\"help is-info\" (click)=\"resetPassword()\">Reset Password for {{userForm.value.email}}?</a>\n    <p *ngIf=\"passReset\" class=\"help is-info\">Reset requested. Check your email instructions.</p>\n\n</form>"

/***/ }),

/***/ "./src/app/ui/user-form/user-form.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/ui/user-form/user-form.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/user-form/user-form.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/user-form/user-form.component.ts ***!
  \*****************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.newUser = true; // to toggle login or signup form
        this.passReset = false; // set to true when password reset is triggered
        this.formErrors = {
            'email': '',
            'password': '',
        };
        this.validationMessages = {
            'email': {
                'required': 'Email is required.',
                'email': 'Email must be a valid email',
            },
            'password': {
                'required': 'Password is required.',
                'pattern': 'Password must be include at one letter and one number.',
                'minlength': 'Password must be at least 4 characters long.',
                'maxlength': 'Password cannot be more than 40 characters long.',
            },
        };
    }
    UserFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    UserFormComponent.prototype.toggleForm = function () {
        this.newUser = !this.newUser;
    };
    UserFormComponent.prototype.signup = function () {
        this.auth.emailSignUp(this.userForm.value['email'], this.userForm.value['password']);
    };
    UserFormComponent.prototype.login = function () {
        this.auth.emailLogin(this.userForm.value['email'], this.userForm.value['password']);
    };
    UserFormComponent.prototype.resetPassword = function () {
        var _this = this;
        this.auth.resetPassword(this.userForm.value['email'])
            .then(function () { return _this.passReset = true; });
    };
    UserFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            'email': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
                ]],
            'password': ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25),
                ]],
        });
        this.userForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // reset validation messages
    };
    // Updates validation state on form changes.
    UserFormComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        for (var field in this.formErrors) {
            if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'email' || field === 'password')) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    if (control.errors) {
                        for (var key in control.errors) {
                            if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                                this.formErrors[field] += messages[key] + " ";
                            }
                        }
                    }
                }
            }
        }
    };
    UserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/ui/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.scss */ "./src/app/ui/user-form/user-form.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/ui/user-login/user-login.component.html":
/*!*********************************************************!*\
  !*** ./src/app/ui/user-login/user-login.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Please sign in to Accountability</h1>\n<hr>\n\n<div *ngIf=\"!(auth.user | async); else alreadyLoggedIn\">\n  <h3>Social Login</h3>\n  <button (click)=\"signInWithGoogle()\" class=\"button btn-social btn-google\">\n    <i class=\"fa fa-google fa-lg\"></i> Connect Google\n  </button>\n  <hr>\n  <user-form></user-form>\n</div>\n\n<ng-template #alreadyLoggedIn>\n  <p class=\"text-success\">\n    You are logged in <i class=\"fa fa-thumbs-up\"></i>\n  </p>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/ui/user-login/user-login.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/ui/user-login/user-login.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/user-login/user-login.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ui/user-login/user-login.component.ts ***!
  \*******************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};



var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    UserLoginComponent.prototype.signInWithGoogle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.googleLogin()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.afterSignIn()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserLoginComponent.prototype.afterSignIn = function () {
        // Do after login stuff here, such router redirects, toast messages, etc.
        return this.router.navigate(['/']);
    };
    UserLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-login',
            template: __webpack_require__(/*! ./user-login.component.html */ "./src/app/ui/user-login/user-login.component.html"),
            styles: [__webpack_require__(/*! ./user-login.component.scss */ "./src/app/ui/user-login/user-login.component.scss")],
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/ui/user-profile/user-profile.component.html":
/*!*************************************************************!*\
  !*** ./src/app/ui/user-profile/user-profile.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\" *ngIf=\"auth.user | async;\">\n  <div *ngIf=\"auth.user | async; then authenticated else guest\">\n          <!-- template will replace this div -->\n  </div>\n</div>\n\n<!-- User logged in -->\n<ng-template #authenticated>\n  <div *ngIf=\"auth.user | async as user\">\n    <h3>Welcome, {{ user.displayName }}</h3>\n    <img class=\"card-img-top\" [src]=\"user.photoURL || 'https://api.adorable.io/avatars/109/fire.png'\" width=50px>\n    <p class=\"text-truncate\">{{ user.email }}</p>\n    <button class=\"button\" (click)=\"logout()\">Logout</button>\n  </div>\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/ui/user-profile/user-profile.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/ui/user-profile/user-profile.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/user-profile/user-profile.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui/user-profile/user-profile.component.ts ***!
  \***********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    UserProfileComponent.prototype.logout = function () {
        this.auth.signOut();
        return this.router.navigate(['/login']);
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/ui/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/ui/user-profile/user-profile.component.scss")],
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserProfileComponent);
    return UserProfileComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCjIO9CRfopGL1rYfQsgr7gyCUZDIZoLmc",
        authDomain: "accountability-d30a5.firebaseapp.com",
        databaseURL: "https://accountability-d30a5.firebaseio.com",
        projectId: "accountability-d30a5",
        storageBucket: "",
        messagingSenderId: "60362820639"
    }
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
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.log(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zachstarnes/Desktop/appdomain/accountability/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map