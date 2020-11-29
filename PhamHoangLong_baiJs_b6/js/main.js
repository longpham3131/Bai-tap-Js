function getMyEle(ele){
    return document.getElementById(ele);
}
function txtStyleSuccess(ele){
    return getMyEle(ele).style.cssText ="background-color: green; color: white; font-size: 14px";
}

function txtStyleFail(ele){
    return getMyEle(ele).style.cssText ="background-color: red; color: white; font-size: 14px";
}
//Bài 1:
function timSoNhoNhat(){
    var number = 1, sum = 0;
    while(sum < 10000){
        sum += number;
        number++; 
    }
    getMyEle("txtSoNguyenDuongNhoNhat").innerHTML ="Số nguyên dương cần tìm là: " + number + "<br>" + "Tổng là: " + sum;
    txtStyleSuccess("txtSoNguyenDuongNhoNhat");
}

getMyEle("btnTim").addEventListener("click", timSoNhoNhat );

//Bài 2: S(n) = x + x^2 + x^3 + … + x^n

function tinhTong(){
    var tong = 0;
    var soN = parseFloat(getMyEle("inpNhapN").value) ;
    var soX = getMyEle("inpNhapX").value;
   
    if(soN >= 1 && Number.isInteger(soN)){
        for(var i = 1; i <= soN; i++){ 
            var ketQuaXMuN = 1;
    
            for(var j = 1; j <=i; j++){
                ketQuaXMuN *= soX;
            }
            tong += ketQuaXMuN;
        }
    
        getMyEle("txtTongSn").innerHTML ="Tổng cần tìm là: " + tong;
        txtStyleSuccess("txtTongSn");
    }
    else{
        getMyEle("txtTongSn").innerHTML ="Số N phải nguyên dương và lớn hơn hoặc bằng 1 !!!";
        txtStyleFail("txtTongSn");
    }


}

getMyEle("btnTinhTong").addEventListener("click", tinhTong);

//Bài 3: Nhập vào n. Tính giai thừa 1*2*...n

function tinhGiaiThua(){
    var nGiaiThua = parseFloat(getMyEle("inpNGiaiThua").value) ;
    var tong = 1;
    if(nGiaiThua == 0){
        getMyEle("txtGiaiThua").innerHTML = "Giai thừa = 1";
        txtStyleSuccess("txtGiaiThua");
    }
    else if(nGiaiThua > 0 && Number.isInteger(nGiaiThua)){
        for(var i = 2; i <= nGiaiThua; i++ ){
            tong *= i;
        }
        getMyEle("txtGiaiThua").innerHTML = "Giai thừa = " + tong;
        txtStyleSuccess("txtGiaiThua");
    }
    else{
        getMyEle("txtGiaiThua").innerHTML = "N phải là số nguyên dương !!! ";
        txtStyleFail("txtGiaiThua");
    }
}
getMyEle("btnTinhGiaiThua").addEventListener("click",tinhGiaiThua );


//Bài 4: Sinh 10 thẻ div

function sinhDivTag(){
    divCha = document.getElementById("divRong");
    divCon = document.createElement("div");
    for(i = 1 ; i <= 10; i++){
        var divTag = document.createElement("div");
        divTag.style.width ="30px";
        divTag.style.height ="30px";
        divTag.innerHTML =  i
        if(i%2 == 0){
            // divTag.cssText ="background-color: red; width: 30px; height: 30px;";
            divTag.style.backgroundColor = "red";
        }
        else{
            // divTag.cssText ="background-color: green; width: 30px; height: 30px;";
            divTag.style.backgroundColor ="blue"
        }
        divCon.appendChild(divTag);
        divCon.className = "d-flex justify-content-around mt-2";
        
    }
    divCha.appendChild(divCon);
}
getMyEle("btnSinhDiv").addEventListener("click", sinhDivTag);