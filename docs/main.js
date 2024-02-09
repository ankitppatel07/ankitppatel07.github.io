"use strict";
(self["webpackChunkportfolio_website"] = self["webpackChunkportfolio_website"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/footer/footer.component */ 1777);
/* harmony import */ var _left_side_left_side_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./left-side/left-side.component */ 3360);
/* harmony import */ var _right_side_right_side_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./right-side/right-side.component */ 6506);




class AppComponent {
  constructor() {
    this.title = 'portfolio-website';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 6,
    vars: 0,
    consts: [[1, "container", 2, "height", "100%"], [1, "row", 2, "height", "100%"], [1, "col-lg-4"], [1, "col-lg-8"], [1, "row"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-left-side", 2)(3, "app-right-side", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _left_side_left_side_component__WEBPACK_IMPORTED_MODULE_1__.LeftSideComponent, _right_side_right_side_component__WEBPACK_IMPORTED_MODULE_2__.RightSideComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _left_side_left_side_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./left-side/left-side.component */ 3360);
/* harmony import */ var _right_side_right_side_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./right-side/right-side.component */ 6506);
/* harmony import */ var _right_side_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./right-side/skills/skills.component */ 3005);
/* harmony import */ var _right_side_experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./right-side/experience/experience.component */ 9462);
/* harmony import */ var _right_side_certifications_certifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./right-side/certifications/certifications.component */ 4965);
/* harmony import */ var _left_side_education_education_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./left-side/education/education.component */ 2495);
/* harmony import */ var _left_side_social_social_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./left-side/social/social.component */ 3368);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/footer/footer.component */ 1777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);











class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _left_side_left_side_component__WEBPACK_IMPORTED_MODULE_1__.LeftSideComponent, _right_side_right_side_component__WEBPACK_IMPORTED_MODULE_2__.RightSideComponent, _right_side_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__.SkillsComponent, _right_side_experience_experience_component__WEBPACK_IMPORTED_MODULE_4__.ExperienceComponent, _right_side_certifications_certifications_component__WEBPACK_IMPORTED_MODULE_5__.CertificationsComponent, _left_side_education_education_component__WEBPACK_IMPORTED_MODULE_6__.EducationComponent, _left_side_social_social_component__WEBPACK_IMPORTED_MODULE_7__.SocialComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__.FooterComponent]
  });
})();

/***/ }),

