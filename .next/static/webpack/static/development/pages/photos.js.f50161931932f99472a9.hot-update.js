webpackHotUpdate("static/development/pages/photos.js",{

/***/ "./src/const/routes.js":
/*!*****************************!*\
  !*** ./src/const/routes.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



var MyRouter = function MyRouter() {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyRouter);
};

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(MyRouter, "slug", "[slug]");

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(MyRouter, "Home", {
  href: "/"
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(MyRouter, "Products", {
  href: "/products"
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(MyRouter, "Photos", {
  href: "/photos"
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(MyRouter, "ProductDetail", {
  href: "".concat(MyRouter.Products.href, "/").concat(MyRouter.slug),
  as: function as(slug) {
    return "".concat(MyRouter.Products.href, "/").concat(slug);
  }
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(MyRouter, "ProductsList", {
  href: "".concat(MyRouter.Products.href, "/").concat(MyRouter.slug),
  as: function as(slug, id) {
    return "".concat(MyRouter.Products.href, "/").concat(slug, "~").concat(id);
  }
});

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(MyRouter, "PhotoDetails", {
  href: "".concat(MyRouter.Photos.href, "/").concat(MyRouter.slug),
  as: function as(slug, id) {
    return "".concat(MyRouter.Photos.href, "/").concat(slug, "~").concat(id);
  }
});

/* harmony default export */ __webpack_exports__["default"] = (MyRouter);

/***/ })

})
//# sourceMappingURL=photos.js.f50161931932f99472a9.hot-update.js.map