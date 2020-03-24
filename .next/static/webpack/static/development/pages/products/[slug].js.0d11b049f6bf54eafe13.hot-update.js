webpackHotUpdate("static/development/pages/products/[slug].js",{

/***/ "./src/pages/products/[slug].js":
/*!**************************************!*\
  !*** ./src/pages/products/[slug].js ***!
  \**************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _layouts_layout1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../layouts/layout1 */ "./src/layouts/layout1.js");
/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../const/routes */ "./src/const/routes.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _services_myService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/myService */ "./src/services/myService.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../data/data */ "./src/data/data.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _scss_pages_slug_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../scss/pages/[slug].scss */ "./src/scss/pages/[slug].scss");
/* harmony import */ var _scss_pages_slug_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_scss_pages_slug_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_categoryComp__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/categoryComp */ "./src/components/categoryComp.js");
/* harmony import */ var _components_productComp__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/productComp */ "./src/components/productComp.js");
/* harmony import */ var _hoc_newComponent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../hoc/newComponent */ "./src/hoc/newComponent.jsx");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../const/const */ "./src/const/const.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_const_const__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _components_SharedComp_LoadingPage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/SharedComp/LoadingPage */ "./src/components/SharedComp/LoadingPage.js");







var _jsxFileName = "/Volumes/Data/House/src/pages/products/[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;








 // data

 // import "jquery";









var ProductsPosition = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ProductsPosition, _Component);

  function ProductsPosition() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductsPosition);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProductsPosition)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      loading: _this.props.loading
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "listBreadcrum", [{
      name: "All Products",
      href: _const_routes__WEBPACK_IMPORTED_MODULE_10__["default"].Products.href,
      as: ""
    }, {
      name: _services_myService__WEBPACK_IMPORTED_MODULE_13__["MyService"].parseSeoToName(_this.props.router.query[Object.keys(_this.props.router.query)[0]]),
      href: _this.props.router.pathname,
      as: _this.props.router.asPath
    }]);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderBreadcrumb", function () {
      var slug = _this.props.router.query[_const_routes__WEBPACK_IMPORTED_MODULE_10__["default"].slug.replace("[", "").replace("]", "")];

      var objCur = _services_myService__WEBPACK_IMPORTED_MODULE_13__["FuncService"].search(_data_data__WEBPACK_IMPORTED_MODULE_16__["dataCategories"], 'slug', slug);
      return _this.listBreadcrum.map(function (item, i) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_11__["Breadcrumb"].Item, {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: item.href,
          as: item.as,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, __jsx("span", {
          className: "mylink fs-15",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, item.name)));
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductsPosition, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          typeComp = _this$props.typeComp,
          product = _this$props.product,
          productsChild = _this$props.productsChild,
          productsChild_2 = _this$props.productsChild_2;
      var renderComp = typeComp === 0 ? __jsx(_components_categoryComp__WEBPACK_IMPORTED_MODULE_19__["default"], {
        product: product,
        productsChild: productsChild,
        productsChild_2: productsChild_2,
        callback: function callback(res) {
          _this2.setState({
            loading: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }) : __jsx(_components_productComp__WEBPACK_IMPORTED_MODULE_20__["default"], {
        product: product,
        productsChild: productsChild,
        callback: function callback(res) {},
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }); // console.log("product: ",product);
      // console.log("productsChild: ",productsChild)
      // console.log("productsChild_2: ",productsChild_2)

      console.log("state: ", this.state.loading);
      console.log("props: ", this.props.loading);
      return __jsx(_layouts_layout1__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx(_components_SharedComp_LoadingPage__WEBPACK_IMPORTED_MODULE_23__["default"], {
        isLoading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        id: "productPosition",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_11__["Breadcrumb"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, this.renderBreadcrumb()), __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, _services_myService__WEBPACK_IMPORTED_MODULE_13__["MyService"].parseSeoToName(this.props.router.query[Object.keys(this.props.router.query)[0]])), renderComp)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    // componentWillReceiveProps(nextProps) {
    //   console.log(nextProps)
    //   if(nextProps.loading !== this.state.loading) {
    //     this.setState({loading: this.props.loading});
    //   }
    // }
    value: function getDerivedStateFromProps(nextProps, prevState) {
      console.log("cc: ", nextProps, prevState);

      if (prevState.loading === true) {
        return {
          loading: true
        };
      }

      return {
        loading: false
      };
    }
  }]);

  return ProductsPosition;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(ProductsPosition));

/***/ })

})
//# sourceMappingURL=[slug].js.0d11b049f6bf54eafe13.hot-update.js.map