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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _layouts_layout1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../layouts/layout1 */ "./src/layouts/layout1.js");
/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../const/routes */ "./src/const/routes.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _components_categoryComp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/categoryComp */ "./src/components/categoryComp.js");
/* harmony import */ var _components_productComp__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/productComp */ "./src/components/productComp.js");
/* harmony import */ var _hoc_newComponent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../hoc/newComponent */ "./src/hoc/newComponent.jsx");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../const/const */ "./src/const/const.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_const_const__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_SharedComp_LoadingPage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/SharedComp/LoadingPage */ "./src/components/SharedComp/LoadingPage.js");








var _jsxFileName = "/Volumes/Data/House/src/pages/products/[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;







 // data







var ProductsPosition = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ProductsPosition, _Component);

  function ProductsPosition() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProductsPosition);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ProductsPosition)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      loading: _this.props.loading
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderBreadcrumb", function () {
      var _this$props = _this.props,
          typeComp = _this$props.typeComp,
          product = _this$props.product,
          productDetail = _this$props.productDetail,
          breadcrumb = _this$props.breadcrumb;
      var listBreadcrum = [{
        name: "All Products",
        href: _const_routes__WEBPACK_IMPORTED_MODULE_11__["default"].Products.href,
        as: ""
      }];

      if (typeComp === 0) {
        if (breadcrumb.length > 0) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = breadcrumb[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var res = _step.value;
              listBreadcrum = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(listBreadcrum), [{
                name: res.name,
                href: _const_routes__WEBPACK_IMPORTED_MODULE_11__["default"].ProductDetail.href,
                as: _const_routes__WEBPACK_IMPORTED_MODULE_11__["default"].ProductDetail.as(res.slug)
              }]);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }

        listBreadcrum = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(listBreadcrum), [{
          name: product.name,
          href: _this.props.router.pathname,
          as: _this.props.router.asPath
        }]);
        console.log(listBreadcrum);
      }

      if (typeComp === 1) {
        // console.log("product: ",product)
        // console.log("productDetail: ",productDetail)
        console.log("breadcrumb: ", breadcrumb);
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = breadcrumb[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _res = _step2.value;
            listBreadcrum = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(listBreadcrum), [{
              name: _res.name,
              href: _const_routes__WEBPACK_IMPORTED_MODULE_11__["default"].ProductDetail.href,
              as: _const_routes__WEBPACK_IMPORTED_MODULE_11__["default"].ProductDetail.as(_res.slug)
            }]);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        listBreadcrum = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(listBreadcrum), [{
          name: product.name,
          href: _const_routes__WEBPACK_IMPORTED_MODULE_11__["default"].ProductDetail.href,
          as: _const_routes__WEBPACK_IMPORTED_MODULE_11__["default"].ProductDetail.as(product.slug)
        }, {
          name: "MPN ".concat(productDetail.id),
          href: _const_routes__WEBPACK_IMPORTED_MODULE_11__["default"].ProductsList.href,
          as: _const_routes__WEBPACK_IMPORTED_MODULE_11__["default"].ProductsList.as(productDetail.slug, productDetail.id)
        }]);
      }

      return listBreadcrum.map(function (item, i) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Breadcrumb"].Item, {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, i + 1 === listBreadcrum.length ? __jsx("span", {
          className: "fs-15",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        }, item.name) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
          href: item.href,
          as: item.as,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }, __jsx("span", {
          className: "mylink fs-15",
          onClick: function onClick() {
            return _this.setState({
              loading: true
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          },
          __self: this
        }, item.name)));
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProductsPosition, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this.state.loading === true && prevState.loading === this.state.loading ? this.setState({
        loading: this.props.loading
      }) : null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.onpopstate = function () {
        _this2.setState({
          loading: true
        });
      };
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.onpopstate = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          typeComp = _this$props2.typeComp,
          product = _this$props2.product,
          categoriesChild = _this$props2.categoriesChild,
          categoriesChild_2 = _this$props2.categoriesChild_2,
          productsChild = _this$props2.productsChild,
          productDetail = _this$props2.productDetail;
      var renderComp = typeComp === 0 ? __jsx(_components_categoryComp__WEBPACK_IMPORTED_MODULE_16__["default"], {
        product: product,
        productsChild: productsChild,
        categoriesChild: categoriesChild,
        categoriesChild_2: categoriesChild_2,
        callback: function callback(res) {
          _this3.setState({
            loading: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }) : __jsx(_components_productComp__WEBPACK_IMPORTED_MODULE_17__["default"], {
        productDetail: productDetail,
        callback: function callback(res) {
          _this3.setState({
            loading: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      });
      return __jsx(_layouts_layout1__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, __jsx(_components_SharedComp_LoadingPage__WEBPACK_IMPORTED_MODULE_20__["default"], {
        isLoading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, __jsx("div", {
        id: "Products",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, __jsx("div", {
        className: "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_12__["Breadcrumb"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, this.renderBreadcrumb()), typeComp === 0 ? __jsx("h1", {
        className: "pb-25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, product.name) : null)), renderComp)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      return {
        loading: state.loading
      };
    }
  }]);

  return ProductsPosition;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(ProductsPosition));

/***/ })

})
//# sourceMappingURL=[slug].js.26bb8a11b247e1fc4bbf.hot-update.js.map