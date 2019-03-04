var ปชช = document.getElementById('ปชช')
var คำนำหน้า = document.getElementById("คำนำหน้า")
var ชื่อ = document.getElementById("ชื่อ")
var นามสกุล = document.getElementById('นามสกุล')
var ชื่อเล่น = document.getElementById("ชื่อเล่น")
var วันที่ = document.getElementById("วันที่")
var จังหวัด = document.getElementById("จังหวัด")
var อำเภอ = document.getElementById('อำเภอ')
var ตำบล = document.getElementById("ตำบล")
var บ้านเลขที่ = document.getElementById("บ้านเลขที่")
var ถนน = document.getElementById("ถนน")
var รหัสไปรษณีย์ = document.getElementById('รหัสไปรษณีย์')
var โทรศัพท์ = document.getElementById("โทรศัพท์")
var โทรศัพท์มือถือ = document.getElementById("โทรศัพท์มือถือ")
var โทรสาร = document.getElementById("โทรสาร")
var อีเมล = document.getElementById("อีเมล")

var ชื่ออังกฤษ = document.getElementById('ชื่ออังกฤษ')
var นามสกุลอังกฤษ = document.getElementById("นามสกุลอังกฤษ")
var Prefix = document.getElementById("Prefix")


var checkAll = () => {
    if(checkEmail() == true && checkempty() == true) {
        alert("ข้อมูลถูกต้อง")
    }if (checkempty() == false) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน")
    }if (checkEmail() == false) {
        alert("Email ไม่ถูกต้อง")
    }if (checktell() == false) {
        alert("เบอร์โทรศัพทไม่ครบ 10 หลัก")
    }
}

var cleartext = () => {
   ปชช.value = ""
   คำนำหน้า.value = ""
   ชื่อ.value = ""
   นามสกุล.value = ""
   ชื่อเล่น.value = "" 
   วันที่.value = ""
   จังหวัด.value = ""
   อำเภอ.value = ""
   ตำบล.value = "" 
   บ้านเลขที่.value = "" 
   ถนน.value = "" 
   รหัสไปรษณีย์.value = "" 
   โทรศัพท์.value = ""
   โทรศัพท์มือถือ.value = ""
   โทรสาร.value = ""
   อีเมล.value = ""
   ชื่ออังกฤษ.value = "" 
   นามสกุลอังกฤษ.value = "" 
}

var checktell = () => {

    if(โทรศัพท์มือถือ.value.length < 10){
        
        return false
    }else {
        return true
    }
} 


var isInputNumber = (evt) => {

    var ch = String.fromCharCode(evt.which);

    if (!(/[0-9]/.test(ch))) {
        evt.preventDefault();
    }
}


var checkempty = () => {
    if(ปชช.value == "" || คำนำหน้า.value == "" || ชื่อ.value == "" ||
    นามสกุล.value == "" || ชื่อเล่น.value == "" || วันที่.value == "" || 
    จังหวัด.value == "" || อำเภอ.value == "" || ตำบล.value == "" ||
    บ้านเลขที่.value == "" || ถนน.value == "" || รหัสไปรษณีย์.value == "" ||
    โทรศัพท์.value == "" || โทรศัพท์มือถือ.value == "" || โทรสาร.value == "" ||
    อีเมล.value == "" || ชื่ออังกฤษ.value == "" || นามสกุลอังกฤษ.value == "" ){
        return false
        // alert("กรุณากรอกข้อมูลให้ครบถ้วน")
        // checkEmail()
    }else{
        return true
        // alert("ครบ")
    }
}


var checkEmail = () => {

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(อีเมล.value)) {
        // alert('Email ไม่ถูกต้อง');
        return false;
    }else {
        // alert("ถูก")
        return true;
    }
}

