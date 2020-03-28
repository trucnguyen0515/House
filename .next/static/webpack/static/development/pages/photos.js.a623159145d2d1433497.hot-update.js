webpackHotUpdate("static/development/pages/photos.js",{

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/*! exports provided: dataProducts, dataCategories, dataCatories2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataProducts", function() { return dataProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataCategories", function() { return dataCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataCatories2", function() { return dataCatories2; });
/*
    View chỉ ap dụng data có dạng 3 phân cấp: F1 -> F2 -> F3 -> Products

    Properties:
        typeShow: loại hiển thị danh mục theo layout. Nếu typeShow = 3 thì children sẽ là id theo bảng products
*/
var dataProducts = [{
  id: '1',
  idParent: '18',
  name: 'Desoto Sofa',
  slug: 'desoto-sofa',
  price: 12000,
  sale: '3000',
  url: 'products1.jpg',
  provider: ''
}, {
  id: '2',
  idParent: '18',
  name: 'Cotoro Sofa',
  slug: 'cotoro-sofa',
  price: 10000,
  sale: '50',
  url: 'products2.jpg',
  provider: ''
}, {
  id: '3',
  idParent: '18',
  name: 'Dania Sofa',
  slug: 'dania-sofa',
  price: 15000,
  sale: '',
  url: 'products3.jpg',
  provider: ''
}, {
  id: '4',
  idParent: '18',
  name: 'Kaito Sofa',
  slug: 'kaito-sofa',
  price: 90000,
  sale: '',
  url: 'products4.jpg',
  provider: ''
}, {
  id: '5',
  idParent: '18',
  name: 'Desoto Sofa',
  slug: 'desoto-sofa',
  price: 12000,
  sale: '30',
  url: 'products1.jpg',
  provider: ''
}, {
  id: '6',
  idParent: '18',
  name: 'Cotoro Sofa',
  slug: 'cotoro-sofa',
  price: 10000,
  sale: '50',
  url: 'products2.jpg',
  provider: ''
}, {
  id: '7',
  idParent: '18',
  name: 'Dania Sofa',
  slug: 'dania-sofa',
  price: 15000,
  sale: '',
  url: 'products3.jpg',
  provider: ''
}, {
  id: '8',
  idParent: '18',
  slug: 'kaito-sofa',
  price: 90000,
  sale: '',
  url: 'products4.jpg',
  provider: ''
}];
var dataCategories = [// Cha
{
  id: '1',
  name: 'Furniture',
  slug: 'furniture',
  url: 'cate1.jpg',
  breadcrumb: [],
  parent: [],
  children: ['7', '8', '9', '10', '11'],
  typeShow: 0
}, {
  id: '2',
  name: 'Kitchen & Dining',
  slug: 'kitchen-dining',
  url: 'cate2.jpg',
  breadcrumb: [],
  parent: [],
  children: [],
  typeShow: 0
}, {
  id: '3',
  name: 'Bath',
  url: 'cate3.jpg',
  slug: 'bath',
  breadcrumb: [],
  parent: [],
  children: [],
  typeShow: 1
}, {
  id: '4',
  name: 'Lighting',
  url: 'cate1.jpg',
  slug: 'ligting',
  breadcrumb: [],
  parent: [],
  children: ['12'],
  typeShow: 1
}, {
  id: '5',
  name: 'Living',
  url: 'cate2.jpg',
  slug: 'living',
  breadcrumb: [],
  parent: [],
  children: ['12', '13', '14', '15', '16', '17'],
  typeShow: 1
}, {
  id: '6',
  name: 'Bedroom',
  url: 'cate3.jpg',
  slug: 'bedroom',
  breadcrumb: [],
  parent: [],
  children: [],
  typeShow: 1
}, // Con
{
  id: '7',
  name: 'Living Room Furniture',
  slug: 'luving-room-furniture',
  breadcrumb: ['1'],
  parent: ['1'],
  children: ['12', '112', '13', '14', '15', '16', '17'],
  typeShow: 2
}, {
  id: '8',
  name: 'Kitchen & Dining Furniture',
  slug: 'kitchen-dining-furniture',
  breadcrumb: ['1'],
  parent: ['1'],
  children: [],
  typeShow: 2
}, {
  id: '9',
  name: 'Bedroom Furniture',
  slug: 'bedroom-furniture',
  breadcrumb: ['1'],
  parent: ['1'],
  children: [],
  typeShow: 2
}, {
  id: '10',
  name: 'Outdoor Furniture',
  slug: 'outdoor-furniture',
  breadcrumb: ['1'],
  parent: ['1'],
  children: [],
  typeShow: 2
}, {
  id: '11',
  name: 'Home Office Furniture',
  slug: 'home-office-furniture',
  breadcrumb: ['1'],
  parent: ['1'],
  children: [],
  typeShow: 2
}, {
  id: '12',
  name: 'Sofas & Sectionals',
  url: 'productsPosition1.jpg',
  slug: 'sofas-sectionals',
  breadcrumb: ['5'],
  parent: ['7', '5'],
  children: ['18', '19', '20', '21', '22', '23'],
  typeShow: 2
}, {
  id: '112',
  name: 'Home Decor',
  url: 'productsPosition2.jpg',
  slug: 'home-decor',
  breadcrumb: ['7'],
  parent: ['7'],
  children: [],
  typeShow: 2
}, {
  id: '13',
  url: 'productsPosition2.jpg',
  name: 'Coffee & Accent Table',
  slug: 'coffee-accent-table',
  breadcrumb: ['5'],
  parent: ['7', '5'],
  children: [],
  typeShow: 2
}, {
  id: '14',
  url: 'ProductsPosition3.jpg',
  name: 'Chairs',
  slug: 'chairs',
  breadcrumb: ['5'],
  parent: ['7', '5'],
  children: [],
  typeShow: 2
}, {
  id: '15',
  url: 'productsPosition1.jpg',
  name: 'Media Storage',
  slug: 'media-storage',
  breadcrumb: ['5'],
  parent: ['7', '5'],
  children: [],
  typeShow: 2
}, {
  id: '16',
  url: 'productsPosition2.jpg',
  name: 'Bookcases',
  slug: 'bookcases',
  breadcrumb: ['5'],
  parent: ['7', '5'],
  children: [],
  typeShow: 2
}, {
  id: '17',
  url: 'productsPosition3.jpg',
  name: 'Footstools & Ottomans',
  slug: 'chairs',
  breadcrumb: ['5'],
  parent: ['7', '5'],
  children: [],
  typeShow: 2
}, {
  id: '18',
  url: 'cate3-1.jpg',
  name: 'Sofas',
  slug: 'sofas',
  breadcrumb: ['5', '12'],
  parent: ['12'],
  children: ['1', '2', '3', '4', '5', '6', '7', '8'],
  typeShow: 3
}, {
  id: '19',
  url: 'cate3-2.jpg',
  name: 'Sectional Sofas',
  slug: 'sectional-sofas',
  breadcrumb: ['12'],
  parent: ['12'],
  children: [],
  typeShow: 3
}, {
  id: '20',
  url: 'cate3-3.jpg',
  name: 'Love Seat',
  slug: 'love-seat',
  breadcrumb: ['12'],
  parent: ['12'],
  children: [],
  typeShow: 3
}, {
  id: '21',
  url: 'cate3-4.jpg',
  name: 'Futons and Accessories',
  slug: 'futons-and-accessories',
  breadcrumb: ['12'],
  parent: ['12'],
  children: [],
  typeShow: 3
}, {
  id: '22',
  url: 'cate3-5.jpg',
  name: 'Sleeper Sofas',
  slug: 'sleeper-sofas',
  breadcrumb: ['12'],
  parent: ['12'],
  children: [],
  typeShow: 3
}, {
  id: '23',
  url: 'cate3-6.jpg',
  name: 'Living Room Furniture Seat',
  slug: 'living-room-furniture-seat',
  breadcrumb: ['12'],
  parent: ['12'],
  children: [],
  typeShow: 3
}]; // danh cho photos

var dataCatories2 = [{
  id: 1,
  name: 'Kitchen',
  url: 'photos1.jpg'
}, {
  id: 2,
  name: 'Bath',
  url: 'photos2.jpg'
}, {
  id: 3,
  name: 'Bedroom',
  url: 'photos3.jpg'
}, {
  id: 4,
  name: 'Living',
  url: 'photos4.jpg'
}, {
  id: 5,
  name: 'Dining',
  url: 'photos1.jpg'
}, {
  id: 6,
  name: 'Outdoor',
  url: 'photos2.jpg'
}, {
  id: 7,
  name: 'Baby Kid',
  url: 'photos3.jpg'
}, {
  id: 8,
  name: 'Home Office',
  url: 'photos4.jpg'
}];

/***/ }),

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
          lineNumber: 14
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_10__["Breadcrumb"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "Home Design Ideas")));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderCategory", function () {
      dataPhotoCatories;
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PhotoPage, [{
    key: "render",
    value: function render() {
      var breadcrumb = this.renderBreadcrumb();
      return __jsx(_layouts_layout1__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, __jsx(_components_SharedComp_LoadingPage__WEBPACK_IMPORTED_MODULE_9__["default"], {
        isLoading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, breadcrumb), __jsx("div", {
        className: "photosCategory",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })));
    }
  }]);

  return PhotoPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PhotoPage);

/***/ })

})
//# sourceMappingURL=photos.js.a623159145d2d1433497.hot-update.js.map