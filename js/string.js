

//array and objects
const cars = ['toyota', 'benz', 'volvo'];//array
cars.push('Hummer');
//cars.pop();
document.write('this is the list of cars we have in stock now: '+' "' + cars +'." <br>');

const student = {
    name : 'john',
    height: 4.5,
    complextion : 'fair',
    status : 'single'

}
student.name = 'male';

document.write(student.name+ '<br>');

{
    var x = 5;
    var x = 10;
}
document.write(x + '<br>')


    const y = 7;
    //const y =8;


document.write(y + "<br>");

d =2;
c =3;
document.write((d+=c) + "<br>");
document.write((c+=6) + "<br>");

document.write(typeof(c)+ '<br>');
alert(5**3);

//js event and event handlers
//html element : event: 'js codes'

function clickMe(){
    code = document.getElementById('code').innerHTML='WELCOME HERE';
    document.getElementById('code').style.color = 'red';
    document.getElementById('code').style.fontStyle = 'italic';
    document.getElementById("code").style.fontSize = '50px';
}
const date=()=>{
    document.getElementById('demo').innerHTML=Date();
}

//js strings. js strings are group of charaters usually enlosed in a qoutation mark, single or double.
let b = 'boy';
let g = "girl";
let f = b +' and '+ g
document.write(f +" <br>");

let r = `obi is "running"`;
let w = "ada is 'walking'";
document.write(r.concat(', while ', w, '<br>'));

document.write('the length of: '.concat(r, ' is: ', r.length, "<br>"));



let h = "her name is \"Ada\".";
document.write(h +"<br>");
document.write("type of: " + typeof(h) + ". <br>")

// js string methods;
//slice(starting position,ending position-1)

string = 'js string extraction/slicing. ';
//ff = strtoUpper(string);
//document.write(ff);
document.write("<br><br>")

let text = "we are coming";
let slice = text.slice(4,8);

document.write(slice +"<br>");
document.write(text.slice(3,14) +"<br>");

// substring:this is the same thing with slice but doest take negative value.
//subtring(start, end-1); 
let txt_ = 'welcome here is the place';
let txt_1 = txt_.substring(0,5);
document.write(txt_1 + "<br>") ;

//substr: similar to the slice but the second parameter specifies the length 
//of the characters to be extracted
//subtsr(start, length to be extracted

let test = 'i am here';
document.write(test.substr(0, 4)+ "<br><br>");

let cont = 'the coding challenge at google <a href="https://www.google.com">click here to read more</a>';
let sub = cont.substr(0,92);
document.getElementById("pp").innerHTML = sub + " ...";

function readMore(){
    more = document.getElementById('more').innerHTML = '<a href="/html/loop.html">read more</a>';
}

let upper = 'convert to uppercase';
document.write(upper.toUpperCase() + "<br> <br>")

let lower = 'I HAVE BEEN CONVERTED TO LOWERCASE';
document.write(lower.toLowerCase() + "<br> <br>")

function replaceMe(){
    let replac = document.getElementById('demo').innerHTML;
    document.getElementById('demo').innerHTML = replac.replace('js', 'HTML');
}
replaceMe() + "<br> <br>";

//let pad = '5';
    //document.getElementById('demo').innerHTML = pad.padStart(4,'x');

//let pad = '5';
    //document.getElementById('demo').innerHTML = pad.padEnd(4,'x');

let cat = 'pussy';
let cat_1 = 'senior pussy';
//document.getElementById('js').innerHTML = cat.concat(" ", cat_1);
document.getElementById('js').innerHTML = (cat.toUpperCase().concat(" and ", cat_1.toUpperCase()));

let pos = 'position';
document.write(pos.charAt(4) + "<br><br>");


let split = 'splitting';
document.write(split.split("") + "<br><br>");

let includ = 'this is an include example';
//document.getElementById('js').innerHTML = includ.includes('example');
document.write(includ.includes('example') +"<br>");

let sea = 'example of seaerch';
document.write(sea.search('of') + "<br>")

let match = 'match in js returns true if the word specified is in the list of words';
document.write(match.match('returns') +"<br>")