/***/ 2495:
/*!************************************************************!*\
  !*** ./src/app/left-side/education/education.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EducationComponent: () => (/* binding */ EducationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class EducationComponent {
  constructor() {}
  ngOnInit() {}
  redirectTo(value) {
    if (value == "BU") {
      window.open("https://www.binghamton.edu");
    } else if (true) {
      window.open("https://mu.ac.in/");
    }
  }
  static #_ = this.ɵfac = function EducationComponent_Factory(t) {
    return new (t || EducationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: EducationComponent,
    selectors: [["app-education"]],
    decls: 34,
    vars: 0,
    consts: [[1, "container", "p-2"], [1, "row", "text-center"], [1, "second-hr"], [1, "education", "row", "align-items-center", "g-0", 3, "click"], [1, "col-sm-2", "text-center", "g-0"], ["src", "assets/education/bu_logo.png", "alt", "", 1, "logo"], [1, "col-sm-10", "text-center"], ["src", "assets/education/mu_logo.png", "alt", "", 1, "logo"]],
    template: function EducationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4")(3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About me:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "I am a Software Developer for TCS. I work as a Consultant for New York Life Insurance - GBS(previously Cigna).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr", 2)(10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1)(12, "h4")(13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Education:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_Template_div_click_16_listener() {
          return ctx.redirectTo("BU");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6)(20, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Master of Science, Computer Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Binghamton University, SUNY - 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_Template_div_click_25_listener() {
          return ctx.redirectTo("MU");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6)(29, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Bachelor of Engineering, IT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "University of Mumbai, India - 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: [".logo[_ngcontent-%COMP%] {\n    height: auto;\n    width: 100%;\n    min-height: 50px;\n    min-width: 50px;\n    max-height: 100px;\n    max-width: 100px;\n}\n\n.education[_ngcontent-%COMP%]:hover {\n    background-color: rgba(86, 156, 214, 0.5);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGVmdC1zaWRlL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uZWR1Y2F0aW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODYsIDE1NiwgMjE0LCAwLjUpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3360:
/*!**************************************************!*\
  !*** ./src/app/left-side/left-side.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeftSideComponent: () => (/* binding */ LeftSideComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./education/education.component */ 2495);
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social/social.component */ 3368);



class LeftSideComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function LeftSideComponent_Factory(t) {
    return new (t || LeftSideComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LeftSideComponent,
    selectors: [["app-left-side"]],
    decls: 17,
    vars: 0,
    consts: [[1, "left-side"], [1, "container", "text-center"], ["src", "assets/profile/display_pic.jpg", "alt", "", "height", "200px", "width", "200px", 1, "profile-animation"], [1, "container"], [1, "text-center"], [1, "first-hr"]],
    template: function LeftSideComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Ankit Patel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3)(10, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Software Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "hr", 5)(13, "br")(14, "app-education")(15, "br")(16, "app-social");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_education_education_component__WEBPACK_IMPORTED_MODULE_0__.EducationComponent, _social_social_component__WEBPACK_IMPORTED_MODULE_1__.SocialComponent],
    styles: [".left-side[_ngcontent-%COMP%] {\n    \n\n\n    \n\n    \n\n    height: 100%;\n    \n\n    background-color: black;\n}\n\n.profile-animation[_ngcontent-%COMP%] {\n    height: 200px;\n    width: 200px;\n    border-radius: 50%;\n    \n\n    animation: _ngcontent-%COMP%_loader 3s ease-in-out infinite alternate;\n}\n\n@keyframes _ngcontent-%COMP%_loader {\n    from {\n        \n\n\n        box-shadow: 0 0 10px 10px rgb(86, 156, 214);\n    }\n    to {\n        \n\n\n        box-shadow: 0 0 0 0 rgb(0, 0, 0);\n    }\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGVmdC1zaWRlL2xlZnQtc2lkZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7NkJBQ3lCO0lBQ3pCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLDZDQUE2QztJQUM3Qyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0Q0FBNEM7SUFDNUMsbURBQW1EO0FBQ3ZEOztBQUVBO0lBQ0k7UUFDSTtpREFDeUM7UUFDekMsMkNBQTJDO0lBQy9DO0lBQ0E7UUFDSTtpREFDeUM7UUFDekMsZ0NBQWdDO0lBQ3BDO0VBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdC1zaWRlIHtcclxuICAgIC8qIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTsgKi9cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgMTYsIDIyMiwgMC43KTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucHJvZmlsZS1hbmltYXRpb24ge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC8qIGJveC1zaGFkb3c6IDAgMCAwIDVweCByZ2IoNjUsIDE2LCAyMjIpOyAqL1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkZXIgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWRlciB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICAvKiBib3JkZXI6IDVweCBzb2xpZCByZ2IoMTI0LCAxNCwgNTEpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDVweCByZ2IoNjUsIDE2LCAyMjIpOyAqL1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDEwcHggcmdiKDg2LCAxNTYsIDIxNCk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgLyogYm9yZGVyOiA1cHggc29saWQgcmdiKDY1LCAxNiwgMjIyKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA1cHggcmdiKDEyNCwgMTQsIDUxKTsgKi9cclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYigwLCAwLCAwKTtcclxuICAgIH1cclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3368:
/*!******************************************************!*\
  !*** ./src/app/left-side/social/social.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialComponent: () => (/* binding */ SocialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class SocialComponent {
  constructor() {}
  ngOnInit() {}
  redirectTo(value) {
    if (value == "github") {
      window.open("https://github.com/ankitppatel07");
    } else if (true) {
      window.open("https://www.linkedin.com/in/ankitppatel07/");
    }
  }
  static #_ = this.ɵfac = function SocialComponent_Factory(t) {
    return new (t || SocialComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SocialComponent,
    selectors: [["app-social"]],
    decls: 18,
    vars: 0,
    consts: [[1, "container", "p-2"], [1, "row", "text-center"], [1, "second-hr"], [1, "row", "align-items-center"], [1, "col-2"], ["title", "GitHub", 1, "col-sm-4", "text-center", 3, "click"], ["src", "assets/social/github.png", "alt", "", 1, "logo"], ["title", "LinkedIn", 1, "col-sm-4", "text-center", 3, "click"], ["src", "assets/social/linkedin.png", "alt", "", 1, "logo"]],
    template: function SocialComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4")(3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Social:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 2)(6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialComponent_Template_div_click_9_listener() {
          return ctx.redirectTo("github");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialComponent_Template_div_click_11_listener() {
          return ctx.redirectTo("linkedin");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br")(15, "hr", 2)(16, "br")(17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: [".first-hr[_ngcontent-%COMP%] {\n    border-top: 5px solid white;\n    margin: 0px;\n}\n.second-hr[_ngcontent-%COMP%] {\n    border-top: 2px solid white;\n    margin: 0px;\n}\n\n.logo[_ngcontent-%COMP%] {\n    height: auto;\n    width: 100%;\n    max-height: 50px;\n    max-width: 50px;\n}\n\n.logo[_ngcontent-%COMP%]:hover {\n    box-shadow: 0px 0px 5px 5px rgb(86, 156, 214);\n}\n\nbutton[_ngcontent-%COMP%] {\n    background-color: rgb(86, 156, 214);\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n    background-color: rgb(124, 220, 254);\n    box-shadow: 0px 0px 5px 5px rgba(86, 156, 214, 0.5);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGVmdC1zaWRlL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG1EQUFtRDtBQUN2RCIsInNvdXJjZXNDb250ZW50IjpbIi5maXJzdC1ociB7XHJcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgd2hpdGU7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4uc2Vjb25kLWhyIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5sb2dvOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCByZ2IoODYsIDE1NiwgMjE0KTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NiwgMTU2LCAyMTQpO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNCwgMjIwLCAyNTQpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoODYsIDE1NiwgMjE0LCAwLjUpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4965:
/*!***********************************************************************!*\
  !*** ./src/app/right-side/certifications/certifications.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CertificationsComponent: () => (/* binding */ CertificationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class CertificationsComponent {
  constructor() {}
  ngOnInit() {}
  redirectTo(value) {
    if (value == "oracle_cert") {
      window.open("https://www.youracclaim.com/badges/3f63cf0e-e8f0-4847-978d-23d9d8125002/linked_in_profile");
    } else if (true) {
      window.open("https://aws.amazon.com/verification");
    }
  }
  static #_ = this.ɵfac = function CertificationsComponent_Factory(t) {
    return new (t || CertificationsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CertificationsComponent,
    selectors: [["app-certifications"]],
    decls: 34,
    vars: 0,
    consts: [[1, "container"], [1, "row", "text-center"], [1, "row"], [1, "col"], [1, "second-hr"], [1, "row", "g-0"], [1, "col-2"], [1, "col-8"], [1, "row", "certifications", "align-items-center", 3, "click"], [1, "col-2", "text-center"], ["src", "assets/certifications/oracle_cert.png", "alt", "", 1, "logo"], [1, "col-10", "text-center"], ["src", "assets/certifications/aws_cert.png", "alt", "", 1, "logo"]],
    template: function CertificationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4")(3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Certifications:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CertificationsComponent_Template_div_click_11_listener() {
          return ctx.redirectTo("oracle_cert");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11)(15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Oracle Certified Professional Java Programmer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2)(19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7)(24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CertificationsComponent_Template_div_click_24_listener() {
          return ctx.redirectTo("aws_cert");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11)(28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "AWS Certified Solutions Architect Associate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2)(32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: [".logo[_ngcontent-%COMP%] {\n    height: auto;\n    width: 100%;\n    min-height: 50px;\n    min-width: 50px;\n    max-height: 75px;\n    max-width: 75px;\n}\n\n.certifications[_ngcontent-%COMP%]:hover {\n    background-color: rgba(86, 156, 214, 0.5);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmlnaHQtc2lkZS9jZXJ0aWZpY2F0aW9ucy9jZXJ0aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNzVweDtcclxuICAgIG1heC13aWR0aDogNzVweDtcclxufVxyXG5cclxuLmNlcnRpZmljYXRpb25zOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODYsIDE1NiwgMjE0LCAwLjUpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9462:
/*!***************************************************************!*\
  !*** ./src/app/right-side/experience/experience.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperienceComponent: () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ExperienceComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ExperienceComponent_Factory(t) {
    return new (t || ExperienceComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ExperienceComponent,
    selectors: [["app-experience"]],
    decls: 30,
    vars: 0,
    consts: [[1, "container"], [1, "row", "text-center"], [1, "row"], [1, "col"], [1, "second-hr"], [1, "col-9"], [1, "text-start"], [1, "col-3"], [1, "text-end"]],
    template: function ExperienceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4")(3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Work Experience:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2)(9, "div", 5)(10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Software Developer | Tata Consultancy Services Limited");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7)(13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "July 2020 - Present");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2)(16, "div", 3)(17, "ul")(18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Worked as a Developer for the New York Life Insurance\u2019s Group Benefit Solutions. (previously Cigna GBS)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Developed, maintained, optimized, and implemented new features into the GAR Application which tracks and maintains data on release, components and assets used in NYL\u2019s GBS projects and provides a dashboard of the same.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Led, planned, and directed the migration of GAR Application front-end from AngularJS to Angular.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Leveraged UML Diagram and wireframes during migration planning to visualize system structure and user journeys, ensuring stakeholder alignment and clear communication.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Increased user base and engagement through implementation of application enhancements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Created CI pipeline using Jenkins with Git Integration and Maven plugin to automatically build and test .war artifacts.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: [".logo[_ngcontent-%COMP%] {\n    height: auto;\n    width: 100%;\n    min-height: 50px;\n    min-width: 50px;\n    max-height: 75px;\n    max-width: 75px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmlnaHQtc2lkZS9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDc1cHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6506:
/*!****************************************************!*\
  !*** ./src/app/right-side/right-side.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RightSideComponent: () => (/* binding */ RightSideComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skills/skills.component */ 3005);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experience/experience.component */ 9462);
/* harmony import */ var _certifications_certifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certifications/certifications.component */ 4965);




class RightSideComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function RightSideComponent_Factory(t) {
    return new (t || RightSideComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: RightSideComponent,
    selectors: [["app-right-side"]],
    decls: 8,
    vars: 0,
    consts: [[1, "right-side"], [1, "container"]],
    template: function RightSideComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-experience")(4, "br")(5, "app-skills")(6, "br")(7, "app-certifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_skills_skills_component__WEBPACK_IMPORTED_MODULE_0__.SkillsComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_1__.ExperienceComponent, _certifications_certifications_component__WEBPACK_IMPORTED_MODULE_2__.CertificationsComponent],
    styles: [".right-side[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    \n\n    \n\n    height: 100%;\n    \n\n    background-color: black;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmlnaHQtc2lkZS9yaWdodC1zaWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLDZDQUE2QztJQUM3Qyx1QkFBdUI7QUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyIucmlnaHQtc2lkZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgd2hpdGU7ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUsIDE2LCAyMjIsIDAuNyk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3005:
/*!*******************************************************!*\
  !*** ./src/app/right-side/skills/skills.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillsComponent: () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class SkillsComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function SkillsComponent_Factory(t) {
    return new (t || SkillsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SkillsComponent,
    selectors: [["app-skills"]],
    decls: 186,
    vars: 0,
    consts: [[1, "container"], [1, "row", "text-center"], [1, "row"], [1, "col"], [1, "second-hr"], [1, "col-md-4", "p-2"], ["src", "assets/homepage/front-end.jpg", "data-bs-toggle", "modal", "data-bs-target", "#frontendModal", 1, "skills-animation"], ["src", "assets/homepage/back-end.jpg", "data-bs-toggle", "modal", "data-bs-target", "#backendModal", 1, "skills-animation"], ["src", "assets/homepage/database.png", "data-bs-toggle", "modal", "data-bs-target", "#databaseModal", 1, "skills-animation"], ["src", "assets/homepage/cicd.jpg", "data-bs-toggle", "modal", "data-bs-target", "#cicdModal", 1, "skills-animation"], ["src", "assets/homepage/tools.png", "data-bs-toggle", "modal", "data-bs-target", "#toolsModal", 1, "skills-animation"], ["src", "assets/homepage/testing.png", "data-bs-toggle", "modal", "data-bs-target", "#testingModal", 1, "skills-animation"], ["id", "frontendModal", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content", "modal-shadow", 2, "background-color", "rgb(40, 40, 40)"], [1, "modal-header"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "button1"], [1, "modal-body"], [1, "col", "text-center"], ["src", "assets/homepage/front-end/angular.jpg", 1, "skills-animation"], ["src", "assets/homepage/front-end/typescript.png", 1, "skills-animation"], ["src", "assets/homepage/front-end/javascript.png", 1, "skills-animation"], ["src", "assets/homepage/front-end/html.jpg", 1, "skills-animation"], ["id", "backendModal", "tabindex", "-1", 1, "modal", "fade"], ["src", "assets/homepage/back-end/java.jpg", 1, "skills-animation"], ["src", "assets/homepage/back-end/spring.png", 1, "skills-animation"], ["id", "databaseModal", "tabindex", "-1", 1, "modal", "fade"], ["src", "assets/homepage/database/sql.png", 1, "skills-animation"], ["src", "assets/homepage/database/oracledb.png", 1, "skills-animation"], ["src", "assets/homepage/database/mysql.png", 1, "skills-animation"], ["src", "assets/homepage/database/mongodb.jpg", 1, "skills-animation"], ["id", "cicdModal", "tabindex", "-1", 1, "modal", "fade"], ["src", "assets/homepage/ci-cd/git.jpg", 1, "skills-animation"], ["src", "assets/homepage/ci-cd/jenkins.jpg", 1, "skills-animation"], ["src", "assets/homepage/ci-cd/docker.jpg", 1, "skills-animation"], ["src", "assets/homepage/ci-cd/kubernetes.png", 1, "skills-animation"], ["id", "toolsModal", "tabindex", "-1", 1, "modal", "fade"], ["src", "assets/homepage/tools/vscode.png", 1, "skills-animation"], ["src", "assets/homepage/tools/eclipse.png", 1, "skills-animation"], ["src", "assets/homepage/tools/spring_tool_suite.png", 1, "skills-animation"], ["src", "assets/homepage/tools/sql_server.jpg", 1, "skills-animation"], ["src", "assets/homepage/tools/jira.jpg", 1, "skills-animation"], ["id", "testingModal", "tabindex", "-1", 1, "modal", "fade"], ["src", "assets/homepage/testing/junit5.png", 1, "skills-animation"], ["src", "assets/homepage/testing/mockito.png", 1, "skills-animation"], ["src", "assets/homepage/testing/jasmine.jpg", 1, "skills-animation"], ["src", "assets/homepage/testing/karma.png", 1, "skills-animation"]],
    template: function SkillsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4")(3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Skills:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2)(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0)(10, "div", 1)(11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1)(18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12)(25, "div", 13)(26, "div", 14)(27, "div", 15)(28, "h4")(29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Front-End Technologies:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17)(33, "div", 2)(34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "TypeScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2)(44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 23)(53, "div", 13)(54, "div", 14)(55, "div", 15)(56, "h4")(57, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Back-End Technologies:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 17)(61, "div", 2)(62, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Spring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 26)(71, "div", 13)(72, "div", 14)(73, "div", 15)(74, "h4")(75, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Database Technologies:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 17)(79, "div", 2)(80, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Oracle DB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 2)(90, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "MySQL DB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 31)(99, "div", 13)(100, "div", 14)(101, "div", 15)(102, "h4")(103, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "CI-CD Technologies:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 17)(107, "div", 2)(108, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Jenkins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 2)(118, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Docker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Kubernetes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 36)(127, "div", 13)(128, "div", 14)(129, "div", 15)(130, "h4")(131, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Tools:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 17)(135, "div", 2)(136, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "VS Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Eclipse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Spring Tool Suite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 2)(150, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "SQL Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Jira");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 42)(159, "div", 13)(160, "div", 14)(161, "div", 15)(162, "h4")(163, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Testing Frameworks:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 17)(167, "div", 2)(168, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Junit5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Mockito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 2)(178, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Jasmine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Karma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
    },
    styles: [".logo[_ngcontent-%COMP%] {\n    height: auto;\n    width: 100%;\n    min-height: 50px;\n    min-width: 50px;\n    max-height: 75px;\n    max-width: 75px;\n}\n\n.skills-animation[_ngcontent-%COMP%] {\n    height: 150px;\n    width: 150px;\n    border-radius: 35%;\n    border-color: rgba(86, 156, 214, 1);\n    border-width: 2px;\n    border-style: solid;\n}\n\n.skills-animation[_ngcontent-%COMP%]:hover {\n    border-radius: 35%;\n    box-shadow: 0px 0px 5px 5px rgba(86, 156, 214, 1);\n}\n\n.overlay[_ngcontent-%COMP%] {\n    position: fixed;\n    background-color: rgb(40, 40, 40, 0.5);\n    height: 200%;\n    width: 100%;\n}\n\n.button1[_ngcontent-%COMP%] {\n    background-color: rgb(206, 114, 60);\n    opacity: 1;\n}\n\n.button1[_ngcontent-%COMP%]:hover {\n    background-color: rgb(255, 181, 24);\n    opacity: 1;\n}\n\n.modal-shadow[_ngcontent-%COMP%] {\n    box-shadow: 0px 0px 5px 5px rgba(86, 156, 214, 1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmlnaHQtc2lkZS9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlEQUFpRDtBQUNyRCIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDc1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDc1cHg7XHJcbn1cclxuXHJcbi5za2lsbHMtYW5pbWF0aW9uIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNSU7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoODYsIDE1NiwgMjE0LCAxKTtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuLnNraWxscy1hbmltYXRpb246aG92ZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzUlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoODYsIDE1NiwgMjE0LCAxKTtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA0MCwgNDAsIDAuNSk7XHJcbiAgICBoZWlnaHQ6IDIwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJ1dHRvbjEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMTE0LCA2MCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYnV0dG9uMTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxODEsIDI0KTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5tb2RhbC1zaGFkb3cge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4IHJnYmEoODYsIDE1NiwgMjE0LCAxKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1777:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class FooterComponent {
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 0,
    consts: [[1, "container"], [1, "row"], [1, "text-end"], ["src", "../../../assets/homepage/footer/footer_logo.png", "height", "30px", "width", "30px"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " powered by Angular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map