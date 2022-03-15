///JavaScript by Saowapak STID = 1630901179
//Ex9.1 JavaScript Objects .property
/*
    สร้างตัวแปลObjects ที่เป็นข้อความและตัวเลข
    ในรูปแบบ"."
    จากนั้นส่งค่่าตัวแปลที่คำนวนได้พร้อมทั้งชุดข้อความไปแสดงผล
    ผ่าน id : ex9-1
*/
const person1 = {
    firstName:"Javascript", 
    lastName:"Man", 
    age:30, 
    eyeColor:"Brown"};
//Display some data from the object:
document.getElementById("ex9-1").innerHTML =
person1.firstName + " " + person1.lastName + " is " + person1.age + " years old and "+ person1.eyeColor + " eyes.";

//Ex9.2 JavaScript Objects [property]
/*
    สร้างตัวแปลObjects ที่เป็นข้อความและตัวเลข
    ในรูปแบบ"[]"
    จากนั้นส่งค่่าตัวแปลที่คำนวนได้พร้อมทั้งชุดข้อความไปแสดงผล
    ผ่าน id : ex9-2
*/
const person2 = {
    firstName:"Html", 
    lastName:"Woman", 
    age:26, 
    eyeColor:"Blue"};
//Display some data from the object:
document.getElementById("ex9-2").innerHTML =
person2["firstName"] + " " + person2["lastName"] + " is " + person2["age"] + " years old and "+ person2["eyeColor"] + " eyes.";

//Ex9.3 JavaScript Objects Function as a Method
/*
    สร้างตัวแปลObjects ที่เป็นข้อความและตัวเลข
    ในรูปแบบของฟังก์ชั่นที่เก็บไว้ในตัวแปลfullPersonอีกที
    แล้วนำค่าจากตัวแปลfullPersonส่งไปแสดงผล
    ผ่าน id : ex9-1
*/
const person3 = {
    firstName:"CSS", 
    lastName:"Boy", 
    age:8, 
    eyeColor:"Green",
    fullPerson: function(){
        return this.firstName + " " + this.lastName + " is " + this.age + " years old and "+ this.eyeColor + " eyes.";
    }
};
//Display some data from the object:
document.getElementById("ex9-3").innerHTML = person3.fullPerson();