//JavaScript by Saowapak STID = 1630901179
//Ex5: JavaScript Arithmetic
/*
    สร้างตัวแปล 3 ตัว x = 10, y = 30, z = 60
    จากนั้นส่งค่่าตัวแปลที่คำนวนได้ในแต่ละตัวและสมการที่แตกต่างกัน
    ไปแสดงผล
    ผ่าน id : ex5-1,ex5-2,ex5-3,ex5-4,ex5-5
             ex5-6,ex5-7,ex5-8,ex5-9,ex5-10
    สุดท้ายเป็นการเขียนให้แสดงผลตามคำสั่งที่ใส่ z++,<br>,++z
*/
var x = 10;
let y = 30;
let z = 60;
document.getElementById("ex5-1").innerHTML = x+y+z; 
document.getElementById("ex5-2").innerHTML = z-y+x;
document.getElementById("ex5-3").innerHTML = x*z/3;
document.getElementById("ex5-4").innerHTML = 78%9;
document.getElementById("ex5-5").innerHTML = x++;
document.getElementById("ex5-6").innerHTML = x;
document.getElementById("ex5-7").innerHTML = ++x;
document.getElementById("ex5-8").innerHTML = y--;
document.getElementById("ex5-9").innerHTML = --y;
document.getElementById("ex5-10").innerHTML = ++z;
document.write(z++);
document.write("<br>");
document.write(++z);
