//JavaScript by Saowapak STID = 1630901179
//Ex12.1 Math.PI and Math.pow()
/*
    แสดงข้อความบอกค่าของ radius,PI,Circle Area ผ่านคำสั่ง Math
    สร้างฟังก์ชั่น circleArea()
    รับค่าจาก id : input มาเก็บไว้ที่ radius
    กำหมดให้ตัวแปล result = Math.PI * Math.pow(radius,2)
    ตรวจสอบว่า input ที่ใส่มาเป็นเลขหรือไม่หากเป็นเลขให้แสดงค่า result
    ผ่าน id : result
*/
var radius = 8;
document.getElementById("ex12-1").innerHTML = "radius = 8 <br> PI = " + Math.PI + "<br> Circle Area = " + Math.PI * Math.pow(radius,2); //PI*r*r
function circleArea() {
    var radius = document.getElementById('input').value;
    var result = Math.PI * Math.pow(radius,2);
    if (!isNaN(result)) {
        document.getElementById('result').value = result;
    }
}

//Ex12.2 Math.sqrt(), Math.round(), Math.ceil(), and Math.floor()
/*
    สร้างฟังก์ชั่น mathFunctions()
    รับค่าจาก id : number_input มาเก็บไว้ที่ number
    กำหมดให้ตัวแปล sqrt_result = Math.sqrt(number)
                 round_result = Math.round(sqrt_result)
                 ceil_result = Math.ceil(sqrt_result)
                 floor_result = Math.floor(sqrt_result)
    ตรวจสอบว่า input ที่ใส่มาเป็นเลขหรือไม่หากเป็นเลขให้แสดงค่าตัวเลขที่คำนวนตามแต่ละหัวข้อได้แก่
    sqrt ผ่าน id : sqrt_output
    round ผ่าน id : round_output
    ceil ผ่าน id : ceil_output
    floor ผ่าน id : floor_output
*/
function mathFunctions() {
    var number = document.getElementById('number_input').value;
    var sqrt_result = Math.sqrt(number);
    if (!isNaN(sqrt_result)) {
        document.getElementById('sqrt_output').value = sqrt_result;
    }
    var round_result = Math.round(sqrt_result);
    if (!isNaN(round_result)) {
        document.getElementById('round_output').value = round_result;
    }
    var ceil_result = Math.ceil(sqrt_result);
    if (!isNaN(ceil_result)) {
        document.getElementById('ceil_output').value = ceil_result;
    }
    var floor_result = Math.floor(sqrt_result);
    if (!isNaN(floor_result)) {
        document.getElementById('floor_output').value = floor_result;
    }
}

//Ex12.3 Math.abs(), Math.sin(), Math.cos(), Math.min(), and Math.max()
document.getElementById("ex12-3-1").innerHTML = Math.abs(-8.8); //แสดงค่า Absolute Value ของค่าที่กำหนด ผ่าน id : ex12-3-1
document.getElementById("ex12-3-2").innerHTML = Math.sin(90 * Math.PI / 180);  //แสดงค่า sin ของค่าที่กำหนด ผ่าน id : ex12-3-2
document.getElementById("ex12-3-3").innerHTML = Math.cos(30 * Math.PI / 180);  //แสดงค่า cos ของค่าที่กำหนด ผ่าน id : ex12-3-3
document.getElementById("ex12-3-4").innerHTML = Math.min(30, 60, 80, 190, -300, -40);  //แสดงค่า น้อยที่สุด ของค่าที่กำหนด ผ่าน id : ex12-3-4
document.getElementById("ex12-3-5").innerHTML = Math.max(30, 60, 80, 190, -300, -40);  //แสดงค่า มากที่สุด ของค่าที่กำหนด ผ่าน id : ex12-3-5
 
//Ex12.4 Math.abs(), Math.sin(), Math.cos(), Math.min(), and Math.max()
function getRandom1(){
    document.getElementById("ex12-4-1").innerHTML = Math.random();  //random เลขเป็นทศนิยม ตั้งแต่ 0-1 แล้วแสดงค่าผ่าน id : ex12-4-1
}
function getRandom2(){
    document.getElementById("ex12-4-2").innerHTML = Math.floor(Math.random() * 101); //0 - 100 => Total 101 numbers 
}                                                                                    //random เลขตั้งแต่ 0-100 แล้วแสดงค่าผ่าน id : ex12-4-2
function getRandom3(){
    document.getElementById("ex12-4-3").innerHTML = Math.floor(Math.random() * 100) + 1; //1 - 100 --> (0 - 99) + 1 => Total 100 numbers  
}                                                                                       //random เลขตั้งแต่ 1-100 แล้วแสดงค่าผ่าน id : ex12-4-3
function getRandom4(min, max){
    return Math.floor(Math.random() * (max - min)) + min;  //random เลขจาก X to (Y-1) ที่รับค่ามาเก็บไว้ใน min, max แล้วแสดงค่าผ่าน id : ex12-4-4
}                                                                          1  -  9     
function getRandom5(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;  //random เลขจาก X to Y ที่รับค่ามาเก็บไว้ใน min, max แล้วแสดงค่าผ่าน id : ex12-4-5
}                                                                             1  -  10 