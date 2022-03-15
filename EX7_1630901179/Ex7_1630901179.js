///JavaScript by Saowapak STID = 1630901179
//Ex7: JavaScript String Concatenation
/*
    สร้างตัวแปล 5 ตัว text1,text2,text3,text4,text5 
    ซึ่ง กำหนดให้แต่ระตัวแปลเก็บข้อความเลข
    จากนั้นส่งค่่าตัวแปลที่คำนวนได้พร้อมทั้งชุดข้อความไปแสดงผล
    ผ่าน id : ex7
*/
var text1 = "I'm studying ";
var text2 = "JavaScript Programming";
var text3 = "Visual Studio Code 😍";
document.getElementById("ex7").innerHTML = text1 + text2 + " with " + text3;
text1 += "Python Programming 😃";  //เพิ่มข้อความเข้าไปต่อจากข้อความเดิมที่เก็บไว้
document.write(text1);             //เขียนตัวแปลtext1ที่เปลี่ยนแปลงแล้ว
let text4 = "📆" + " Mon " + 5; //ตัวแปลที่มีทั้งข้อความและตัวเลข
let text5 = "October " + 2021; 
document.write("<br><br>"+text4+" "+text5); //เขียนตัวแปลtext4,text5