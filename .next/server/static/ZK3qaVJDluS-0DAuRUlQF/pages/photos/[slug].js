module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "1cfC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dataProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dataPhotoCatories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return dataProductPhotos; });
/*
    View chỉ ap dụng data có dạng 3 phân cấp: F1 -> F2 -> F3 -> Products

    Properties:
        typeShow: loại hiển thị danh mục theo layout. Nếu typeShow = 3 thì children sẽ là id theo bảng products
*/
const dataProducts = [{
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
const dataCategories = [// Cha
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

const dataPhotoCatories = [{
  id: '1',
  name: 'Kitchen',
  url: 'photos1.jpg'
}, {
  id: '2',
  name: 'Bath',
  url: 'photos2.jpg'
}, {
  id: '3',
  name: 'Bedroom',
  url: 'photos3.jpg'
}, {
  id: '4',
  name: 'Living',
  url: 'photos4.jpg'
}, {
  id: '5',
  name: 'Dining',
  url: 'photos1.jpg'
}, {
  id: '6',
  name: 'Outdoor',
  url: 'photos2.jpg'
}, {
  id: '7',
  name: 'Baby Kid',
  url: 'photos3.jpg'
}, {
  id: '8',
  name: 'Home Office',
  url: 'photos4.jpg'
}];
const dataProductPhotos = [{
  id: '1',
  name: 'Master Bathroom',
  slug: 'master-bathroom',
  url: 'PhotoProduct1.jpg',
  images: ["PhotoProduct2.jpg", "PhotoProduct3.jpg", "PhotoProduct2.jpg", "PhotoProduct1.jpg"]
}, {
  id: '2',
  name: 'Hamstons Summer Home',
  slug: 'hamstons-summer-home',
  url: 'PhotoProduct2.jpg',
  images: ["PhotoProduct2.jpg", "PhotoProduct3.jpg", "PhotoProduct2.jpg", "PhotoProduct1.jpg"]
}, {
  id: '3',
  name: 'Marietta Modern Farmhouse',
  slug: 'marietta-modern-farmhouse',
  url: 'PhotoProduct3.jpg',
  images: ["PhotoProduct2.jpg", "PhotoProduct3.jpg", "PhotoProduct2.jpg", "PhotoProduct1.jpg"]
}];

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("iZYN");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "2Wmb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MyService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuncService; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MyService {
  static parseSeoToName(string = "") {
    const mstr = string.split("-");
    let res = "";
    let firsLetter = "";

    if (mstr.length > 1) {
      for (let item of mstr) {
        firsLetter = item[0].toUpperCase();
        res += res === "" ? firsLetter + item.substring(1) : " " + firsLetter + item.substring(1);
      }

      return res;
    }

    firsLetter = mstr[0][0].toUpperCase();
    return firsLetter + mstr[0].substring(1);
  } //  loai bo phan tu trung trong arr obj


  static dedup(arr) {
    var hashTable = {};
    return arr.filter(function (el) {
      var key = JSON.stringify(el);
      var match = Boolean(hashTable[key]);
      return match ? false : hashTable[key] = true;
    });
  } // order array object
  // arr.sort(orderArrayObject('title','desc',0))


  static orderArrayObject(props, order = "asc", isDate = 0) {
    return function (a, b) {
      if (!a.hasOwnProperty(props) || !b.hasOwnProperty(props)) {
        return 0;
      }

      let varA = typeof a[props] === "string" ? a[props].toUpperCase() : a[props];
      let varB = typeof b[props] === "string" ? b[props].toUpperCase() : b[props];
      varA = isDate ? formatDefaultDay(varA) : varA;
      varB = isDate ? formatDefaultDay(varB) : varB;
      let comparison = 0;

      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }

      return order == "desc" ? comparison * -1 : comparison;
    };
  } // nguyen-tan-truc


  static getSeoTitle(input) {
    if (input == undefined || input == "") return ""; //Đổi chữ hoa thành chữ thường

    var slug = input.toLowerCase(); //Đổi ký tự có dấu thành không dấu

    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a");
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e");
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, "i");
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o");
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u");
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y");
    slug = slug.replace(/đ/gi, "d"); //Xóa các ký tự đặt biệt

    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, ""); //Đổi khoảng trắng thành ký tự gạch ngang

    slug = slug.replace(/ /gi, "-"); //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng

    slug = slug.replace(/\-\-\-\-\-/gi, "-");
    slug = slug.replace(/\-\-\-\-/gi, "-");
    slug = slug.replace(/\-\-\-/gi, "-");
    slug = slug.replace(/\-\-/gi, "-"); //Xóa các ký tự gạch ngang ở đầu và cuối

    slug = "@" + slug + "@";
    slug = slug.replace(/\@\-|\-\@|\@/gi, "");
    return slug;
  } // 14.000.000


  static dotsNumber(value) {
    if (value) {
      let string = this.replaceAll(value, ".", "");
      let arr = "";

      for (let i = 0; i < string.length; i++) {
        string.length > 3 ? (string.length - (i + 1)) % 3 === 0 && i !== string.length - 1 ? arr += string[i] + "." : arr += string[i] : arr += string[i];
      }

      return arr;
    } else {
      return "";
    }
  } // replace string multiple


  static replaceAll(str, find, replace) {
    if (str) {
      return typeof str !== "string" ? str.toString().replace(new RegExp(this.escapeRegExp(find), "g"), replace) : str.replace(new RegExp(this.escapeRegExp(find), "g"), replace);
    }
  }

  static escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  } // Parse JWT


  static parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(atob(base64).split("").map(function (c) {
      return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
    return JSON.parse(jsonPayload);
  } //Convert exel to json


  static parseExcel(file, callback) {
    var reader = new FileReader();

    reader.onload = function (e) {
      var data = e.target.result;
      var workbook = XLSX.read(data, {
        type: "binary"
      });
      workbook.SheetNames.forEach(function (sheetName) {
        // Here is your object
        var XL_row_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        var json_object = JSON.stringify(XL_row_object);
        callback(JSON.parse(json_object));
      });
    };

    reader.onerror = function (ex) {};

    reader.readAsBinaryString(file);
  } //parse model excel


  static parseModelExcel(arrExcel) {
    let mangDSKQ = new DanhSachKhachHang();

    for (let val of arrExcel) {
      const obj = Object.entries(val).reduce((acc, [key, value]) => {
        return key === "Email Address" ? _objectSpread({}, acc, {
          email: value
        }) : key === "Số điện thoại" ? _objectSpread({}, acc, {
          soDienThoai: value
        }) : key === "Họ tên" ? _objectSpread({}, acc, {
          ho: value.toString().split(" ")[0],
          ten: value.toString().split(" ").reduce((sum, val, i) => i > 1 ? sum + " " + val : val = val)
        }) : key === "Bạn biết CyberSoft thông qua kênh nào đầu tiên?" ? _objectSpread({}, acc, {
          nguonGioiThieu: value
        }) : key === "Nếu bạn có học Đại học/Cao Đẳng/Trung cấp, vui lòng cho chúng tôi biết tên trường:" ? _objectSpread({}, acc, {
          truongDaVaDangHoc: value
        }) : key === "Năm sinh" ? _objectSpread({}, acc, {
          sinhNhat: typeof value === "number" ? new Date(this.formatDateDefault2("01/01/" + value) + "Z").toISOString().substring(0, 10) : new Date(this.formatDateDefault(value) + "Z").toISOString().substring(0, 10)
        }) : key === "Số điện thoại" ? _objectSpread({}, acc, {
          soDienThoai: value
        }) : // remove key
        key === "Bạn học ngành CNTT hay trái ngành?" ? acc : key === "Khoảng lương bạn mong muốn khi học xong khóa học ? (ví dụ: 6tr->15tr)" ? acc : key === "Khoảng lương sau 2 năm bạn mong muốn bao nhiêu? " ? acc : key === "Quy định của trung tâm:" ? acc : key === "Timestamp" ? acc : key === "Tiếng anh giao tiếp khá quan trọng cho lập trình để nhận mức lương cao hơn, thăng tiến và làm dự án onsite. CyberSoft có trung tâm anh văn Aladin chuyên đào tạo giao tiếp chuẩn Mỹ, chương trình thực tế và có ưu đãi dành riêng cho học viên CyberSoft. Bạn có quan tâm ?" ? acc : key === `Vui lòng chụp MẶT TRƯỚC "Căn cước công dân" hoặc "Chứng minh nhân dân" của bạn` ? acc : key === `Vui lòng chụp MẶT SAU "Căn cước công dân" hoặc "Chứng minh nhân dân" của bạn` ? acc : key === "Nếu bạn đang đi làm, vui lòng cho chúng tôi biết Tên Công Ty hiện tại:" ? acc : _objectSpread({}, acc, {
          [key]: value
        });
      }, {});
      obj.maTrangThaiKhachHang = 0;

      let newObj = this._khachHangService.TaoModelKhachHang(obj);

      newObj.thongTinMoRong.NgaySinh = obj.sinhNhat;
      mangDSKQ.mangKhachHangImport = [...mangDSKQ.mangKhachHangImport, newObj];
    }

    return mangDSKQ;
  }
  /* 
    date : null or date
    format : dd/mm/yyyy , mm-dd-yyyy
    hastime: 0 => no , 1 => yes
  */


  staticformatDayTimeNow(date, format, hastime) {
    let mytime = "";
    let time = "";
    let d = date ? new Date(date) : new Date(),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear(),
        hours = d.getHours(),
        minutes = d.getMinutes(),
        seconds = d.getSeconds();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    time = hastime === 1 ? [hours, minutes, seconds].join(":") : "";
    mytime = format === "dd/mm/yyyy" ? [day, month, year].join(format[2]) + " " + time : format === "mm/dd/yyyy" ? [month, day, year].join(format[2]) + " " + time : format === "yyyy/dd/mm" ? [year, day, month].join(format[2]) + " " + time : [year, month, day].join(format[2]) + " " + time;
    return mytime;
  } // number: count day add


  static addDay(number) {
    let date = new Date();
    let timeStamp = date.setDate(date.getDate() + parseInt(number));
    date = new Date(timeStamp);
    return formatDayTimeNow(date, "dd/mm/yyyy", 0);
  } // vd: 15/05/1994 12:00:00


  static formatDefaultDayTime(stringDate) {
    let date, month, year, daySplit;
    daySplit = stringDate.split(" ");
    date = daySplit[0].split(stringDate[2])[0];
    month = daySplit[0].split(stringDate[2])[1];
    year = daySplit[0].split(stringDate[2])[2];
    return daySplit[1] ? [month, date, year].join("-") + " " + daySplit[1] : [month, date, year].join("-");
  } // Image


  static getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);

      reader.onerror = error => reject(error);
    });
  }

  static srcToFile(src, fileName, mimeType) {
    return fetch(src).then(function (res) {
      return res.arrayBuffer();
    }).then(function (buf) {
      return new File([buf], fileName, {
        type: mimeType
      });
    });
  }

}
class FuncService {
  // tim duy nhat 1 item

