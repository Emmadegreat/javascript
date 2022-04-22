
alert('welomee');

var a = 'name';
document.write(a + " <br>");
//document.getElementById('h2').innerHTML=style.fontSize(50);
// js variables 
var Name = 'mike';
document.write(Name + "<br>");

let person = 'Emma', 
carName = 'toyota',
age = 25;

document.write(person +" <br> ");

const pi = 3.142;
document.write(pi + " <br>");

document.write('js arrays'.toUpperCase() + "<br>");

const arrays = ['ibe', 'mike', 'chuks', 'cythia'];
document.write(arrays + "<br>");
document.write(arrays[1] + "<br>");
arrays[2]='emey';
document.write(arrays);
document.getElementById('demo').innerHTML = arrays[3 + "<br>"];

const fruits = ['mango', 'orange', 'banana', 'pear'];
let txt = '<ol>';

for (let i = 0; i < fruits.length; i++) {
     txt += '<li>' + fruits[i] + '</li>';
    
}

txt += '</ol>';
document.getElementById('js').innerHTML = txt + '<br><br>';

//In JavaScript, arrays use numbered indexes.  

//In JavaScript, objects use named indexes.
//typeOf() method returns object for array. Array.isArray(fruits) . will return true ie it is array
//create new array like this : const array = [];
const toyota = ['corolla', 'camry', 'matrix', 'highlander'];
let y = '<ul>'
for (let i = 0; i < toyota.length; i++) {
    y += '<li>' + toyota[i] + '</li>';
    
}
y += '</ul>';
document.write(y + '<br><br>');
document.write(Array.isArray(toyota) + ": this means it is an array." + "<br>");

// to find the max/min value in an array

let maxi = [3, 6, 8, 9, 10, 40];

function myArryMax(arr){
    return Math.max.apply(null, arr);
}
document.getElementById('highest').innerHTML = myArryMax(maxi) + "br";

let mini = [3, 6, 8, 9, 10, 40];

function myArryMin(arr){
    return Math.min.apply(null, arr);
}
document.getElementById('highest').innerHTML = myArryMin(mini);

//document.getElementById("demo").innerHTML = myArrayMax(points);

/*function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}*/

//ARRAY ITERATION 

const item = ['name', 'age', 'sex', 'department'];
let text = "<ol>";
item.forEach(myFunction);
document.getElementById('js').innerHTML = text;

function myFunction(value, index, array){
  text += "<li>" + value + "</li>";
}
text += "</ol>";


//indexOf() = gives the index ie position 
//some()= this checks if some of the elem. > 
//find() = returns d 1st elem. dat passes the test
//findIndex() = returns d index of d elem. dat passes the test
//Array mapping
const num1 = [2, 8, 9, 4];
const num2 = num1.map(myFunction);
document.getElementById('js').innerHTML= num2;//multiply it or perform other operation to each element.

function myFunction(value, index, array){
  return "<li>" + value * 2 +"</li>";
}

const num3 = [4,9,10,30];
const over9 = num3.filter(myFunction);// filters an array and brings out a new array that passes the condition.
document.getElementById('js').innerHTML = over9;

function myFunction(value){
  return value > 9;
}

const num4 = [5,12,20,40];
const reduce = num4.reduce(myFunction);//reduce.this add each element of the array .
document.getElementById('js').innerHTML = reduce;

function myFunction(total, value, index, array){
  return total + value;
}// reduceRight() method works the same as reduce(), but sum elem. from right to left.

const num5 = [4, 6, 8, 10];  //every(), this array method check if all the elems > the given value, if yes it return True else False.
let over14 = num5.every(myFunction);

document.write(over14);
function myFunction(value, index, array){
  return value > 14;
}

document.write(num5.indexOf(8) + 1 + '<br>')

//arry.from() creates array from a string
//let newarr = (abaokuta);
const new2 = Array.from("CREATE");
document.write(new2);

document.write(new Date(86400000) + "<br>")
document.write(new Date('2022') + "<br>")
document.write('Copyright  ');document.write(new Date().getFullYear() + "<br>")
document.getElementById('js').innerHTML = new Date().getFullYear();