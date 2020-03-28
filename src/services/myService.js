export class MyService {

  static parseSeoToName(string = ""){
    const mstr = string.split("-");
    let res = "";
    let firsLetter = "";
    if(mstr.length > 1){
      for(let item of mstr){
        firsLetter = item[0].toUpperCase();
        res += res === "" ? firsLetter+item.substring(1) : " " + firsLetter+item.substring(1)
      }
      return res
    } 
    firsLetter = mstr[0][0].toUpperCase();
    return firsLetter+mstr[0].substring(1)
  }

  //  loai bo phan tu trung trong arr obj
  static dedup(arr) {
    var hashTable = {};
    return arr.filter(function(el) {
      var key = JSON.stringify(el);
      var match = Boolean(hashTable[key]);
      return match ? false : (hashTable[key] = true);
    });
  }
  // order array object
  // arr.sort(orderArrayObject('title','desc',0))
  static orderArrayObject(props, order = "asc", isDate = 0) {
    return function(a, b) {
      if (!a.hasOwnProperty(props) || !b.hasOwnProperty(props)) {
        return 0;
      }
      let varA =
        typeof a[props] === "string" ? a[props].toUpperCase() : a[props];
      let varB =
        typeof b[props] === "string" ? b[props].toUpperCase() : b[props];

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
  }
  // nguyen-tan-truc
  static getSeoTitle(input) {
    if (input == undefined || input == "") return "";
    //Đổi chữ hoa thành chữ thường
    var slug = input.toLowerCase();
    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a");
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e");
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, "i");
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o");
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u");
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y");
    slug = slug.replace(/đ/gi, "d");
    //Xóa các ký tự đặt biệt
    slug = slug.replace(
      /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
      ""
    );
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, "-");
    slug = slug.replace(/\-\-\-\-/gi, "-");
    slug = slug.replace(/\-\-\-/gi, "-");
    slug = slug.replace(/\-\-/gi, "-");
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = "@" + slug + "@";
    slug = slug.replace(/\@\-|\-\@|\@/gi, "");
    return slug;
  }
  // 14.000.000
  static dotsNumber(value) {
    if (value) {
      let string = this.replaceAll(value, ".", "");
      let arr = "";
      for (let i = 0; i < string.length; i++) {
        string.length > 3
          ? (string.length - (i + 1)) % 3 === 0 && i !== string.length - 1
            ? (arr += string[i] + ".")
            : (arr += string[i])
          : (arr += string[i]);
      }
      return arr;
    } else {
      return "";
    }
  }
  // replace string multiple
  static replaceAll(str, find, replace) {
    if (str) {
      return typeof str !== "string"
        ? str
            .toString()
            .replace(new RegExp(this.escapeRegExp(find), "g"), replace)
        : str.replace(new RegExp(this.escapeRegExp(find), "g"), replace);
    }
  }
  static escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }
  // Parse JWT
  static parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function(c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  }
  //Convert exel to json
  static parseExcel(file, callback) {
    var reader = new FileReader();

    reader.onload = function(e) {
      var data = e.target.result;
      var workbook = XLSX.read(data, {
        type: "binary"
      });
      workbook.SheetNames.forEach(function(sheetName) {
        // Here is your object
        var XL_row_object = XLSX.utils.sheet_to_json(
          workbook.Sheets[sheetName]
        );
        var json_object = JSON.stringify(XL_row_object);
        callback(JSON.parse(json_object));
      });
    };
    reader.onerror = function(ex) {};
    reader.readAsBinaryString(file);
  }
  //parse model excel
  static parseModelExcel(arrExcel) {
    let mangDSKQ = new DanhSachKhachHang();
    for (let val of arrExcel) {
      const obj = Object.entries(val).reduce((acc, [key, value]) => {
        return key === "Email Address"
          ? { ...acc, email: value }
          : key === "Số điện thoại"
          ? { ...acc, soDienThoai: value }
          : key === "Họ tên"
          ? {
              ...acc,
              ho: value.toString().split(" ")[0],
              ten: value
                .toString()
                .split(" ")
                .reduce((sum, val, i) =>
                  i > 1 ? sum + " " + val : (val = val)
                )
            }
          : key === "Bạn biết CyberSoft thông qua kênh nào đầu tiên?"
          ? { ...acc, nguonGioiThieu: value }
          : key ===
            "Nếu bạn có học Đại học/Cao Đẳng/Trung cấp, vui lòng cho chúng tôi biết tên trường:"
          ? { ...acc, truongDaVaDangHoc: value }
          : key === "Năm sinh"
          ? {
              ...acc,
              sinhNhat:
                typeof value === "number"
                  ? new Date(this.formatDateDefault2("01/01/" + value) + "Z")
                      .toISOString()
                      .substring(0, 10)
                  : new Date(this.formatDateDefault(value) + "Z")
                      .toISOString()
                      .substring(0, 10)
            }
          : key === "Số điện thoại"
          ? { ...acc, soDienThoai: value }
          : // remove key
          key === "Bạn học ngành CNTT hay trái ngành?"
          ? acc
          : key ===
            "Khoảng lương bạn mong muốn khi học xong khóa học ? (ví dụ: 6tr->15tr)"
          ? acc
          : key === "Khoảng lương sau 2 năm bạn mong muốn bao nhiêu? "
          ? acc
          : key === "Quy định của trung tâm:"
          ? acc
          : key === "Timestamp"
          ? acc
          : key ===
            "Tiếng anh giao tiếp khá quan trọng cho lập trình để nhận mức lương cao hơn, thăng tiến và làm dự án onsite. CyberSoft có trung tâm anh văn Aladin chuyên đào tạo giao tiếp chuẩn Mỹ, chương trình thực tế và có ưu đãi dành riêng cho học viên CyberSoft. Bạn có quan tâm ?"
          ? acc
          : key ===
            `Vui lòng chụp MẶT TRƯỚC "Căn cước công dân" hoặc "Chứng minh nhân dân" của bạn`
          ? acc
          : key ===
            `Vui lòng chụp MẶT SAU "Căn cước công dân" hoặc "Chứng minh nhân dân" của bạn`
          ? acc
          : key ===
            "Nếu bạn đang đi làm, vui lòng cho chúng tôi biết Tên Công Ty hiện tại:"
          ? acc
          : { ...acc, [key]: value };
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
    mytime =
      format === "dd/mm/yyyy"
        ? [day, month, year].join(format[2]) + " " + time
        : format === "mm/dd/yyyy"
        ? [month, day, year].join(format[2]) + " " + time
        : format === "yyyy/dd/mm"
        ? [year, day, month].join(format[2]) + " " + time
        : [year, month, day].join(format[2]) + " " + time;

    return mytime;
  }
  // number: count day add
  static addDay(number) {
    let date = new Date();
    let timeStamp = date.setDate(date.getDate() + parseInt(number));
    date = new Date(timeStamp);
    return formatDayTimeNow(date, "dd/mm/yyyy", 0);
  }
  // vd: 15/05/1994 12:00:00
  static formatDefaultDayTime(stringDate) {
    let date, month, year, daySplit;
    daySplit = stringDate.split(" ");
    date = daySplit[0].split(stringDate[2])[0];
    month = daySplit[0].split(stringDate[2])[1];
    year = daySplit[0].split(stringDate[2])[2];
    return daySplit[1]
      ? [month, date, year].join("-") + " " + daySplit[1]
      : [month, date, year].join("-");
  }
  // Image
  static getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  static srcToFile(src, fileName, mimeType) {
    return fetch(src)
      .then(function(res) {
        return res.arrayBuffer();
      })
      .then(function(buf) {
        return new File([buf], fileName, { type: mimeType });
      });
  }
}

export class FuncService {
  // tim duy nhat 1 item
  /*
      arr: input arrObj dau vao
      prop: get tra tri prop can tim
      string: string can tim
  */
  static search(arr,prop,string){
    return arr.find(res => res[prop] === string)
  }
  static searchAll(arr,prop,arrFind){
    let resArr = [];
    if(arrFind.length > 0){
      let myMap = new Map();
      for(let res of arr){
        myMap.set(res[prop],res);
      }
      for(let res of arrFind){
        resArr = [...resArr,myMap.get(res)]
      }
      return resArr
    }
    return resArr;
  }
  // tim tat ca item theo danh sach id
  /*
      arr: input arrObj dau vao
      arrFind: input arr can tim vd:["a","b"]
      prop: get tra tri prop can tim
  */
  static find(arr,arrFind,prop){
    let newArr = []
    let myMap = new Map();
    if(arrFind.length > 0){
      for(let val of arr){
        myMap.set(val[prop],val)
      }
      for(let val of arrFind){
        newArr.push(myMap.get(val));
      }
      return newArr;
    }
    return []
  }
}


