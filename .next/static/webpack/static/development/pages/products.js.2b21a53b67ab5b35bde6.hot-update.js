webpackHotUpdate("static/development/pages/products.js",{

/***/ "./src/pages/products/index.js":
/*!*************************************!*\
  !*** ./src/pages/products/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../data/data */ "./src/data/data.js");
/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../const/routes */ "./src/const/routes.js");
/* harmony import */ var _layouts_layout1__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../layouts/layout1 */ "./src/layouts/layout1.js");
/* harmony import */ var _components_SharedComp_LoadingPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/SharedComp/LoadingPage */ "./src/components/SharedComp/LoadingPage.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _scss_pages_products_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../scss/pages/products.scss */ "./src/scss/pages/products.scss");
/* harmony import */ var _scss_pages_products_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_scss_pages_products_scss__WEBPACK_IMPORTED_MODULE_17__);







var _jsxFileName = "/Volumes/Data/House/src/pages/products/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;








 // import "jquery";




var ProductPage = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ProductPage, _Component);

  function ProductPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProductPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      loading: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "arrLengthThan0", []);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderCategories", function () {
      return _data_data__WEBPACK_IMPORTED_MODULE_12__["dataCategories"].map(function (res, i) {
        if (res.parent.length === 0) {
          return __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
            key: i,
            href: _const_routes__WEBPACK_IMPORTED_MODULE_13__["default"].ProductDetail.href,
            as: _const_routes__WEBPACK_IMPORTED_MODULE_13__["default"].ProductDetail.as(res.slug),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }, __jsx("p", {
            className: "mylink mb-5",
            onClick: function onClick() {
              return _this.setState({
                loading: true
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }, res.name));
        }
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderProducts_child", function (idParent) {
      var SoLuongSPMuonHienThi = 4;
      var itemsChild = [];
      var i = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _data_data__WEBPACK_IMPORTED_MODULE_12__["dataCategories"][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var res = _step.value;

          if (res.parent.length > 0) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = res.parent[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var res2 = _step2.value;

                if (res2 === idParent && i < SoLuongSPMuonHienThi) {
                  itemsChild.push(res);
                  i++;
                }
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
          }
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

      return itemsChild.map(function (res, i) {
        return itemsChild.length - 1 === i ? __jsx("div", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "".concat(res.url),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, __jsx("p", {
          className: "mylink mb-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, res.name)), __jsx("p", {
          className: "mylink mb-5",
          style: {
            fontWeight: "bold"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, "Show All ", res.name, " ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
          className: "ml-5",
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faChevronRight"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "".concat(res.url),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, __jsx("p", {
          key: i,
          className: "mylink mb-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, res.name));
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderProducts", function () {
      _this.arrLengthThan0 = [];
      return _data_data__WEBPACK_IMPORTED_MODULE_12__["dataCategories"].map(function (res, i) {
        if (res.parent.length === 0) {
          return __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
            span: 8,
            key: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }, __jsx("div", {
            className: "product",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
            href: _const_routes__WEBPACK_IMPORTED_MODULE_13__["default"].ProductDetail.href,
            as: _const_routes__WEBPACK_IMPORTED_MODULE_13__["default"].ProductDetail.as(res.slug),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }, __jsx("img", {
            src: "/images/".concat(res.url),
            onClick: function onClick() {
              return _this.setState({
                loading: true
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: this
          })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
            href: _const_routes__WEBPACK_IMPORTED_MODULE_13__["default"].ProductDetail.href,
            as: _const_routes__WEBPACK_IMPORTED_MODULE_13__["default"].ProductDetail.as(res.slug),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, __jsx("span", {
            className: "title mylink",
            onClick: function onClick() {
              return _this.setState({
                loading: true
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          }, res.name)), __jsx("div", {
            className: "list mt-10",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            },
            __self: this
          }, _this.renderProducts_child(res.id))));
        }

        _this.arrLengthThan0.push(res);
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductPage, [{
    key: "render",
    value: function render() {
      var categories = this.renderCategories();
      var products = this.renderProducts();
      return __jsx(_layouts_layout1__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, __jsx(_components_SharedComp_LoadingPage__WEBPACK_IMPORTED_MODULE_15__["default"], {
        isLoading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, __jsx("div", {
        id: "indexProduct",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        span: 6,
        style: {
          marginTop: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx("div", {
        className: "categories",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, __jsx("h3", {
        className: "text-bold mb-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Categories"), categories)), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        span: 18,
        style: {
          marginTop: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Carousel"], {
        autoplay: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, __jsx("div", {
        className: "img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx("img", {
        src: "/images/banner1.jpg",
        alt: "house1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      })), __jsx("div", {
        className: "img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, __jsx("img", {
        src: "/images/banner2.jpg",
        alt: "house1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      })))), products)))));
    }
  }]);

  return ProductPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProductPage);

/***/ })

})
//# sourceMappingURL=products.js.2b21a53b67ab5b35bde6.hot-update.js.map