  /*
      arr: input arrObj dau vao
      prop: get tra tri prop can tim
      string: string can tim
  */
  static search(arr, prop, string) {
    return arr.find(res => res[prop] === string);
  }

  static searchAll(arr, prop, arrFind) {
    let resArr = [];

    if (arrFind.length > 0) {
      let myMap = new Map();

      for (let res of arr) {
        myMap.set(res[prop], res);
      }

      for (let res of arrFind) {
        resArr = [...resArr, myMap.get(res)];
      }

      return resArr;
    }

    return resArr;
  } // tim tat ca item theo danh sach id

  /*
      arr: input arrObj dau vao
      arrFind: input arr can tim vd:["a","b"]
      prop: get tra tri prop can tim
  */


  static find(arr, arrFind, prop) {
    let newArr = [];
    let myMap = new Map();

    if (arrFind.length > 0) {
      for (let val of arr) {
        myMap.set(val[prop], val);
      }

      for (let val of arrFind) {
        newArr.push(myMap.get(val));
      }

      return newArr;
    }

    return [];
  }

}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "D+dm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MegaMenu; });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("zTow");
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





const data = {
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

const alignDivMenu = (div, stt) => {
  $(div).find(".menu").css({
    'display': 'block'
  });

  if (stt >= 1 && stt <= 3) {
    let px;
    px = stt === 1 ? '-1px' : stt === 2 ? '-140px' : stt === 3 ? '-400px' : '0';
    $(div).find(".menu").css({
      left: px
    });
  }

  if (stt > 3 && stt <= 5) {
    let px;
    px = stt === 5 ? '-1px' : '-120px';
    $(div).find(".menu").css({
      right: px
    });
  }
};

const HoverMenu = () => {
  $("#MegaMenu .item").hover(function () {
    $(this).addClass("hoverMenu"); // get stt

    let stt = $(this).attr("class").split(" ")[1];
    stt = parseInt(stt[stt.length - 1]); // line transparent

    $(this).append(`
            <div class="line"></div>
        `); //css

    alignDivMenu(this, stt); // debugger
  }, function () {
    $("#MegaMenu .line").remove();
    $(this).removeClass("hoverMenu");
    $(this).find(".menu").css({
      'display': 'none'
    });
  });
};

class MegaMenu extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  componentDidMount() {
    HoverMenu();
  }

  render() {
    return __jsx("div", {
      id: "MegaMenu"
    }, __jsx("div", {
      className: "parent container"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: _const_routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].Photos.href
    }, __jsx("div", {
      className: "item item1"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPhotoVideo"]
    }), __jsx("span", {
      className: "nameMenu"
    }, "photos"), __jsx("div", {
      className: "menu"
    }, __jsx("div", {
      style: {
        display: 'flex'
      }
    }, data[1].map((res, j) => {
      return __jsx("div", {
        key: j,
        className: "itemMenu"
      }, __jsx("h4", {
        className: "title mb-10"
      }, res.title), __jsx("ul", {
        style: {
          marginBottom: 0,
          listStyleType: 'none'
        }
      }, res.data.map((res2, i) => {
        return __jsx("p", {
          key: i,
          className: "m-0 mylink"
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/aa"
        }, __jsx("small", {
          className: ""
        }, res2)));
      })));
    }))))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: _const_routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].Products.href
    }, __jsx("div", {
      className: "item item2"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faShoppingBasket"]
    }), __jsx("span", {
      className: "nameMenu"
    }, "shop by department"), __jsx("div", {
      className: "menu"
    }, __jsx("div", {
      style: {
        display: 'flex'
      }
    }, data[1].map((res, j) => {
      return __jsx("div", {
        key: j,
        className: "itemMenu"
      }, __jsx("h4", {
        className: "title mb-10"
      }, res.title), __jsx("ul", {
        style: {
          marginBottom: 0,
          listStyleType: 'none'
        }
      }, res.data.map((res2, i) => {
        return __jsx("p", {
          key: i,
          className: "m-0"
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/aa"
        }, __jsx("small", {
          className: "mylink"
        }, res2)));
      })));
    }))))), __jsx("div", {
      className: "item item3"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUserAstronaut"]
    }), __jsx("span", {
      className: "nameMenu"
    }, "shop by department"), __jsx("div", {
      className: "menu"
    }, __jsx("div", {
      style: {
        display: 'flex'
      }
    }, data[1].map((res, j) => {
      return __jsx("div", {
        key: j,
        className: "itemMenu"
      }, __jsx("h4", {
        className: "title mb-10"
      }, res.title), __jsx("ul", {
        style: {
          marginBottom: 0,
          listStyleType: 'none'
        }
      }, res.data.map((res2, i) => {
        return __jsx("p", {
          key: i,
          className: "m-0"
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/aa"
        }, __jsx("small", {
          className: "mylink"
        }, res2)));
      })));
    })))), __jsx("div", {
      className: "item item4"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBookReader"]
    }), __jsx("span", {
      className: "nameMenu"
    }, "stories & advice"), __jsx("div", {
      className: "menu"
    }, __jsx("div", {
      style: {
        display: 'flex'
      }
    }, data[1].map((res, j) => {
      return __jsx("div", {
        key: j,
        className: "itemMenu"
      }, __jsx("h4", {
        className: "title mb-10"
      }, res.title), __jsx("ul", {
        style: {
          marginBottom: 0,
          listStyleType: 'none'
        }
      }, res.data.map((res2, i) => {
        return __jsx("p", {
          key: i,
          className: "m-0"
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/aa"
        }, __jsx("small", {
          className: "mylink"
        }, res2)));
      })));
    })))), __jsx("div", {
      className: "item item5"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGift"]
    }), __jsx("span", {
      className: "nameMenu"
    }, "SALE"), __jsx("div", {
      className: "menu"
    }, __jsx("div", {
      style: {
        display: 'flex'
      }
    }, data[1].map((res, j) => {
      return __jsx("div", {
        key: j,
        className: "itemMenu"
      }, __jsx("h4", {
        className: "title mb-10"
      }, res.title), __jsx("ul", {
        style: {
          marginBottom: 0,
          listStyleType: 'none'
        }
      }, res.data.map((res2, i) => {
        return __jsx("p", {
          key: i,
          className: "m-0"
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/aa"
        }, __jsx("small", {
          className: "mylink"
        }, res2)));
      })));
    }))))));
  }

}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("xeH2")))

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("g/15");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "fTBP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./public/images/houzz_logo.svg
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/external_react_["createElement"]("path", {
  fill: "#4dbc15",
  d: "M70.28 125.84h42.22V54.36L27.99 30.13V0H0v125.84h42.22V86.22h28.06v39.62z"
});

