document.getElementById("enterExc_1").onclick = function () {
  var day = document.getElementById("inputDay_1").value;
  var month = document.getElementById("inputMonth_1").value;
  var year = document.getElementById("inputYear_1").value;
  day = parseInt(day);
  month = parseInt(month);
  year = parseInt(year);
  if ((day < 0 && day > 31) || (month < 0 && month > 12) || year < 0)
    document.getElementById("enterExc_1").innerHTML = "Nhập sai";
  else {
    document.getElementById("resultExc_1").innerHTML =
      (day + 1) + "/" + month + "/" + year;
    document.getElementById("resultExc_1").innerHTML +="<br>"
      +(day - 1 )+ "/" + month + "/" + year;
  }
};
document.getElementById("enterExc_2").onclick = function () {
  var day = document.getElementById("inputDay_2").value;
  var month = document.getElementById("inputMonth_2").value;
  var year = document.getElementById("inputYear_2").value;
  day = parseInt(day);
  month = parseInt(month);
  year = parseInt(year);
  if ((day < 0 && day > 31) || (month < 0 && month > 12) || year < 0)
    document.getElementById("enterExc_2").innerHTML = "Nhập sai";
  else
    document.getElementById("resultExc_2").innerHTML =
      day + "/" + month + "/" + year;
  if (year % 4 === 0)
    document.getElementById("resultExc_2").innerHTML += "<br>Năm nhuận<br>";
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      document.getElementById("resultExc_2").innerHTML +=
        "Tháng có 31 ngày<br>";
      break;
    case 2:
      document.getElementById("resultExc_2").innerHTML +=
        "Tháng có 28 ngày<br>";
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      document.getElementById("resultExc_2").innerHTML +=
        "Tháng có 30 ngày<br>";
      break;
    default:
      document.getElementById("resultExc_2").innerHTML =
        "Vui lòng nhập lại tháng";
  }
};
document.getElementById("enterExc_3").onclick = function () {
  var number = document.getElementById("number").value;
  number = parseInt(number);
  var hangTram = Math.floor(number / 100);
  switch (hangTram) {
    case 1:
      document.getElementById("result").innerHTML = "một trăm";
      break;
    case 2:
      document.getElementById("result").innerHTML = "hai trăm";
      break;
    case 3:
      document.getElementById("result").innerHTML = "ba trăm";
      break;
    case 4:
      document.getElementById("result").innerHTML = "bốn trăm";
      break;
    case 5:
      document.getElementById("result").innerHTML = "năm trăm";
      break;
    case 6:
      document.getElementById("result").innerHTML = "sáu trăm";
      break;
    case 7:
      document.getElementById("result").innerHTML = "bảy trăm";
      break;
    case 8:
      document.getElementById("result").innerHTML = "tám trăm";
      break;
    case 9:
      document.getElementById("result").innerHTML = "chín trăm";
      break;
    default:
      break;
  }
  var hangChuc = Math.floor((number / 10) % 10);
  switch (hangChuc) {
    case 1:
      document.getElementById("result").innerHTML += " mười";
      break;
    case 2:
      document.getElementById("result").innerHTML += " hai mươi";
      break;
    case 3:
      document.getElementById("result").innerHTML += " ba mươi";
      break;
    case 4:
      document.getElementById("result").innerHTML += " bốn mươi";
      break;
    case 5:
      document.getElementById("result").innerHTML += " năm mươi";
      break;
    case 6:
      document.getElementById("result").innerHTML += " sáu mươi";
      break;
    case 7:
      document.getElementById("result").innerHTML += " bảy mươi";
      break;
    case 8:
      document.getElementById("result").innerHTML += " tám mươi";
      break;
    case 9:
      document.getElementById("result").innerHTML += " chín mươi";
      break;
    default:
      break;
  }
  var hangDonVi = Math.floor(number % 10);
  switch (hangDonVi) {
    case 1:
      document.getElementById("result").innerHTML += " mốt";
      break;
    case 2:
      document.getElementById("result").innerHTML += " hai";
      break;
    case 3:
      document.getElementById("result").innerHTML += " ba";
      break;
    case 4:
      document.getElementById("result").innerHTML += " bốn";
      break;
    case 5:
      document.getElementById("result").innerHTML += " lăm";
      break;
    case 6:
      document.getElementById("result").innerHTML += " sáu";
      break;
    case 7:
      document.getElementById("result").innerHTML += " bảy";
      break;
    case 8:
      document.getElementById("result").innerHTML += " tám";
      break;
    case 9:
      document.getElementById("result").innerHTML += " chín";
      break;
    default:
      break;
  }
};
