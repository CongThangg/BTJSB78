var numArray = [];


function nhapSo() {

    var num = Number(document.getElementById("inputNumber").value);

    numArray.push(num);

    document.getElementById("ketQuaNhapSo").innerHTML = numArray;
}
document.getElementById("txtNhapSo").onclick = nhapSo;

//=======================================================================
// 1: Tổng số dương
function tongSoDuong() {

    var tongDuong = 0;

    for (var i = 0; i < numArray.length; i++) {

        if (numArray[i] > 0) {
            tongDuong += numArray[i];
        }
    }
    document.getElementById("ketQua1").innerHTML = tongDuong;
}
document.getElementById("txt1").onclick = tongSoDuong;

//=========================================================================
//2: Đếm số dương
function demSoDuong() {

    var count = 0;

    for (var i = 0; i < numArray.length; i++)
        if (numArray[i] > 0) {
            count++;
        }
    document.getElementById("ketQua2").innerHTML = count;
}
document.getElementById("txt2").onclick = demSoDuong;

//=========================================================================
//3: Tìm số nhỏ nhất
function soNhoNhat() {

    var min = numArray[0];

    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] < min) {
            min = numArray[i]
        }
    }
    document.getElementById("ketQua3").innerHTML = min;
}
document.getElementById("txt3").onclick = soNhoNhat;

//==========================================================================
//4: Tìm số dương nhỏ nhất
function soDuongNN() {
    var min = -1;
    for (var i = 0; i < numArray.length; i++) {
        if ((min == -1 || numArray[i] < min) && numArray[i] > 0) {
            min = numArray[i];
        }
    }
    document.getElementById("ketQua4").innerHTML = min;
}
document.getElementById("txt4").onclick = soDuongNN;
//===========================================================================
//5: Tìm số chẵn cuối cùng
function soChanCuoi() {
    var arrayChan = [];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0) {
            arrayChan.push(numArray[i]);
        }
    }
    document.getElementById('ketQua5').innerHTML = arrayChan[arrayChan.length - 1];
    return -1;
}
document.getElementById("txt5").onclick = soChanCuoi;

//===========================================================================
//6: Đổi chỗ
function doiCho() {
    for (var j = 0; j < numArray.length - 1; j++) {
        if (numArray[j] > numArray[j - 1]) {

            var temp = numArray[j];
            numArray[j] = numArray[j - 1];
            numArray[j - 1] = temp;
        }
    }
    document.getElementById('ketQua6').innerHTML = numArray;
}
document.getElementById("txt6").onclick = doiCho;

//===========================================================================
//7: Sắp xếp tăng dần

// var numArrayCopy=[]
// for (var i = 0; i < numArrayCopy.length; i++) {
//     numArrayCopy.push(numArray[i]);
// }
// function sapXepTangDan() {
//     for (var i = 0; i < numArrayCopy.length; i++) {
//         for (var j = 0; j < numArrayCopy.length - 1; j++) {
//             if (numArrayCopy[j] > numArrayCopy[j + 1]) {
//                 var temp = numArrayCopy[j]; 
//                 numArrayCopy[j] = numArrayCopy[j + 1]; 
//                 numArrayCopy[j + 1] = temp;
//             }
//         }
//     }
//     console.log(numArrayCopy)
//     document.getElementById("ketQua7").innerHTML = numArrayCopy;
// }
// document.getElementById("txt7").onclick = sapXepTangDan;

function sapXepTangDan() {
    for (var i = 0; i < numArray.length; i++) {
        for (var j = 0; j < numArray.length - 1; j++) {
            if (numArray[j] > numArray[j + 1]) {
                var temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp;
            }
        }
    }
    document.getElementById("ketQua7").innerHTML = numArray;
}
document.getElementById("txt7").onclick = sapXepTangDan;

//==============================================================
// 8: Tìm số nguyên tố đầu tiên
function kiemTraNguyenTo()
{
	var dem=0;
	for(var i=1;i<=numArray.length;i++)
	{
		if(numArray%i==0)
		{
			dem=dem+1; 
		}
	}
	if(dem==2)
	{
		return 1;
	}
	return 0;
}

function soNguyenTo()
{
    var a = numArray[0];
	for(var i=0;i<numArray.length;i++)
	{
		if(ktnt(a[i])==1)
		{
			var lc=a[i];
			return lc;
		}
	}document.getElementById("ketQua8").innerHTML = a;
	return -1;
}
document.getElementById("txt8").onclick = soNguyenTo;
//==============================================================
// 9: Đếm số nguyên

var mangSoThuc = [];

function nhapSoThuc() {

    var num1 = Number(document.getElementById("inputNumber1").value);

    mangSoThuc.push(num1);

    document.getElementById("ketQuaNhapSo1").innerHTML = mangSoThuc;
}
document.getElementById("txtNhapSo1").onclick = nhapSoThuc;

function kiemTraSoNguyen() {

    var count = 0;

    for (var i = 0; i <= mangSoThuc.length; i++) {
        if (mangSoThuc % i == 0) {
            count += 1;
        }
    }
    // return 0;
}
function countSoNguyen() {
    var soNguyen = 0;
    for(var i = 0; i <mangSoThuc.length; i++){
        if (mangSoThuc[i] = kiemTraSoNguyen) {
            soNguyen++
        }
    }
    document.getElementById("ketQua9").innerHTML= soNguyen; 
}
document.getElementById("txt9").onclick = countSoNguyen;


//==============================================================
// 10: So sánh số lượng âm và dương
function soSanh() {
    var soDuong = 0;
    var soAm = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            soDuong++;
        } else if (numArray[i] < 0) {
            soAm++;
        }
    }

    var so = "";
    if (soDuong < soAm) {
        so = "Số âm > Số dương";
    } else if (soDuong > soAm) {
        so = "Số dương > Số âm";
    }
    document.getElementById("ketQua10").innerHTML = so;
}
document.getElementById("txt10").onclick = soSanh;
