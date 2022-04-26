document.write('JS number'.toUpperCase() + "<br>")

let x = 0.5 + 0.6;
document.getElementById('numbers').innerHTML = "0.5 + 0.6 =  "+ x;

// in some numeric operations js convert strings to nunbers
let y = '100';
let z = '10';
let w = y/z;
document.getElementById('numbers').innerHTML = w;"<br> <br>"

let a = '100';
let b = '10';
let c = a*b;
document.getElementById('numbers').innerHTML = c + "<br> <br>";

let e = '100';
let f = '10';
let g = y-z;
document.write(g +"<br> <br>");

let d = '100';
let h = '10';
let i = d + h;
document.write(i +"<br> <br>");

//Not a Number(NaN)

document.write(100 / 'john' + "<br>");
document.write(typeof(NaN)  +"<br><br>");

document.write('JS number methods'.toUpperCase() + "<br>")

let j = 9.656;
document.getElementById('numbers').innerHTML = j.toExponential(2) + "<br>" +
j.toExponential(4);

document.write(j.toPrecision(2) + " precision gives you length of the number specified :<br>") + 
document.write(j.toPrecision(6) + "<br");

let v = 123;
document.write(v.valueOf()+ "<br" );

document.write(parseInt('123'));
