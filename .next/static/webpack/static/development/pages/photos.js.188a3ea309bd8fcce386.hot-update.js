webpackHotUpdate("static/development/pages/photos.js",{

/***/ "./src/pages/photos/index.js":
/*!***********************************!*\
  !*** ./src/pages/photos/index.js ***!
  \***********************************/
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
/* harmony import */ var _layouts_layout1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layouts/layout1 */ "./src/layouts/layout1.js");
/* harmony import */ var _components_SharedComp_LoadingPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SharedComp/LoadingPage */ "./src/components/SharedComp/LoadingPage.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../data/data */ "./src/data/data.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../const/routes */ "./src/const/routes.js");







var _jsxFileName = "/Volumes/Data/House/src/pages/photos/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;










var PhotoPage = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PhotoPage, _Component);

  function PhotoPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PhotoPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PhotoPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      loading: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderBreadcrumb", function () {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Breadcrumb"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Breadcrumb"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("h1", {
        className: "mt-10 mb-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Home Design Ideas")));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderCategory", function () {
      return _data_data__WEBPACK_IMPORTED_MODULE_11__["dataPhotoCatories"].map(function (res, i) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], {
          span: 3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, __jsx("div", {
          className: "itemCate mb-25",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, __jsx("img", {
          style: {
            width: '100%'
          },
          src: "/images/".concat(res.url),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }), __jsx("span", {
          className: "d-block text-center p-15",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, res.name)));
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PhotoPage, [{
    key: "render",
    value: function render() {
      var breadcrumb = this.renderBreadcrumb();
      var dataPhotoCategories = this.renderCategory();
      return __jsx(_layouts_layout1__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx(_components_SharedComp_LoadingPage__WEBPACK_IMPORTED_MODULE_9__["default"], {
        isLoading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("div", {
        id: "PhotoPage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("div", {
        className: "infoCategoryPhoto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, breadcrumb), __jsx("div", {
        className: "photosCategory container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, dataPhotoCategories))), __jsx("div", {
        className: "listCategoryPhoto mt-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        style: {
          boxShadow: '0 1px 3px 0 rgba(0,0,0,.08)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("div", {
        style: {
          padding: '20px',
          background: 'white',
          borderBottom: '1px solid #dddddd8c'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("button", {
        className: "btn_filter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("div", {
        style: {
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__["faSlidersH"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), __jsx("span", {
        className: "d-block ml-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "All Filters")))), __jsx("div", {
        style: {
          background: 'white',
          padding: '20px',
          marginBottom: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, _data_data__WEBPACK_IMPORTED_MODULE_11__["dataProductPhotos"].map(function (res, i) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], {
          span: 8,
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
          href: _const_routes__WEBPACK_IMPORTED_MODULE_15__["default"].PhotoDetails.href,
          as: _const_routes__WEBPACK_IMPORTED_MODULE_15__["default"].PhotoDetails.as(res.slug, res.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, __jsx("div", {
          className: "PhotoDetails",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, __jsx("img", {
          src: "/images/".concat(res.url),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }), __jsx("h4", {
          className: "mt-10 mb-8",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, res.name), __jsx("span", {
          className: "fs-13",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, "By  ", __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, "Nguyen Truc")))));
      }))))))));
    }
  }]);

  return PhotoPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PhotoPage);

/***/ })

})
//# sourceMappingURL=photos.js.188a3ea309bd8fcce386.hot-update.js.map