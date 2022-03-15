//JavaScript by Saowapak STID = 1630901179
//Ex4.3: JavaScript Variables and Operators
/*
    สร้างตัวแปล raw_score ซึ่ง กำหนดให้ raw_score = 180
    ส่งค่่าตัวเลขและตัวอักษรไปแสดงผลผ่าน id : ex4-3-1,ex4-3-2
    โดยหากต้องการผสมทั้งเลขและตัวอักษรให้ใช้เครื่องหมาย + เป็นตัวเชื่อม
    และใส่สมการเพื่อคำนวนหาผลลัพธ์ไปแสดงผล
*/
let raw_score = 180;  //let -> use only { } block scope
document.getElementById("ex4-3-1").innerHTML = raw_score;
document.getElementById("ex4-3-2").innerHTML = "score: "+(raw_score*100)/200;