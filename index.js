/* bài 1:
input: ngày tháng năm 
xử lý: các Th đặc biệt đầu tháng, cuối tháng, đầu năm cuối năm, còn lại thì ngày + 1 hoặc ngày -1
output: 
- ngày hôm sau (ngày tháng năm)
- ngày hôm trước (ngày tháng năm)
*/

document.getElementById('btnNext').onclick = function () {
    var date = Number(document.getElementById('date').value);
    var month = Number(document.getElementById('month').value);
    var year = Number(document.getElementById('year').value);
    var nextDay = 0;
    var nextMonth = 0;
    var nextYear = 0;

    // xử lý
    if (date === 28 && month === 2) {
        nextDay = 1;
        nextMonth = 3;
        nextYear = year;

    } else if (date === 31 && month === 1) {
        nextDay = 1;
        nextMonth = 2;
        nextYear = year;
    } else if (date === 31 && month === 3) {
        nextDay = 1;
        nextMonth = 2;
        nextYear = year;
    }
    else if (date === 31 && month === 5) {
        nextDay = 1;
        nextMonth = 6;
        nextYear = year;
    }
    else if (date === 31 && month === 7) {
        nextDay = 1;
        nextMonth = 8;
        nextYear = year;
    }
    else if (date === 31 && month === 8) {
        nextDay = 1;
        nextMonth = 9;
        nextYear = year;
    }
    else if (date === 31 && month === 10) {
        nextDay = 1;
        nextMonth = 11;
        nextYear = year;
    }
    else if (date === 31 && month === 12) {
        nextDay = 1;
        nextMonth = 1;
        nextYear = ++year;
    }
    else if (date === 30 && month === 4) {
        nextDay = 1;
        nextMonth = 5;
        nextYear = year;
    }
    else if (date === 30 && month === 6) {
        nextDay = 1;
        nextMonth = 7;
        nextYear = year;
    }
    else if (date === 30 && month === 9) {
        nextDay = 1;
        nextMonth = 10;
        nextYear = year;
    }
    else if (date === 30 && month === 11) {
        nextDay = 1;
        nextMonth = 12;
        nextYear = year;
    }
    else {
        nextDay = date + 1;
        nextMonth = month;
        nextYear = year;
    }

    document.getElementById('nextday').innerHTML = "Ngày mai là ngày: " + nextDay + "/" + nextMonth + "/" + nextYear;
}

document.getElementById('btnBefore').onclick = function () {
    var date = Number(document.getElementById('date').value);
    var month = Number(document.getElementById('month').value);
    var year = Number(document.getElementById('year').value);
    var dayBefore = 0;
    var monthBefore = 0;
    var yearBefore = 0;

    // xử lý
    if (date === 1 && month === 1) {
        dayBefore = 31;
        monthBefore = 12;
        yearBefore = year - 1;

    } else if (date === 1 && month === 2) {
        dayBefore = 31;
        monthBefore = 1;
        yearBefore = year;
    } else if (date === 1 && month === 3) {
        dayBefore = 28;
        monthBefore = 2;
        yearBefore = year;
    }
    else if (date === 1 && month === 4) {
        dayBefore = 31;
        monthBefore = 3;
        yearBefore = year;
    }
    else if (date === 1 && month === 5) {
        dayBefore = 30;
        monthBefore = 4;
        yearBefore = year;
    }
    else if (date === 1 && month === 6) {
        dayBefore = 31;
        monthBefore = 5;
        yearBefore = year;
    }
    else if (date === 1 && month === 7) {
        dayBefore = 30;
        monthBefore = 6;
        yearBefore = year;
    }
    else if (date === 1 && month === 8) {
        dayBefore = 31;
        monthBefore = 7;
        yearBefore = year;
    }
    else if (date === 1 && month === 9) {
        dayBefore = 31;
        monthBefore = 8;
        yearBefore = year;
    }
    else if (date === 1 && month === 10) {
        dayBefore = 30;
        monthBefore = 9;
        yearBefore = year;
    }
    else if (date === 1 && month === 11) {
        dayBefore = 31;
        monthBefore = 10;
        yearBefore = year;
    }
    else if (date === 1 && month === 12) {
        dayBefore = 30;
        monthBefore = 11;
        yearBefore = year;
    }
    else {
        dayBefore = date - 1;
        monthBefore = month;
        yearBefore = year;
    }

    document.getElementById('daybefore').innerHTML = "Ngày hôm qua là ngày: " + dayBefore + "/" + monthBefore + "/" + yearBefore;
}

// Bài 2
/* input: tháng + năm 
output: số ngày trong tháng đó 
xử lý: 
if cho những tháng có 31 ngày (1,3,5,7,8,10,12)
if cho những tháng 30 ngày (4,6,9,11)
với tháng 2, tính thêm điều kiênj năm nhuận chia hết cho 400 hoặc chia hết cho 4 nhưng ko chia hết cho 100
*/