var _ref2 = /*#__PURE__*/external_react_["createElement"]("path", {
  d: "M312.93 64.24A37.67 37.67 0 00251.68 76a36.16 36.16 0 00-2.91 14.46 36.7 36.7 0 0010.87 26.29 38 38 0 0011.9 7.89 38.81 38.81 0 0029.47 0 38 38 0 0011.9-7.89 36.71 36.71 0 0010.89-26.29A36.12 36.12 0 00320.89 76a37.9 37.9 0 00-7.96-11.76zm-7.16 35.28a20.23 20.23 0 01-4.15 7 19.35 19.35 0 01-6.56 4.55 23.82 23.82 0 01-17.55 0 19.3 19.3 0 01-6.56-4.55 20.12 20.12 0 01-4.16-7 28.17 28.17 0 010-18.14 20.14 20.14 0 014.16-7 19.32 19.32 0 016.56-4.55 23.75 23.75 0 0117.55 0 19.34 19.34 0 016.56 4.55 20.27 20.27 0 014.15 7 28.19 28.19 0 010 18.14zM481.42 68.48V55.12H425.6v13.95h35.67l-36.96 43.28v13.5h59.12V111.9h-39.24l37.23-43.42zM518.22 111.9l37.23-43.42V55.12h-55.82v13.95h35.67l-36.96 43.28v13.5h59.12V111.9h-39.24zM215.81 55.76c-10.44-4.32-23.25-2.54-31.54 4.14V30.13h-15.66v95.71h15.67V88.21c0-7.16 2.06-19.17 15.83-19.17 12.64 0 17.13 10.33 17.13 19.17v37.62h15.65V83.06c-.01-12.86-6.23-22.81-17.08-27.3zM390.76 93.74a25.33 25.33 0 01-.91 6.55 17.93 17.93 0 01-2.94 6 15.35 15.35 0 01-5.27 4.41 20.35 20.35 0 01-16.25 0 15.37 15.37 0 01-5.27-4.41 17.82 17.82 0 01-2.94-6 25.5 25.5 0 01-.92-6.55V55h-15.54v40.3c0 15 6.62 25 19.95 30a37.8 37.8 0 0025.86-.06c16.36-6.18 19.79-19.72 19.79-30V55.17h-15.56z"
});

