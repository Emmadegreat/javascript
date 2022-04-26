//LOOPS

document.write('js loops'.toUpperCase() + "<br>")

const cars = ['bmw', 'toyota', 'honda', 'benz'];
let txt = "<ol>";

for (let i = 0; i < cars.length; i++) {
    txt +=  "<li>" + cars[i] + "</li>" + "<br>";
    
}
document.getElementById('loop').innerHTML = txt;
txt += "</ol>" + cars + "<br>";


//for in loop: this loops through the propertires of an object.

const person = {name:'emma', age:30, sex:'male'};
let text = "";
for (let x in person) {
    text += person[x] + " ";
}
document.getElementById('loop1').innerHTML = " 'for in loop' example: " + text + "." + "<br>";

const array = [2,3,4];
let ar = "";

for (let y in array) {
    ar += array[y] + "<br>";
}

document.getElementById('loop2').innerHTML = ar + "<br>";

const numbers = [2,3,4,5];// can still loop through a string
let test = "";
for (const x of numbers) {
    test += x + "<br>";
}
document.getElementById('loop3').innerHTML = test +"<br>";

document.write('example on while loop'.toLocaleUpperCase() + "<br>");

let i = 0;
let test1 = "";
while (i < 10) {
    test1 += i +"<br>";
    i++;
}
document.getElementById('loop4').innerHTML = test1 + "<br>";


/*let j = 0;
let test2 = "";
do{
    test2 += j + "<br>";
    j++;
}

while (j < 6);
document.getElementById('loop4').innerHTML = test2 + "<br>";*/


while (i < 10) {
    test1 += i +"<br>";
    i++;
}
document.getElementById('loop4').innerHTML = test1 + "<br>";

let tx = "";
for (let i = 0; i < 11; i++) {
  if (i === 5) { continue; }
  tx += "The number is " + i + "<br>";
}
document.getElementById("loop5").innerHTML = tx;