document.getElementById('btnTinhNgay').onclick = function () {
    var Thang = Number(document.getElementById('month2').value);
    var Nam = Number(document.getElementById('year2').value);

    var soNgaytrongThang = 0;

    if (Thang === 1 || Thang === 3 || Thang === 5 || Thang === 7 || Thang === 8 || Thang === 10 || Thang === 12) {
        soNgaytrongThang = 31;

    } else if (Thang === 4 || Thang === 6 || Thang === 9 || Thang === 11) {
        soNgaytrongThang = 30;

    } else if (Thang === 2 && (Nam % 400 === 0 || (Nam % 4 === 0 && Nam % 100 != 0))) {
        soNgaytrongThang = 29;
    }
    else {
        soNgaytrongThang = 28;
    }

    // xuất ra giao diện 
    document.getElementById('soNgay').innerHTML = "Số ngày của tháng " + Thang + " là: " + soNgaytrongThang;
}

/* bài 3: 
input: số nguyên có 3 chữ số 
output: cách đọc (string)
xử lý: lấy các số hàng trăm (n/100) hàng chục (n%100/10)hàng đơn vị (n%10)
switch case tới từng số. Với số 0 chia 2 TH: hàng đơn vị bằng  0  và ngược lại thì sẽ đọc số 0 ở hàng chục theo cách khác nhau*/


document.getElementById('cachDoc').onclick = function () {
    var soNguyen = Number(document.getElementById('soNguyen').value);
    var hangTram = Math.floor(soNguyen / 100);
    var hangChuc = Math.floor(soNguyen % 100 / 10);
    var hangDonvi = Math.floor(soNguyen % 10);

    var cachDochangTram = "";
    var cachDochangChuc = "";
    var cachDochangDonvi = "";

    //  hàng trăm:

    switch (hangTram) {
        case 1: {
            cachDochangTram = "Một trăm";
        };
            break;
        case 2: {
            cachDochangTram = "Hai trăm";
        }; break;
        case 3: {
            cachDochangTram = "Ba trăm";
        }; break;
        case 4: {
            cachDochangTram = "Bốn trăm";
        }; break;
        case 5: {
            cachDochangTram = "Năm trăm";
        }; break;
        case 6: {
            cachDochangTram = "Sáu trăm";
        }; break;
        case 7: {
            cachDochangTram = "Bảy trăm";
        }; break;
        case 8: {
            cachDochangTram = "Tám trăm";
        }; break;
        case 9: {
            cachDochangTram = "Chín trăm";
        }; break;
    }
    // hàng chục: có 2 TH, nếu đơn vị = 0 và nếu đơn vị khác 0 thì cách đọc số 0 khác nhau
    if (hangDonvi != 0) {
        switch (hangChuc) {
            case 0: {
                cachDochangChuc = "linh";
            }; break;
            case 1: {
                cachDochangChuc = "mười";
            };
                break;
            case 2: {
                cachDochangChuc = "hai mươi";
            }; break;
            case 3: {
                cachDochangChuc = "ba mươi";
            }; break;
            case 4: {
                cachDochangChuc = "bốn mươi";
            }; break;
            case 5: {
                cachDochangChuc = "năm mươi";
            }; break;
            case 6: {
                cachDochangChuc = "sáu mươi";
            }; break;
            case 7: {
                cachDochangChuc = "bảy mươi";
            }; break;
            case 8: {
                cachDochangChuc = "tám mươi";
            }; break;
            case 9: {
                cachDochangChuc = "chín mươi";
            }; break;
        }
    } else {
        switch (hangChuc) {
            case 0: {
                cachDochangChuc = " ";
            }; break;
            case 1: {
                cachDochangChuc = "mười";
            };
                break;
            case 2: {
                cachDochangChuc = "hai mươi";
            }; break;
            case 3: {
                cachDochangChuc = "ba mươi";
            }; break;
            case 4: {
                cachDochangChuc = "bốn mươi";
            }; break;
            case 5: {
                cachDochangChuc = "năm mươi";
            }; break;
            case 6: {
                cachDochangChuc = "sáu mươi";
            }; break;
            case 7: {
                cachDochangChuc = "bảy mươi";
            }; break;
            case 8: {
                cachDochangChuc = "tám mươi";
            }; break;
            case 9: {
                cachDochangChuc = "chín mươi";
            }; break;
        }

    }

    // hàng đơn vị: có 2 TH, nếu hàng chục = 1 và hàng chục khác 1 thì cách đocj số 1 khác nhau
    if (hangChuc === 1 || hangChuc === 0) {
        switch (hangDonvi) {
            case 0: {
                cachDochangDonvi = " ";
            }; break;
            case 1: {
                cachDochangDonvi = "một";
            };
                break;
            case 2: {
                cachDochangDonvi = "hai";
            }; break;
            case 3: {
                cachDochangDonvi = "ba";
            }; break;
            case 4: {
                cachDochangDonvi = "bốn";
            }; break;
            case 5: {
                cachDochangDonvi = "lăm";
            }; break;
            case 6: {
                cachDochangDonvi = "sáu";
            }; break;
            case 7: {
                cachDochangDonvi = "bảy";
            }; break;
            case 8: {
                cachDochangDonvi = "tám";
            }; break;
            case 9: {
                cachDochangDonvi = "chín";
            }; break;
        }
    }
    else {
        {
            switch (hangDonvi) {
                case 0: {
                    cachDochangDonvi = " ";
                }; break;
                case 1: {
                    cachDochangDonvi = "mốt";
                };
                    break;
                case 2: {
                    cachDochangDonvi = "hai";
                }; break;
                case 3: {
                    cachDochangDonvi = "ba";
                }; break;
                case 4: {
                    cachDochangDonvi = "bốn";
                }; break;
                case 5: {
                    cachDochangDonvi = "lăm";
                }; break;
                case 6: {
                    cachDochangDonvi = "sáu";
                }; break;
                case 7: {
                    cachDochangDonvi = "bảy";
                }; break;
                case 8: {
                    cachDochangDonvi = "tám";
                }; break;
                case 9: {
                    cachDochangDonvi = "chín";
                }; break;
            }

        }
    }


    // xuất output:

    document.getElementById('ketQua_3').innerHTML = "Cách đọc số " + soNguyen + " là: " + cachDochangTram + " " + cachDochangChuc + " " + cachDochangDonvi;
}