function SvgHouzzLogo(props) {
  return external_react_["createElement"]("svg", _extends({
    viewBox: "0 0 557.46 127.6"
  }, props), _ref, _ref2);
}

/* harmony default export */ var houzz_logo = (SvgHouzzLogo);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./src/const/routes.js
var routes = __webpack_require__("zTow");

// CONCATENATED MODULE: ./src/layouts/layout1Comp/Header.js

var __jsx = external_react_default.a.createElement;
// import '../scss/layouts/header.scss'






const Header = () => {
  return __jsx("header", {
    id: "Header"
  }, __jsx("div", {
    className: "container"
  }, __jsx(link_default.a, {
    href: routes["a" /* default */].Home.href
  }, __jsx("a", {
    className: "item item1 logo"
  }, __jsx(houzz_logo, {
    style: {
      width: '114px'
    }
  }))), __jsx("div", {
    className: "item item2"
  }, __jsx(react_fontawesome_["FontAwesomeIcon"], {
    className: "isearch",
    icon: free_solid_svg_icons_["faSearch"]
  }), __jsx("input", {
    className: "search",
    placeholder: "Search Photos, Products, Pros & More.."
  })), __jsx("div", {
    className: "item item3"
  }, __jsx("div", {
    id: "special-header-promo"
  }, __jsx("div", {
    className: "sale-rectangle"
  }, __jsx("div", {
    className: "sale-upper-tri"
  }), __jsx("div", {
    className: "sale-bottom-tri"
  }), __jsx("div", {
    className: "sale-hole"
  }), __jsx("div", {
    className: "sale-label headerPromoBanner__small sale-label--no-icon"
  }, "SALE"), __jsx("div", {
    className: "sale-label headerPromoBanner__large sale-label--no-icon sale-label--medium"
  }, "SEMI-ANNUAL SALE")))), __jsx("div", {
    className: "item item4"
  }, __jsx("div", {
    className: "countCart"
  }, "0"), __jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faShoppingCart"]
  })), __jsx("div", {
    className: "item item5"
  }, __jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faUser"]
  }), __jsx("span", {
    style: {
      marginLeft: '4px'
    }
  }, " Sign In")), __jsx("div", {
    className: "item item6"
  }, __jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faBriefcase"]
  }), __jsx("span", {
    style: {
      marginLeft: '8px'
    }
  }, "Join as a Pro"))));
};

