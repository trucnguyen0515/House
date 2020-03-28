webpackHotUpdate("static/development/pages/products/[slug].js",{

/***/ "./src/components/ProductPage/categoryComp.js":
/*!****************************************************!*\
  !*** ./src/components/ProductPage/categoryComp.js ***!
  \****************************************************/
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
/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../const/routes */ "./src/const/routes.js");
/* harmony import */ var _services_myService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/myService */ "./src/services/myService.js");

var _jsxFileName = "/Volumes/Data/House/src/components/ProductPage/categoryComp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var CateComp1 = function CateComp1(_ref) {
  var SoLuongHienThiToiDa = _ref.SoLuongHienThiToiDa,
      TenHienThiToiDa = _ref.TenHienThiToiDa,
      categoriesChild = _ref.categoriesChild,
      categoriesChild_2 = _ref.categoriesChild_2,
      callback = _ref.callback;
  var count = 0;
  return __jsx("div", {
    style: {
      background: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, categoriesChild.map(function (res, i) {
    var categoriesChild_2_filter = categoriesChild_2.filter(function (val) {
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
      className: "pb-40",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: _const_routes__WEBPACK_IMPORTED_MODULE_6__["default"].ProductDetail.href,
      as: _const_routes__WEBPACK_IMPORTED_MODULE_6__["default"].ProductDetail.as(res.slug),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("h2", {
      className: "fs-19 mylink",
      onClick: function onClick() {
        return callback("loading");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, res.name)), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, renderItems_categoriesChild(SoLuongHienThiToiDa, TenHienThiToiDa, categoriesChild_2_filter, callback), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      span: 6,
      style: {
        marginTop: "12px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, renderRemainItems_categoriesChild(SoLuongHienThiToiDa, TenHienThiToiDa, res, categoriesChild_2, categoriesChild_2_filter, callback))));
  })));
};

var CateComp2 = function CateComp2(_ref2) {
  var SoLuongHienThiToiDa = _ref2.SoLuongHienThiToiDa,
      TenHienThiToiDa = _ref2.TenHienThiToiDa,
      categoriesChild = _ref2.categoriesChild,
      callback = _ref2.callback;
  return __jsx("div", {
    style: {
      background: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "pb-20 container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, renderItems_categoriesChild(SoLuongHienThiToiDa, TenHienThiToiDa, categoriesChild, callback), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 6,
    style: {
      marginTop: "12px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, renderRemainItems_categoriesChild(SoLuongHienThiToiDa, TenHienThiToiDa, null, categoriesChild, categoriesChild, callback))))));
};

var CateComp3 = function CateComp3(_ref3) {
  var categoriesChild = _ref3.categoriesChild,
      callback = _ref3.callback;
  return __jsx("div", {
    style: {
      background: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      paddingTop: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, categoriesChild.map(function (res, i) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      span: 4,
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
      className: "cateComp",
      onClick: function onClick() {
        return callback(1);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("img", {
      src: "/images/".concat(res.url),
      style: {
        width: '100%'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), __jsx("div", {
      className: "text-center p-15 titleChild",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, res.name))));
  }))));
};

var ProductsList = function ProductsList(_ref4) {
  var productsChild = _ref4.productsChild,
      callback = _ref4.callback;
  return __jsx("div", {
    className: "productsList mb-30 mt-15 container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
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
      lineNumber: 88
    },
    __self: this
  }, __jsx("button", {
    className: "btn_filter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSlidersH"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx("span", {
    className: "d-block ml-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "All Filters")))), __jsx("div", {
    style: {
      background: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, productsChild.map(function (res, i) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      span: 6,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: _const_routes__WEBPACK_IMPORTED_MODULE_6__["default"].ProductsList.href,
      as: _const_routes__WEBPACK_IMPORTED_MODULE_6__["default"].ProductsList.as(res.slug, res.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("div", {
      className: "productItems",
      onClick: function onClick() {
        return callback("loading");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx("img", {
      src: "/images/".concat(res.url),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }), __jsx("div", {
      className: "info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("span", {
      className: "d-block name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, res.name), __jsx("span", {
      className: "d-block price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, _services_myService__WEBPACK_IMPORTED_MODULE_7__["MyService"].dotsNumber(res.price)), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Rate"], {
      allowHalf: true,
      defaultValue: 2.5,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    })), res.sale ? __jsx("small", {
      className: "sale",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "Sale") : null)));
  }))));
};

var renderItems_categoriesChild = function renderItems_categoriesChild(SoLuongHienThiToiDa, TenHienThiToiDa, categoriesChild_2_filter, callback) {
  if (categoriesChild_2_filter.length > 0) {
    return categoriesChild_2_filter.map(function (res, i) {
      return i + 1 < SoLuongHienThiToiDa ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 6,
        style: {
          marginTop: '12px'
        },
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: _const_routes__WEBPACK_IMPORTED_MODULE_6__["default"].ProductDetail.href,
        as: _const_routes__WEBPACK_IMPORTED_MODULE_6__["default"].ProductDetail.as(res.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, __jsx("div", {
        className: "itemImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
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
          lineNumber: 129
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
          lineNumber: 130
        },
        __self: this
      }, res.name)))) : null;
    });
  }

  return null;
};

var renderRemainItems_categoriesChild = function renderRemainItems_categoriesChild(SoLuongHienThiToiDa, TenHienThiToiDa, Parent, categoriesChild_2, categoriesChild_2_filter, callback) {
  if (categoriesChild_2_filter.length === SoLuongHienThiToiDa) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, __jsx("div", {
      className: "itemImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, __jsx("img", {
      className: "imgItem",
      src: "/images/".concat(categoriesChild_2_filter[SoLuongHienThiToiDa - 1].url),
      style: {
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return callback(1);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
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
        lineNumber: 146
      },
      __self: this
    }, categoriesChild_2_filter[SoLuongHienThiToiDa - 1].name)));
  }

  if (categoriesChild_2_filter.length > SoLuongHienThiToiDa) {
    return categoriesChild_2_filter.map(function (res, i) {
      // Tối đa tổng số lương nhìn thấy === tổng số sản phẩm (Show hết)
      if (i + 1 >= SoLuongHienThiToiDa && i + 1 === categoriesChild_2.length) {
        var _jsx;

        return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], (_jsx = {
          key: i,
          span: 24,
          style: {
            marginTop: '12px'
          }
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "key", i), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
          fileName: _jsxFileName,
          lineNumber: 156
        }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, __jsx("p", {
          className: "mylink mt-8 mb-0 fs-16",
          onClick: function onClick() {
            return callback(1);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, res.name)));
      } // Tối đa tổng số lượng nhìn thấy, còn dư (Show all)


      if (i + 1 >= SoLuongHienThiToiDa && i + 1 === SoLuongHienThiToiDa + TenHienThiToiDa & i + 1 !== categoriesChild_2.length) {
        var _jsx2;

        return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], (_jsx2 = {
          key: i,
          span: 24,
          style: {
            marginTop: '12px'
          }
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "key", i), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__source", {
          fileName: _jsxFileName,
          lineNumber: 166
        }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx2, "__self", this), _jsx2), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: _const_routes__WEBPACK_IMPORTED_MODULE_6__["default"].ProductDetail.href,
          as: _const_routes__WEBPACK_IMPORTED_MODULE_6__["default"].ProductDetail.as(Parent.slug),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        }, __jsx("p", {
          className: "mylink mt-8 mb-0 fs-16 font-bold",
          onClick: function onClick() {
            return callback(1);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }, "Show All ", Parent.name, " ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faChevronRight"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }), " ")));
      }

      if (i + 1 >= SoLuongHienThiToiDa && i + 1 !== SoLuongHienThiToiDa + TenHienThiToiDa && i + 1 !== categoriesChild_2.length) {
        var _jsx3;

        return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], (_jsx3 = {
          key: i,
          span: 24,
          style: {
            marginTop: '12px'
          }
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx3, "key", i), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx3, "__source", {
          fileName: _jsxFileName,
          lineNumber: 175
        }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx3, "__self", this), _jsx3), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          __self: this
        }, __jsx("p", {
          className: "mylink mt-8 mb-0 fs-16",
          onClick: function onClick() {
            return callback(1);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
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
        - categoriesChild         : danh sách sản phẩm con của product F2
        - categoriesChild_2       : danh sách sản phẩm con của con product F3

*/


var CategoryComp = function CategoryComp(_ref5) {
  var product = _ref5.product,
      categoriesChild = _ref5.categoriesChild,
      categoriesChild_2 = _ref5.categoriesChild_2,
      productsChild = _ref5.productsChild,
      _callback = _ref5.callback;
  var choose = {
    0: __jsx(CateComp1, {
      SoLuongHienThiToiDa: 4,
      TenHienThiToiDa: 2,
      categoriesChild: categoriesChild,
      categoriesChild_2: categoriesChild_2,
      callback: function callback(res) {
        return _callback(res);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }),
    1: __jsx(CateComp2, {
      SoLuongHienThiToiDa: categoriesChild.length,
      TenHienThiToiDa: 0,
      categoriesChild: categoriesChild,
      callback: function callback(res) {
        return _callback(res);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }),
    2: __jsx(CateComp3, {
      categoriesChild: categoriesChild,
      callback: function callback(res) {
        return _callback(res);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }),
    3: __jsx(ProductsList, {
      productsChild: productsChild,
      callback: function callback(res) {
        return _callback(res);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    })
  };
  return choose[product.typeShow];
};

/* harmony default export */ __webpack_exports__["default"] = (CategoryComp);

/***/ })

})
//# sourceMappingURL=[slug].js.0ddd54b063efe7ef329a.hot-update.js.map