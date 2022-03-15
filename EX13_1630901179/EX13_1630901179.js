///JavaScript by Saowapak STID = 1630901179
//Ex13.1: if Statements
/*
    สร้างฟังก์ชั่น CheckNum
    เก็บค่า Input แล้วน้ำไปเช็คเงื่อนไข
    ทำเงื่อนไขเพื่อเช็คว่า Input > 30 หรือไม่
    หาก > 30 จะแสดงข้อความว่า Input > 30 ที่id 13-1-1
    และแสดงค่า Input ทันทีโดยไม่่ต้องเช็ค ที่id 13-1-2
*/
function CheckNum(){
    var num;
    num = document.getElementById("input").value;
    if(num > 30) {
        document.getElementById("13-1-1").innerHTML= num +" > 30";
    }
    document.getElementById("13-1-2").innerHTML= "Value number is " + num;
}

//Ex13.2: if-else Statements
/*
    สร้างฟังก์ชั่น convert
    เก็บค่า Input แล้วนำไปเช็คDegree ดูว่าเป็นของ Celsius หรือ Fahrenheit 
    แล้วแปลงค่าตัวเลขทั้ง 2 ชุดโดยส่งค่ากลับไปผ่าน c และ f
*/
function convert(degree) {
    var x;
    if (degree == 'c') {
        x = document.getElementById('c').value * 9/5 + 32;
        document.getElementById('f').value = Math.round(x);
    }
    else{
        x = (document.getElementById("f").value - 32) * 5/9;
        document.getElementById("c").value = Math.round(x);
    }
    
}

//Ex13.3: if-elseif-else Statements
/*
    สร้างฟังก์ชั่น convert
    เก็บค่า Input แล้วนำไปเช็คว่าตรงกับเงื่อนไขไหนจากนั้นส่งค่าเกรดกลับไปผ่าน id ex13-3
    โดยแต่ละเงื่อนไขจะแตกต่างกันและหากค่า Input ไม่ตรงกับเงื่อนไขนั้นก็จะไปยังเงื่อนไขต่อไป
    จนสุดท้ายแล้วหากไม่ตรงเงื่อนไขไหนเลยก็จะแสดงข้อความ Please Enter 0-100
*/
function grade(){
    var score =  document.getElementById("data").value;
    if(score >= 80 && score <= 100){
        document.getElementById("ex13-3").innerHTML = "Grade A 😃";
    }
    else if(score >= 75 && score <= 79){
        document.getElementById("ex13-3").innerHTML = "Grade B+ 😀";
    }
    else if(score >= 70 && score <= 74){
        document.getElementById("ex13-3").innerHTML = "Grade B 🙂";
    }
    else if(score >= 65 && score <= 69){
        document.getElementById("ex13-3").innerHTML = "Grade C+ 😁";
    }
    else if(score >= 60 && score <= 64){
        document.getElementById("ex13-3").innerHTML = "Grade C 😅";
    }
    else if(score >= 55 && score <= 59){
        document.getElementById("ex13-3").innerHTML = "Grade D+ 😐";
    }
    else if(score >= 50 && score <= 54){
        document.getElementById("ex13-3").innerHTML = "Grade D 😑";
    }
    else if(score >= 0 && score <= 49){
        document.getElementById("ex13-3").innerHTML = "Grade F 😣";
    }
    else{
        document.getElementById("ex13-3").innerHTML = "Please Enter 0-100";
    }
}
 
//Ex13.4: Nested if Statements
/*
    สร้างฟังก์ชั่น scoreRange
    เก็บค่า Input ที่ได้รับมาผ่าน id : score แล้วนำไปเช็คว่าตรงกับเงื่อนไขไหนจากนั้นส่งค่ากลับไปผ่าน id : result
    โดยจะเช็คว่าตรงกับกรณีไหนในขั้นแรกแล้วเข้าไปเช็คเงิ่อนไขข้างในเงื่อนไขนั้นๆอีกทีว่าเข้ากรณีไหน หากตรงแล้วก็จะ
    print ค่าที่กำหนด ผ่าน id : result
*/
function scoreRange(){
    let score = document.getElementById("score").value;
    if(score < 60)
    {
        if(score < 30){
            document.getElementById("result").value = "Less than 30";
        }
        else{
            document.getElementById("result").value = "Between 30 and 59";
        } 
    }
    else
    {
        if(score > 80){
            document.getElementById("result").value = "More than 80";
        }
        else{
            document.getElementById("result").value = "Between 60 and 80";
        }
    }
}
 
//Ex13.5: Switch Statements
/*
    สร้างฟังก์ชั่น gradeStatus
    เก็บค่า Input ที่ได้รับมาผ่าน id : grade แล้วนำไปเช็คว่าตรงกับเงื่อนไขไหนจากนั้นส่งค่ากลับไปผ่าน id : ex13-5
    โดยการรับค่าเป็นเกรดA,B,C,D,F หากตรงกับตัวไหนก็ print ค่าที่กำหนด ออกมาผ่าน id : ex13-5
    หากไม่ตรงเลย ก็จะแสดงข้อความต้องใส่ A,B,C,D,F
*/
function gradeStatus(){
    let grade = document.getElementById("grade").value;
    switch(grade){
        case 'A': 
            document.getElementById("ex13-5").innerHTML = "Good Job 😍";
            break;
        case 'B':
            document.getElementById("ex13-5").innerHTML = "Pretty Good 😃";
            break;
        case 'C':
            document.getElementById("ex13-5").innerHTML = "Passed 🙂";
            break;
        case 'D':
            document.getElementById("ex13-5").innerHTML = "Fighting 😉";
            break;
        case 'F':
            document.getElementById("ex13-5").innerHTML = "Failed 😐";
            break;
        default: 
            document.getElementById("ex13-5").innerHTML = "Enter A,B,C,D,F";
            break;
    }
}