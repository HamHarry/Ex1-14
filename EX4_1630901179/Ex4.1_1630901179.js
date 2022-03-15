//JavaScript by Saowapak STID = 1630901179
//Ex4.1: JavaScript Statements and Assignments
/*
    สร้างตัวแปล 3 ตัว num1, num2, result ซึ่ง กำหนดให้ result = num1 + num2
    จากนั้นส่งค่่าตัวแปลที่คำนวนได้พร้อมทั้งชุดข้อความไปแสดงผลผ่าน id : ex4-1
*/
var num1, num2, result; //Declare 3 Variables var-> use all
num1 = 3;   //Assign num1 -> Data Type: Number
num2 = 6;   //Assign num2 -> Data Type: Number
result = num1 + num2; //Assign result -> Calculation 
document.getElementById("ex4-1").innerHTML = "The value of result is " + (num1 + num2) +" or "+ result + ".";