webpackHotUpdate("static/development/pages/products/[slug].js",{

/***/ "./src/components/ProductPage/productComp.js":
/*!***************************************************!*\
  !*** ./src/components/ProductPage/productComp.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _services_myService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/myService */ "./src/services/myService.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
var _jsxFileName = "/Volumes/Data/House/src/components/ProductPage/productComp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Panel = antd__WEBPACK_IMPORTED_MODULE_1__["Collapse"].Panel;
var text = "\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n";

var ProductComp = function ProductComp(_ref) {
  var productDetail = _ref.productDetail;
  return __jsx("div", {
    style: {
      background: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 14,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("img", {
    style: {
      width: '100%'
    },
    src: "/images/".concat(productDetail.url),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    span: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, productDetail.name), __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, " By ", __jsx("span", {
    style: {
      textDecoration: 'underline'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Truc Nguyen")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Rate"], {
    allowHalf: true,
    defaultValue: 2.5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), " ", __jsx("small", {
    style: {
      textDecoration: 'underline'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "50 Reviews"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), productDetail.sale ? __jsx("small", {
    className: "sale2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Sale") : null, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("p", {
    className: "mt-5 mb-0",
    style: {
      fontSize: '1.875rem',
      fontWeight: '500'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, _services_myService__WEBPACK_IMPORTED_MODULE_2__["MyService"].dotsNumber(productDetail.price)), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("span", {
    style: {
      textDecoration: 'line-through'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, _services_myService__WEBPACK_IMPORTED_MODULE_2__["MyService"].dotsNumber(productDetail.price + parseInt(productDetail.sale))), __jsx("span", {
    className: "primaryColor",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("b", {
    className: "ml-10 mr-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "60%"), "Off")), __jsx("div", {
    className: "mt-20",
    style: {
      display: 'flex'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
    style: {
      fontWeight: '500',
      flexGrow: '1',
      height: '53px'
    },
    formatter: function formatter(value) {
      return "Qty: ".concat(value);
    },
    min: 1,
    max: 10,
    defaultValue: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("button", {
    className: "my-btn ml-20",
    style: {
      borderRadius: '5px',
      fontSize: '1rem',
      flexGrow: '20'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Add to Cart")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    className: "mt-20",
    accordion: true,
    expandIcon: function expandIcon(_ref2) {
      var isActive = _ref2.isActive;
      return __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["CaretRightOutlined"], {
        rotate: isActive ? 90 : 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(Panel, {
    header: __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Product Description"),
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, text)), __jsx(Panel, {
    header: __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Product Specifications"),
    key: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, text)), __jsx(Panel, {
    header: __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Shipping and Returns"),
    key: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, text))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductComp);

/***/ })

})
//# sourceMappingURL=[slug].js.6b180c9c5761a39dc643.hot-update.js.map