/* harmony default export */ var layout1Comp_Header = (Header);
// EXTERNAL MODULE: ./src/layouts/layout1Comp/MegaMenu.js
var MegaMenu = __webpack_require__("D+dm");

// CONCATENATED MODULE: ./src/layouts/layout1Comp/Footer.js

var Footer_jsx = external_react_default.a.createElement;

const Footer = () => {
  return Footer_jsx("footer", {
    style: {
      height: "60px",
      width: "100%",
      borderTop: "1px solid rgba(230, 230, 230, 0.64)",
      display: 'flex',
      background: 'white'
    }
  }, Footer_jsx("div", {
    className: "container",
    style: {
      display: 'flex'
    }
  }, Footer_jsx("style", null, `
                    footer li{text-transform: uppercase; color:#888}
                    footer ul{
                        width:100%;
                        align-self:center;
                        display: flex;
                        list-style: none;
                        justify-content: space-between;
                    }
                `), Footer_jsx("ul", {
    style: {
      margin: '0'
    }
  }, Footer_jsx("li", null, Footer_jsx("small", null, "about")), Footer_jsx("li", null, Footer_jsx("small", null, "careers")), Footer_jsx("li", null, Footer_jsx("small", null, "mobile apps")), Footer_jsx("li", null, Footer_jsx("small", null, "professionals")), Footer_jsx("li", null, Footer_jsx("small", null, "buttons")), Footer_jsx("li", null, Footer_jsx("small", null, "advertise")), Footer_jsx("li", null, Footer_jsx("small", null, "sell")), Footer_jsx("li", null, Footer_jsx("small", null, "terms & privacy")), Footer_jsx("li", null, Footer_jsx("small", null, "\xA9 2020 houzz")))));
};

