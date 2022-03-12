function myHello(){
    document.getElementById("ex10-1").innerHTML = "Hello JavaScript";
}
function myWelcome(name, job){
    document.getElementById("ex10-2").innerHTML = "Welcome " + name + ", the " + job + ".";
}
function myText(text){
    document.getElementById("ex10-3").innerHTML = text;
}
var area = myArea(6, 8);
document.getElementById("ex10-4").innerHTML = area;
function myArea(width, length) {
  return width * length;
}
document.getElementById("ex10-5").innerHTML = Celsius(89);
function Celsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
function regArea() {
    var r_width = document.getElementById('input1').value;
    var r_length = document.getElementById('input2').value;
    var result = r_width * r_length;
    if (!isNaN(result)) {
        document.getElementById('result').value = result;
    }
}
function toCelsius() {
    var fah = document.getElementById('fah_value').value;
    var cel_result = (5/9) * (fah-32);
    if (!isNaN(cel_result)) {
        document.getElementById('cel_result').value = cel_result;
    }
}