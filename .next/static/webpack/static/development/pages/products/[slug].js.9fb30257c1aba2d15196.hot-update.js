webpackHotUpdate("static/development/pages/products/[slug].js",{

/***/ "./src/layouts/layout1Comp/MegaMenu.js":
/*!*********************************************!*\
  !*** ./src/layouts/layout1Comp/MegaMenu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MegaMenu; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../const/routes */ "./src/const/routes.js");





var _jsxFileName = "/Volumes/Data/House/src/layouts/layout1Comp/MegaMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;





var data = {
  1: [{
    title: 'kitchen & dining',
    data: ['kitchen', 'dining room', 'pantry', 'great room']
  }, {
    title: 'bed & bath',
    data: ['bath room', 'powder room', 'bedroom', 'baby & kids']
  }, {
    title: 'living',
    data: ['living room', 'family room', 'sunroom', 'home theater']
  }, {
    title: 'outdoor',
    data: ['landscape', 'Patio', 'Deck', 'Pool']
  }, {
    title: 'more room',
    data: ['exterior', 'entry', 'hall', 'home office']
  }]
}; // stt la so thu tu cua div 

var alignDivMenu = function alignDivMenu(div, stt) {
  $(div).find(".menu").css({
    'display': 'block'
  });

  if (stt >= 1 && stt <= 3) {
    var px;
    px = stt === 1 ? '-1px' : stt === 2 ? '-140px' : stt === 3 ? '-400px' : '0';
    $(div).find(".menu").css({
      left: px
    });
  }

  if (stt > 3 && stt <= 5) {
    var _px;

    _px = stt === 5 ? '-1px' : '-120px';
    $(div).find(".menu").css({
      right: _px
    });
  }
};

var HoverMenu = function HoverMenu() {
  $("#MegaMenu .item").hover(function () {
    $(this).addClass("hoverMenu"); // get stt

    var stt = $(this).attr("class").split(" ")[1];
    stt = parseInt(stt[stt.length - 1]); // line transparent

    $(this).append("\n            <div class=\"line\"></div>\n        "); //css

    alignDivMenu(this, stt); // debugger
  }, function () {
    $("#MegaMenu .line").remove();
    $(this).removeClass("hoverMenu");
    $(this).find(".menu").css({
      'display': 'none'
    });
  });
};

var MegaMenu = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MegaMenu, _Component);

  function MegaMenu() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MegaMenu);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MegaMenu).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MegaMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      HoverMenu();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        id: "MegaMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx("div", {
        className: "parent container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("div", {
        className: "item item1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faPhotoVideo"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), __jsx("span", {
        className: "nameMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "photos"), __jsx("div", {
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("div", {
        style: {
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, data[1].map(function (res, j) {
        return __jsx("div", {
          key: j,
          className: "itemMenu",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, __jsx("h4", {
          className: "title mb-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, res.title), __jsx("ul", {
          style: {
            marginBottom: 0,
            listStyleType: 'none'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, res.data.map(function (res2, i) {
          return __jsx("p", {
            key: i,
            className: "m-0 mylink",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/aa",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          }, __jsx("small", {
            className: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          }, res2)));
        })));
      })))), __jsx("div", {
        className: "item item2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: _const_routes__WEBPACK_IMPORTED_MODULE_9__["default"].Products.href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faShoppingBasket"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }), __jsx("span", {
        className: "nameMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "shop by department"), __jsx("div", {
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, __jsx("div", {
        style: {
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, data[1].map(function (res, j) {
        return __jsx("div", {
          key: j,
          className: "itemMenu",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, __jsx("h4", {
          className: "title mb-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, res.title), __jsx("ul", {
          style: {
            marginBottom: 0,
            listStyleType: 'none'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, res.data.map(function (res2, i) {
          return __jsx("p", {
            key: i,
            className: "m-0",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123
            },
            __self: this
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/aa",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123
            },
            __self: this
          }, __jsx("small", {
            className: "mylink",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123
            },
            __self: this
          }, res2)));
        })));
      })))))), __jsx("div", {
        className: "item item3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faUserAstronaut"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), __jsx("span", {
        className: "nameMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "shop by department"), __jsx("div", {
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, __jsx("div", {
        style: {
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, data[1].map(function (res, j) {
        return __jsx("div", {
          key: j,
          className: "itemMenu",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }, __jsx("h4", {
          className: "title mb-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, res.title), __jsx("ul", {
          style: {
            marginBottom: 0,
            listStyleType: 'none'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, res.data.map(function (res2, i) {
          return __jsx("p", {
            key: i,
            className: "m-0",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 151
            },
            __self: this
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/aa",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 151
            },
            __self: this
          }, __jsx("small", {
            className: "mylink",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 151
            },
            __self: this
          }, res2)));
        })));
      })))), __jsx("div", {
        className: "item item4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faBookReader"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }), __jsx("span", {
        className: "nameMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "stories & advice"), __jsx("div", {
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, __jsx("div", {
        style: {
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, data[1].map(function (res, j) {
        return __jsx("div", {
          key: j,
          className: "itemMenu",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        }, __jsx("h4", {
          className: "title mb-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          },
          __self: this
        }, res.title), __jsx("ul", {
          style: {
            marginBottom: 0,
            listStyleType: 'none'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, res.data.map(function (res2, i) {
          return __jsx("p", {
            key: i,
            className: "m-0",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176
            },
            __self: this
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/aa",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176
            },
            __self: this
          }, __jsx("small", {
            className: "mylink",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176
            },
            __self: this
          }, res2)));
        })));
      })))), __jsx("div", {
        className: "item item5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faGift"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }), __jsx("span", {
        className: "nameMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "SALE"), __jsx("div", {
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, __jsx("div", {
        style: {
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, data[1].map(function (res, j) {
        return __jsx("div", {
          key: j,
          className: "itemMenu",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          },
          __self: this
        }, __jsx("h4", {
          className: "title mb-10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }, res.title), __jsx("ul", {
          style: {
            marginBottom: 0,
            listStyleType: 'none'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }, res.data.map(function (res2, i) {
          return __jsx("p", {
            key: i,
            className: "m-0",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 201
            },
            __self: this
          }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
            href: "/aa",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 201
            },
            __self: this
          }, __jsx("small", {
            className: "mylink",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 201
            },
            __self: this
          }, res2)));
        })));
      }))))));
    }
  }]);

  return MegaMenu;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

})
//# sourceMappingURL=[slug].js.9fb30257c1aba2d15196.hot-update.js.map