// bài 4
// input: tên + toạ độ nhà 3 sinh viên; toạ độ trường học 
// output: in ra tên bạn sv có nhà xa trường nhất 
// xử lý: tính khoảng cách toạ độ = công thức: d = sqrt((x2-x1)^2 + (y2 - y1)^2) => so sánh các khoảng cách với nhau. 

document.getElementById('btnKhoangcach').onclick = function () {
    var tenSv1 = document.getElementById('tenSV1').value;
    var tenSv2 = document.getElementById('tenSV2').value;
    var tenSv3 = document.getElementById('tenSV3').value;

    var xSV1 = Number(document.getElementById('toaDoxSV1').value);
    var ySV1 = Number(document.getElementById('toaDoySV1').value);

    var xSV2 = Number(document.getElementById('toaDoxSV2').value);
    var ySV2 = Number(document.getElementById('toaDoySV2').value);

    var xSV3 = Number(document.getElementById('toaDoxSV3').value);
    var ySV3 = Number(document.getElementById('toaDoySV3').value);

    var xSchool = Number(document.getElementById('toaDoxTH').value);
    var ySchool = Number(document.getElementById('toaDoyTH').value);



    // xử lý:
    // tính khoảng khách từ nhà tới trường của từng bạn:
    // Bạn 1: 
    var dSV1 = Math.sqrt((xSV1 - xSchool) * (xSV1 - xSchool) + (ySV1 - ySchool) * (ySV1 - ySchool));

    // Bạn 2: 
    var dSV2 = Math.sqrt((xSV2 - xSchool) * (xSV2 - xSchool) + (ySV2 - ySchool) * (ySV2 - ySchool));

    // Bạn 3: 
    var dSV3 = Math.sqrt((xSV3 - xSchool) * (xSV3 - xSchool) + (ySV3 - ySchool) * (ySV3 - ySchool));

    var svXanhat = '';
    //  So sánh 
    if (dSV1 > dSV2 && dSV1 > dSV3) {
        svXanhat = tenSv1;
    }
    else if (dSV2 > dSV1 && dSV2 > dSV3) {
        svXanhat = tenSv2;

    }
    else if (dSV3 > dSV1 && dSV3 > dSV2) {
        svXanhat = tenSv3;
    }

    else if (dSV1 === dSV2 && dSV1 > dSV3) {
        svXanhat = tenSv1 +" và " + tenSv2;
    }
    else if (dSV1 === dSV3 && dSV1 > dSV2) {
        svXanhat = tenSv1 +" và " + tenSv3;
    }
    else if (dSV1 < dSV2 && dSV2 === dSV3) {
        svXanhat = tenSv2 +" và " + tenSv3;
    }
    else if (dSV1 === dSV2 && dSV2 === dSV3) {
        svXanhat = tenSv1 +" và " + tenSv2 +" và " + tenSv3 + " đều cách trường 1 khoảng cách bằng nhau";
    }


    // xuất kết quả ra màn hình:
    document.getElementById('ketQua-4').innerHTML = svXanhat;
}

