webpackHotUpdate("static/development/pages/photos/[slug].js",{

/***/ "./src/pages/photos/[slug].js":
/*!************************************!*\
  !*** ./src/pages/photos/[slug].js ***!
  \************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layouts_layout1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layouts/layout1 */ "./src/layouts/layout1.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");





var _jsxFileName = "/Volumes/Data/House/src/pages/photos/[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







var data = ['Can you please share the paint color? Thank you.', 'Japanese princess to wed commoner.', 'Australian walks 100km after outback crash.', 'Man charged over missing wedding girl.', 'Los Angeles battles huge wildfires.'];

var PhotoCategory = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PhotoCategory, _Component);

  function PhotoCategory() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PhotoCategory);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PhotoCategory).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PhotoCategory, [{
    key: "render",
    value: function render() {
      console.log(this.props);
      return __jsx(_layouts_layout1__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("div", {
        id: "PhotoCategory",
        style: {
          background: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("div", {
        className: "container pt-20 pb-50",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        span: 17,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("div", {
        className: "borderImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        className: "left",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faChevronLeft"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        className: "right",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faChevronRight"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), __jsx("img", {
        style: {
          height: '578px'
        },
        src: "/images/".concat(this.props.PhotoDetails.url),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), __jsx("div", {
        className: "btns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("button", {
        className: "btn--save",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faPaperPlane"],
        className: "mr-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), " Save"), __jsx("button", {
        className: "btn--share ml-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faHeart"],
        className: "mr-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), " Share"))), __jsx("div", {
        className: "mt-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, this.props.PhotoDetails.name), __jsx("small", {
        style: {
          color: 'rgb(102,102,102)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Transitional Bathroom, Minneapolis"), __jsx("p", {
        style: {
          fontWeight: '300',
          borderBottom: '1px solid rgb(230,230,230)'
        },
        className: "mt-10 pb-10",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Martha O'Hara Interiors, Interior Design & Photo Styling | City Homes, Builder | Troy Thies, Photography Please Note: All \u201Crelated,\u201D \u201Csimilar,\u201D and \u201Csponsored\u201D products tagged or listed by Houzz are not actual products pictured. They have not been approved by Martha O\u2019Hara Interiors nor any of the professionals credited. For information about our work, please contact design@oharainteriors.com."), __jsx("div", {
        className: "pb-15 d-flex",
        style: {
          borderBottom: '1px solid rgb(230,230,230)',
          justifyContent: 'space-between'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("div", {
        className: "d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("img", {
        style: {
          borderRadius: '50%',
          width: '40px',
          height: '40px'
        },
        src: "/images/user1.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("span", {
        className: "d-block ml-10 fs-13",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Truc Nguyen"), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Rate"], {
        style: {
          marginLeft: '10px'
        },
        allowHalf: true,
        defaultValue: 5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), " ", __jsx("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, " 155 Review"))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("button", {
        className: "btn",
        style: {
          fontSize: '13px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Follow"))), __jsx("div", {
        className: "mt-40",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Questions About This Photo (58)"), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["List"], {
        size: "large",
        header: __jsx("div", {
          className: "d-flex",
          style: {
            alignItems: 'center',
            justifyContent: 'space-between'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }, __jsx("div", {
          className: "d-flex",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, __jsx("img", {
          style: {
            borderRadius: '50%',
            width: '40px',
            height: '40px'
          },
          src: "/images/user1.jpg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }), __jsx("span", {
          style: {
            display: 'flex'
          },
          className: "d-block ml-10 fs-13",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, __jsx("div", {
          style: {
            alignSelf: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, __jsx("b", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, "Truc Nguyen"), "  wrote:"))), __jsx("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, "April 6, 2016")),
        footer: __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, "Footer"),
        bordered: true,
        dataSource: data,
        renderItem: function renderItem(item) {
          return __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["List"].Item, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }, item);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        span: 7,
        style: {
          paddingLeft: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx("span", {
        className: "d-block mb-10",
        style: {
          marginLeft: '0px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Order Photos"), __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, this.props.PhotoDetails.images.map(function (item, i) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Col"], {
          span: 12,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, __jsx("img", {
          className: "mb-15",
          style: {
            width: '159px',
            height: '159px'
          },
          key: i,
          src: "/images/".concat(item),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }));
      })))))));
    }
  }]);

  return PhotoCategory;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(PhotoCategory));

/***/ })

})
//# sourceMappingURL=[slug].js.e752b4fa9be069c12dde.hot-update.js.map