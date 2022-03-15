//JavaScript by Saowapak STID = 1630901179
//Ex14.1: For Loop
/*  
    รับค่าจาก roundFor มาเก็บใว้ที่ n
    แล้วแสดงข้อความตามจำนวนของ n ที่รับค่ามา
    โดยให้เลขเพิ่มขึ้นทีละ 1
*/
function roundFor(){
    let n = document.getElementById("roundFor").value;
    for(let i = 1; i <= n; i++){
        document.getElementById("ex14-1").innerHTML += "Round " + i + ": " + "I love JavaScript Programming <br>";
    }
}

//Ex14.2: For-in Loop
/*  
    รับค่าจาก name มาเก็บใว้ที่ nameValue
    รับค่าจาก age มาเก็บใว้ที่ ageValue
    รับค่าจาก location มาเก็บใว้ที่ locationValue
    รับค่าทั้งหมดเก็บไว้ที่ obj
    แล้วแสดงข้อความตามจำนวนของ value ที่รับค่ามา
*/
function objForIn(){
    let nameValue = document.getElementById("name").value;
    let ageValue = document.getElementById("age").value;
    let locationValue = document.getElementById("location").value;
    var obj = {name: nameValue, age: ageValue, location: locationValue};
    for(key in obj){
        let value = obj[key];
        document.getElementById("ex14-2").innerHTML += key + ' : ' + value + '<br>';
    }
}

//Ex14.3: For-of Loop
/*  
    รับค่าจาก data1 มาเก็บใว้ที่ data1
    รับค่าจาก data2 มาเก็บใว้ที่ data2
    รับค่าจาก data3 มาเก็บใว้ที่ data3
    รับค่าทั้งหมดเก็บไว้ที่ obj
    แล้วแสดงข้อความตามจำนวนของ value ที่รับค่ามา
*/
function objForOf(){
    let data1 = document.getElementById("data1").value;
    let data2 = document.getElementById("data2").value;
    let data3 = document.getElementById("data3").value;
    var obj = [data1, data2, data3];
    for(item of obj){
        document.getElementById("ex14-3").innerHTML += item + '<br>';
    }
}

//Ex14.4: While Loop ~For Loop
/*  
    รับค่าจาก roundWhile มาเก็บใว้ที่ n
    แล้วแสดงข้อความตามจำนวนของ n ที่รับค่ามา
    โดยให้เลขเพิ่มขึ้นทีละ 1
*/
function roundWhile(){
    let n = document.getElementById("roundWhile").value;
    let i = 1;      //for(let i = 1; i <= n; i++)
    while(i <= n){  
        document.getElementById("ex14-4").innerHTML += "Round " + i + ": " + "I love JavaScript Programming <br>";
        i++;
    }
}

//Ex14.5: While Loop
/*  
    รับค่าจาก inputNumber มาเก็บใว้ที่ n
    ให้ค่า i = n
    แล้วแสดงข้อความตามจำนวนของ n ที่รับค่ามา
    ถ้าไม่ตรงตามเงื่อนไขของ while จะวนกลับมาเริ่มใหม่อีกครั้ง
    แล้วถ้าตรงตามเงื่อนไขจะเข้าสู่ if เพื่อที่จะให้ค่า n วน loop เป็นแม่สูครคูณ
*/
function checkWhile(){
    let n = document.getElementById("inputNumber").value;
    let i;     
    while((n<2)||(n>12)) 
    {
        document.getElementById("checkWhile").innerHTML = "Please Enter number 2-12";
        break;
    }
    if(n>= 2 && n<=12){
        let result = 1;
        for(i=1; i<=12; i++)
        {   
            document.getElementById("runFor").innerHTML += n + " x " + i + " = " + n*i + "<br>";
        }
    }
}

//Ex14.6: Do While Loop
/*  
    รับค่าจาก inputDoNumber มาเก็บใว้ที่ i
    แสดงข้อความพร้อมตัวเลขจาก i ถึง 20
    แต่ถ้าหาก i มากกว่า 20 จะแสดงผลแค่อันเดียว
*/
function testDoWhile(){
    let i = document.getElementById("inputDoNumber").value;
    let text = "";

    do
    {
        text += "<br> The round number is " + i;
        i++;
    }while(i < 20); //Test i = 20

    document.getElementById("ex14-6").innerHTML = text;
}

//Ex14.7: Nested Loops
/*  
    รับค่าจาก loop1 มาเก็บใว้ที่ loop1
    รับค่าจาก loop2 มาเก็บใว้ที่ loop2
    เข้าloop1 ไปloop2 วนจนครบจำนวนที่ใส่ค่าเข้ามาใน loop2
    จากนั้นออกมาทำloop1 ซ้ำอีกตามจำนวนของค่าที่ใส่เข้ามาใน loop1
    เลขบวก1ทุกครั้งที่ผ่านloop
    
*/
function testNestedLoops(){
    let loop1 = document.getElementById("loop1").value;
    let loop2 = document.getElementById("loop2").value;
    let text = "";
    let i, j;
    for (i = 0; i < loop1; i++) 
    {
        for (j = 0; j < loop2; j++) 
        {
            text += "The number is i = " + i + " and j = " + j + "<br>";
        }
    }
    document.getElementById("ex14-7").innerHTML = text;
    }

//Ex14.8: Break Statement
/*  
    รับค่าจาก inputBreakNumber มาเก็บใว้ที่ n
    แล้วแสดงข้อความตามจำนวนของ n ที่รับค่ามา
    break จะวน loop ตามจำนวนที่รับค่ามา
*/
function testBreak(){
    let n = document.getElementById("inputBreakNumber").value;
    for(let i = 0; i < 10; i++){
        if(i == n){
            break;
        }
        document.getElementById("ex14-8").innerHTML += "The for number is "+ i + "<br>";
    }
}

//Ex14.9: Continue Statement
/*  
    รับค่าจาก inputContinueNumber มาเก็บใว้ที่ n
    แล้วแสดงข้อความตามจำนวนของ n ที่รับค่ามา
    continue จะวน loop สนถึงสิ้นสุด จะไม่ตามจำนวนที่รับค่ามา
*/
function testContinue(){
    let n = document.getElementById("inputContinueNumber").value;
    for(let i = 0; i < 10; i++){
        if(i == n){
            continue;
        }
        document.getElementById("ex14-9").innerHTML += "The for number is "+ i + "<br>";
    }
}