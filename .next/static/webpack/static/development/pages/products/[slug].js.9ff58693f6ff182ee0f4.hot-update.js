webpackHotUpdate("static/development/pages/products/[slug].js",{

/***/ "./src/components/categoryComp.js":
/*!****************************************!*\
  !*** ./src/components/categoryComp.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../const/routes */ "./src/const/routes.js");

var _jsxFileName = "/Volumes/Data/House/src/components/categoryComp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var CateComp1 = function CateComp1(_ref) {
  var SoLuongHienThiToiDa = _ref.SoLuongHienThiToiDa,
      TenHienThiToiDa = _ref.TenHienThiToiDa,
      productsChild = _ref.productsChild,
      productsChild_2 = _ref.productsChild_2,
      callback = _ref.callback;
  var count = 0;
  return productsChild.map(function (res, i) {
    var productsChild_2_filter = productsChild_2.filter(function (val) {
      var kq = val.parent.filter(function (x) {
        if (x === res.id && count < SoLuongHienThiToiDa + TenHienThiToiDa) {
          count++;
          return true;
        }

        return false;
      });
      return kq.length > 0 ? true : false;
    });
    return __jsx("div", {
      className: "mb-40",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("h2", {
      className: "fs-19 mt-25",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, res.name), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, renderItems_productsChild(SoLuongHienThiToiDa, TenHienThiToiDa, productsChild_2_filter, callback), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      span: 6,
      style: {
        marginTop: "12px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, renderRemainItems_productsChild(SoLuongHienThiToiDa, TenHienThiToiDa, res.name, productsChild_2, productsChild_2_filter, callback))));
  });
};

var CateComp2 = function CateComp2(_ref2) {
  var SoLuongHienThiToiDa = _ref2.SoLuongHienThiToiDa,
      TenHienThiToiDa = _ref2.TenHienThiToiDa,
      productsChild = _ref2.productsChild,
      callback = _ref2.callback;
  return __jsx("div", {
    className: "mb-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, renderItems_productsChild(SoLuongHienThiToiDa, TenHienThiToiDa, productsChild, callback), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 6,
    style: {
      marginTop: "12px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, renderRemainItems_productsChild(SoLuongHienThiToiDa, TenHienThiToiDa, null, productsChild, productsChild, callback))));
};

var CateComp3 = function CateComp3(_ref3) {
  var productsChild = _ref3.productsChild,
      callback = _ref3.callback;
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, productsChild.map(function (res, i) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      span: 4,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("div", {
      className: "cateComp",
      onClick: function onClick() {
        return callback(1);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("img", {
      src: "/images/".concat(res.url),
      style: {
        width: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), __jsx("div", {
      className: "text-center p-15 titleChild mt-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, res.name))));
  }));
};

var renderItems_productsChild = function renderItems_productsChild(SoLuongHienThiToiDa, TenHienThiToiDa, productsChild_2_filter, callback) {
  if (productsChild_2_filter.length > 0) {
    return productsChild_2_filter.map(function (res, i) {
      return i + 1 < SoLuongHienThiToiDa ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 6,
        style: {
          marginTop: '12px'
        },
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: _const_routes__WEBPACK_IMPORTED_MODULE_6__["default"].ProductDetail.href,
        as: _const_routes__WEBPACK_IMPORTED_MODULE_6__["default"].ProductDetail.as(res.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("div", {
        className: "itemImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("img", {
        className: "imgItem",
        src: "/images/".concat(res.url),
        style: {
          cursor: 'pointer'
        },
        onClick: function onClick() {
          return callback(1);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), __jsx("span", {
        className: "title",
        style: {
          width: '120px',
          display: 'block'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, res.name)))) : null;
    });
  }

  return null;
};

var renderRemainItems_productsChild = function renderRemainItems_productsChild(SoLuongHienThiToiDa, TenHienThiToiDa, nameParent, productsChild_2, productsChild_2_filter) {
  if (productsChild_2_filter.length === SoLuongHienThiToiDa) {
    return __jsx("div", {
      className: "itemImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx("img", {
      className: "imgItem",
      src: "/images/".concat(productsChild_2_filter[SoLuongHienThiToiDa - 1].url),
      style: {
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return callback(1);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    })), __jsx("span", {
      className: "title",
      style: {
        width: '120px',
        display: 'block'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, productsChild_2_filter[SoLuongHienThiToiDa - 1].name));
  }

  if (productsChild_2_filter.length > SoLuongHienThiToiDa) {
    return productsChild_2_filter.map(function (res, i) {
      // Tối đa tổng số lương nhìn thấy === tổng số sản phẩm (Show hết)
      if (i + 1 >= SoLuongHienThiToiDa && i + 1 === productsChild_2.length) {
        var _jsx;

        return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], (_jsx = {
          key: i,
          span: 24,
          style: {
            marginTop: '12px'
          }
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "key", i), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
          fileName: _jsxFileName,
          lineNumber: 99
        }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, __jsx("p", {
          className: "mylink mt-8 mb-0 fs-16",
          onClick: function onClick() {
            return callback(1);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, res.name)));
      } // Tối đa tổng số lượng nhìn thấy, còn dư (Show all)


      if (i + 1 >= SoLuongHienThiToiDa && i + 1 === SoLuongHienThiToiDa + TenHienThiToiDa & i + 1 !== productsChild_2.length) {
        var _jsx2;

        return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], (_jsx2 = {
          key: i,
          span: 24,
          style: {
            marginTop: '12px'
          }
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "key", i), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__source", {
          fileName: _jsxFileName,
          lineNumber: 109
        }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__self", this), _jsx2), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, __jsx("p", {
          className: "mylink mt-8 mb-0 fs-16 font-bold",
          onClick: function onClick() {
            return callback(1);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, "Show All ", nameParent, " ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChevronRight"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }), " ")));
      }

      if (i + 1 >= SoLuongHienThiToiDa && i + 1 !== SoLuongHienThiToiDa + TenHienThiToiDa && i + 1 !== productsChild_2.length) {
        var _jsx3;

        return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], (_jsx3 = {
          key: i,
          span: 24,
          style: {
            marginTop: '12px'
          }
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx3, "key", i), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx3, "__source", {
          fileName: _jsxFileName,
          lineNumber: 118
        }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx3, "__self", this), _jsx3), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, __jsx("p", {
          className: "mylink mt-8 mb-0 fs-16",
          onClick: function onClick() {
            return callback(1);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, res.name)));
      }
    });
  }

  return null;
};
/*
    CateComp1 
        - SoLuongHienThiToiDa   : 
        - TenHienThiToiDa       :
        - Product               : Sản phẩm category F1
        - productsChild         : danh sách sản phẩm con của product F2
        - productsChild_2       : danh sách sản phẩm con của con product F3

*/


var CategoryComp = function CategoryComp(_ref4) {
  var product = _ref4.product,
      productsChild = _ref4.productsChild,
      productsChild_2 = _ref4.productsChild_2,
      callback = _ref4.callback;
  var choose = {
    0: __jsx(CateComp1, {
      SoLuongHienThiToiDa: 4,
      TenHienThiToiDa: 2,
      productsChild: productsChild,
      productsChild_2: productsChild_2,
      callback: function (_callback) {
        function callback(_x) {
          return _callback.apply(this, arguments);
        }

        callback.toString = function () {
          return _callback.toString();
        };

        return callback;
      }(function (res) {
        return callback(res);
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }),
    1: __jsx(CateComp2, {
      SoLuongHienThiToiDa: productsChild.length,
      TenHienThiToiDa: 0,
      productsChild: productsChild,
      callback: function (_callback2) {
        function callback(_x2) {
          return _callback2.apply(this, arguments);
        }

        callback.toString = function () {
          return _callback2.toString();
        };

        return callback;
      }(function (res) {
        return callback(res);
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }),
    2: __jsx(CateComp3, {
      productsChild: productsChild,
      callback: function (_callback3) {
        function callback(_x3) {
          return _callback3.apply(this, arguments);
        }

        callback.toString = function () {
          return _callback3.toString();
        };

        return callback;
      }(function (res) {
        return callback(res);
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    })
  };
  return choose[product.typeShow];
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryComp);

/***/ })

})
//# sourceMappingURL=[slug].js.9ff58693f6ff182ee0f4.hot-update.js.map