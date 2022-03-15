//JavaScript by Saowapak STID = 1630901179
//Ex6: JavaScript Assignments
/*
    สร้างตัวแปล 5 ตัว a = 10, b = 30, c = 60,d = 80,e = 120 
    ซึ่ง กำหนดให้ a += 3,b -= 8,c *= 4,d /= 6,e %= 9
    จากนั้นส่งค่่าตัวแปลที่คำนวนได้พร้อมทั้งชุดข้อความไปแสดงผล
    ผ่าน id : ex6-1,ex6-2,ex6-3,ex6-4,ex6-5,ex6-6
*/
var a = 10;
let b = 30;
let c = 60;
let d = 80;
let e = 120;
a += 3;         //a = a + 3 -> 10 + 3
b -= 8;         //b = b - 8 -> 30 - 8
c *= 4;         //c = c * 4 -> 60 * 4
d /= 6;         //d = d / 6 -> 80 / 6
e %= 9;         //e = e % 9 -> 120 % 9
document.getElementById("ex6-1").innerHTML = a; 
document.getElementById("ex6-2").innerHTML = b;
document.getElementById("ex6-3").innerHTML = c;
document.getElementById("ex6-4").innerHTML = d;
document.getElementById("ex6-5").innerHTML = e;