/* harmony default export */ var layout1Comp_Footer = (Footer);
// CONCATENATED MODULE: ./src/layouts/layout1.js

var layout1_jsx = external_react_default.a.createElement;





const Layout1 = props => {
  return layout1_jsx(external_react_["Fragment"], null, layout1_jsx(layout1Comp_Header, null), layout1_jsx(MegaMenu["a" /* default */], null), props.children, layout1_jsx(layout1Comp_Footer, null));
};

/* harmony default export */ var layout1 = __webpack_exports__["a"] = (Layout1);

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "iZYN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1cfC");
/* harmony import */ var _const_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zTow");
/* harmony import */ var _services_myService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2Wmb");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layouts_layout1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("fTBP");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_8__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const data = ['Can you please share the paint color? Thank you.', __jsx("div", {
  className: "d-flex"
}, __jsx("button", {
  style: {
    border: 'none'
  }
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faThumbsUp"],
  className: "mr-2"
}), " 2 Likes"), __jsx("button", {
  style: {
    border: 'none'
  }
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faComment"],
  className: "ml-3 mr-2"
}), " 2 Comments")), __jsx("div", {
  className: "d-flex"
}, __jsx("img", {
  style: {
    borderRadius: '50%',
    width: '25px',
    height: '25px'
  },
  src: "/images/user2.jpg"
}), __jsx("div", null, __jsx("span", {
  className: "d-block ml-10 fs-13",
  style: {
    fontWeight: 'bold'
  }
}, "Hoang Nguyen"), __jsx("p", {
  className: "ml-10 mt-10"
}, "Thanks for asking! The paint color used in this Master Bath is Sherwin Williams High Reflective White SW7757. Best, Martha O'Hara Interiors"), __jsx("div", {
  className: "d-flex",
  style: {
    color: '#00000052'
  }
}, __jsx("button", {
  style: {
    border: 'none',
    fontSize: '12px'
  }
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faThumbsUp"],
  className: "mr-2"
}), " 2 Likes"), __jsx("button", {
  style: {
    border: 'none',
    fontSize: '12px'
  }
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faComment"],
  className: "ml-3 mr-2"
}), " 2 Save")))), __jsx("div", {
  className: "d-flex"
}, __jsx("img", {
  style: {
    borderRadius: '50%',
    width: '25px',
    height: '25px'
  },
  src: "/images/user1.jpg"
}), __jsx("div", null, __jsx("span", {
  className: "d-block ml-10 fs-13",
  style: {
    fontWeight: 'bold'
  }
}, "Hoang Nguyen"), __jsx("p", {
  className: "ml-10 mt-10"
}, "Thanks for asking! The paint color used in this Master Bath is Sherwin Williams High Reflective White SW7757. Best, Martha O'Hara Interiors"), __jsx("div", {
  className: "d-flex",
  style: {
    color: '#00000052'
  }
}, __jsx("button", {
  style: {
    border: 'none',
    fontSize: '12px'
  }
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faThumbsUp"],
  className: "mr-2"
}), " 2 Likes"), __jsx("button", {
  style: {
    border: 'none',
    fontSize: '12px'
  }
}, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faComment"],
  className: "ml-3 mr-2"
}), " 2 Save"))))];
async function getStaticPaths() {
  const paths = _data_data__WEBPACK_IMPORTED_MODULE_1__[/* dataProductPhotos */ "c"].map((res, i) => `${_const_routes__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].Photos.href}/${res.slug}~${res.id}`);
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  return {
    props: {
      PhotoDetails: _services_myService__WEBPACK_IMPORTED_MODULE_3__[/* FuncService */ "a"].search(_data_data__WEBPACK_IMPORTED_MODULE_1__[/* dataProductPhotos */ "c"], 'id', params.slug.split("~")[1])
    }
  };
}

