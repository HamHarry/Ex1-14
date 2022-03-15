//JavaScript by Saowapak STID = 1630901179
//Ex10.1 A Simple Function
/*
    สร้างฟังก์ชั่น myHello
    แล้วส่งข้อความจากฟังก์ชั่น myHello ไปแสดงผล
    ผ่าน id : ex10-1
    เมื่อกดปุ่ม
*/
function myHello(){
    document.getElementById("ex10-1").innerHTML = "Hello JavaScript";
}

//Ex10.2 Functions with an Argument
/*
    สร้างฟังก์ชั่น myWelcome(name, job)
    โดยรับค่ามาเก็บไว้ที่ name และ job 
    ที่ส่งมาผ่านฟังก์ชั่น myWelcome(name, job)ก่อน
    แล้วส่งข้อความที่ได้ไปแสดงผล
    ผ่าน id : ex10-2
    เมื่อกดปุ่ม
*/
function myWelcome(name, job){
    document.getElementById("ex10-2").innerHTML = "Welcome " + name + ", the " + job + ".";
}

//Ex10.3 Functions with an Argument by Text
/*
    สร้างฟังก์ชั่น myText(text)
    โดยรับค่าจาก <form>input ว่าเป็นอะไร
    จากนั้นเก็บไว้ใน text
    แล้วส่งข้อความที่ได้ไปแสดงผล
    ผ่าน id : ex10-3
    เมื่อกดปุ่ม
*/
function myText(text){
    document.getElementById("ex10-3").innerHTML = text;
}

//Ex10.4 Functions that return an Area Value 
/*
    สร้างฟังก์ชั่น myArea(6, 8) เก็บในตัวแปล area
    โดยกำหนดเงื่อนไขผ่านฟังก์ชั่นmyArea(width, length)
    แล้วreturnค่ากลับไปแสดงผล
    ผ่าน id : ex10-4
*/
var area = myArea(6, 8);
document.getElementById("ex10-4").innerHTML = area;
function myArea(width, length) {
  return width * length;
}

//Ex10.5 Functions that return a Temperature Value 
/*
    ส่งฟังก์ชั่น Celsius(89)ไปแสดงผล
    ผ่าน id : ex10-5
    แล้วส่งค่ามาเก็บไว้ใน fahrenheit
    โดยกำหนดเงื่อนไขผ่านฟังก์ชั่น Celsius(fahrenheit)
    แล้วreturnค่ากลับไปแสดงผล
*/
document.getElementById("ex10-5").innerHTML = Celsius(89);
function Celsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

//Ex10.6 Input & Output and regArea Functions
/*
    ส่งฟังก์ชั่น regArea()
    รับค่าinputมาเก็บไว้ในตัวแปล r_width,r_length
    ผ่าน id : input1,input2
    โดยกำหนดเงื่อนไขว่าเป็นตัวเลขหรือไม่หากเป็นตัวเลขให้ส่งค่าresult
    ที่นำ r_width,r_length มาคูณกันแล้วไปแสดงผล
    ผ่าน id : result
*/
function regArea() {
    var r_width = document.getElementById('input1').value;
    var r_length = document.getElementById('input2').value;
    var result = r_width * r_length;
    if (!isNaN(result)) {
        document.getElementById('result').value = result;
    }
}

//Ex10.7 Input & Output and toCelsius Function
/*
    ส่งฟังก์ชั่น toCelsius()
    รับค่าinputมาเก็บไว้ในตัวแปล fah
    ผ่าน id : fah_value
    โดยกำหนดเงื่อนไขว่าเป็นตัวเลขหรือไม่หากเป็นตัวเลขให้ส่งค่าcel_result
    ที่นำมาเข้าสมการแปลงอุณหภูมิแล้วไปแสดงผล
    ผ่าน id : cel_result
*/
function toCelsius() {
    var fah = document.getElementById('fah_value').value;
    var cel_result = (5/9) * (fah-32);
    if (!isNaN(cel_result)) {
        document.getElementById('cel_result').value = cel_result;
    }
}
