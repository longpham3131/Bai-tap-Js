function getMyEle(ele) {
    return document.getElementById(ele);
}

var arrayNumber = [];

//Nạp phần tử vào mảng từ input
function themMang() {
    var num = parseFloat(getMyEle("inpPhanTu").value);
    arrayNumber.push(num);
    xuatMangUI(num, "divMang");
    sapXepMang()
    return arrayNumber;
}

// Hàm tạo thẻ div cho mỗi phần tử của mảng
function xuatMangUI(giaTri, divXuatMang) {
    var phanTu = document.createElement("div");
    phanTu.style.cssText = "background-color: #0070C0; color: white; width:30px; height: 30px; margin: 15px;  box-shadow: rgb(136, 136, 136) 3px 2px; "
    phanTu.innerHTML = giaTri;
    document.getElementById(divXuatMang).appendChild(phanTu)
}

function tinhTongSoDuong() {
    var tong = 0
    for (var i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > 0) {
            tong += arrayNumber[i];
        }
    }
    return tong;
}
function demSoDuong() {
    var dem = 0;
    for (var i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > 0) {
            dem++;
        }
    }
    return dem;
}
function timSoNhoNhat() {
    var min = arrayNumber[0];
    for (var i = 1; i < arrayNumber.length; i++) {
        if (arrayNumber[i] < min)
            min = arrayNumber[i]
    }
    return min;
}
// Hàm tìm số dương trong mảng. Nếu không có số dương nào tồn tại thì trả về -1
function timSoDuongTrongMang() {
    var soDuong;
    for (var i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] >= 0) {
            soDuong = arrayNumber[i];

            return soDuong;
        }
    }
    return -1;

}
function timSoDuongNhoNhat() {
    if (timSoDuongTrongMang() != -1) {
        var min = timSoDuongTrongMang();
        for (var i = 0; i < arrayNumber.length; i++) {
            if (arrayNumber[i] < min && arrayNumber[i] >= 0)
                min = arrayNumber[i]
        }
        return min;
    }
    //Nếu mảng hiện chưa có số dương thì xuất ra NaN
    else {
        return "NaN";
    }

}
function timSoChanCuoiCung() {
    for (var i = arrayNumber.length - 1; i >= 0; i--) {
        if (arrayNumber[i] % 2 == 0)
            return arrayNumber[i];
    }
    return -1;
}

function doiViTri() {

    var viTri1 = parseFloat(getMyEle("inpViTri1").value);
    var viTri2 = parseFloat(getMyEle("inpViTri2").value);

    //Kiểm tra vị trí hợp lệ của phần tử trong mảng
    if (viTri1 < 0 || viTri1 > arrayNumber.length - 1 ||
        viTri2 < 0 || viTri2 > arrayNumber.length - 1 ||
        Number.isInteger(viTri1) == false || Number.isInteger(viTri2) == false) {
        getMyEle("txtHoanDoi").innerHTML = "Vị trí nhập vào không hợp lệ !!!";
    }

    else {
        var temp = arrayNumber[viTri1];
        arrayNumber[viTri1] = arrayNumber[viTri2];
        arrayNumber[viTri2] = temp;

        var divMang = document.getElementById("divMang");
        while (divMang.childElementCount > 0) {
            divMang.removeChild(divMang.lastChild)
        }
        for (var i = 0; i < arrayNumber.length; i++) {
            xuatMangUI(arrayNumber[i], "divMang");
        }
        getMyEle("txtHoanDoi").innerHTML = "";
    }

}
function sapXepMang() {
    var arraySort = [];
    //Xóa các thẻ div tồn tại trước đó
    var divSapXep = document.getElementById("divMangSapXep");
    while (divSapXep.childElementCount > 0) {
        divSapXep.removeChild(divSapXep.lastChild)
    }
    for (var i = 0; i < arrayNumber.length; i++) {
        arraySort[i] = arrayNumber[i];
    }

    //Sắp xếp mảng tăng dần
    for (var i = 0; i < arraySort.length - 1; i++) {

        for (var j = i + 1; j < arraySort.length; j++) {
            if (arraySort[i] > arraySort[j]) {
                var temp = arraySort[i];
                arraySort[i] = arraySort[j];
                arraySort[j] = temp;
            }
        }
    }
    // Xuất thẻ div tượng trưng cho từng phần tử của mảng
    for (var i = 0; i < arraySort.length; i++) {
        xuatMangUI(arraySort[i], "divMangSapXep");
    }
}
function xuatKetQuaTinhToan() {
    var tongSoDuong = tinhTongSoDuong();
    var soLuongSoDuong = demSoDuong();
    var soNhoNhat = timSoNhoNhat();
    var soDuongNhoNhat = timSoDuongNhoNhat();
    var soChanCuoiCung = timSoChanCuoiCung();
    getMyEle("txtMang").innerHTML = "Tổng phần tử số dương: " + tongSoDuong +
        "<br>" + "Số lượng phần tử số dương: " + soLuongSoDuong +
        "<br>" + "Phần tử có giá trị nhỏ nhất: " + soNhoNhat +
        "<br>" + "Phần tử dương nhỏ nhất: " + soDuongNhoNhat +
        "<br>" + "Phần tử chẵn cuối cùng: " + soChanCuoiCung;
}

getMyEle("btnNap").addEventListener("click", function () {
    themMang();
    xuatKetQuaTinhToan();
});

getMyEle("btnDoi").addEventListener("click", function () {

    doiViTri();
    xuatKetQuaTinhToan();

});