class PhotoCategory extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    console.log("cc: ", this.props);
    return __jsx(_layouts_layout1__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, __jsx("div", {
      id: "PhotoCategory",
      style: {
        background: 'white'
      }
    }, __jsx("div", {
      className: "container pt-20 pb-50"
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], null, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
      span: 17
    }, __jsx("div", {
      className: "borderImage"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      className: "left",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChevronLeft"]
    }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      className: "right",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faChevronRight"]
    }), __jsx("img", {
      style: {
        height: '578px'
      },
      src: `/images/${this.props.PhotoDetails.url}`
    }), __jsx("div", {
      className: "btns"
    }, __jsx("button", {
      className: "btn--save"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPaperPlane"],
      className: "mr-5"
    }), " Save"), __jsx("button", {
      className: "btn--share ml-5"
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faHeart"],
      className: "mr-5"
    }), " Share"))), __jsx("div", {
      className: "mt-20"
    }, __jsx("h3", null, this.props.PhotoDetails.name), __jsx("small", {
      style: {
        color: 'rgb(102,102,102)'
      }
    }, "Transitional Bathroom, Minneapolis"), __jsx("p", {
      style: {
        fontWeight: '300',
        borderBottom: '1px solid rgb(230,230,230)'
      },
      className: "mt-10 pb-10"
    }, "Martha O'Hara Interiors, Interior Design & Photo Styling | City Homes, Builder | Troy Thies, Photography Please Note: All \u201Crelated,\u201D \u201Csimilar,\u201D and \u201Csponsored\u201D products tagged or listed by Houzz are not actual products pictured. They have not been approved by Martha O\u2019Hara Interiors nor any of the professionals credited. For information about our work, please contact design@oharainteriors.com."), __jsx("div", {
      className: "pb-15 d-flex",
      style: {
        borderBottom: '1px solid rgb(230,230,230)',
        justifyContent: 'space-between'
      }
    }, __jsx("div", {
      className: "d-flex"
    }, __jsx("img", {
      style: {
        borderRadius: '50%',
        width: '40px',
        height: '40px'
      },
      src: `/images/user1.jpg`
    }), __jsx("div", null, __jsx("span", {
      className: "d-block ml-10 fs-13"
    }, "Truc Nguyen"), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Rate"], {
      style: {
        marginLeft: '10px'
      },
      allowHalf: true,
      defaultValue: 5
    }), " ", __jsx("small", null, " 155 Review"))), __jsx("div", null, __jsx("button", {
      className: "btn",
      style: {
        fontSize: '13px'
      }
    }, "Follow"))), __jsx("div", {
      className: "mt-35"
    }, __jsx("div", {
      className: "d-flex mb-10",
      style: {
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, __jsx("p", {
      className: "m-0"
    }, __jsx("b", null, "Questions About This Photo (58)")), __jsx("button", {
      className: "btn",
      style: {
        fontSize: '13px'
      }
    }, "Ask a Question")), __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["List"], {
      size: "large",
      header: __jsx("div", {
        className: "d-flex",
        style: {
          alignItems: 'center',
          justifyContent: 'space-between'
        }
      }, __jsx("div", {
        className: "d-flex"
      }, __jsx("img", {
        style: {
          borderRadius: '50%',
          width: '40px',
          height: '40px'
        },
        src: `/images/user1.jpg`
      }), __jsx("span", {
        style: {
          display: 'flex'
        },
        className: "d-block ml-10 fs-13"
      }, __jsx("div", {
        style: {
          alignSelf: 'center'
        }
      }, __jsx("b", null, "Truc Nguyen"), "  wrote:"))), __jsx("span", null, "April 6, 2016")),
      bordered: true,
      dataSource: data,
      renderItem: item => __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["List"].Item, null, item)
    }))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
      span: 7,
      style: {
        paddingLeft: '20px'
      }
    }, __jsx("span", {
      className: "d-block mb-10",
      style: {
        marginLeft: '0px'
      }
    }, "Order Photos"), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], null, this.props.PhotoDetails.images.map((item, i) => {
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        span: 12
      }, __jsx("img", {
        className: "mb-15",
        style: {
          width: '159px',
          height: '159px'
        },
        key: i,
        src: `/images/${item}`
      }));
    })))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(PhotoCategory));

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "xeH2":
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "zTow":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MyRouter {}

_defineProperty(MyRouter, "slug", "[slug]");

_defineProperty(MyRouter, "Home", {
  href: "/"
});

_defineProperty(MyRouter, "Products", {
  href: "/products"
});

_defineProperty(MyRouter, "Photos", {
  href: "/photos"
});

_defineProperty(MyRouter, "ProductDetail", {
  href: `${MyRouter.Products.href}/${MyRouter.slug}`,
  as: slug => `${MyRouter.Products.href}/${slug}`
});

_defineProperty(MyRouter, "ProductsList", {
  href: `${MyRouter.Products.href}/${MyRouter.slug}`,
  as: (slug, id) => `${MyRouter.Products.href}/${slug}~${id}`
});

_defineProperty(MyRouter, "PhotoDetails", {
  href: `${MyRouter.Photos.href}/${MyRouter.slug}`,
  as: (slug, id) => `${MyRouter.Photos.href}/${slug}~${id}`
});

/* harmony default export */ __webpack_exports__["a"] = (MyRouter);

/***/ })

/******/ });