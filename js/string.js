//array and objects
const cars = ['toyota', 'benz', 'volvo'];//array
cars.push('Hummer');
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
    var x = 10;
    var x = 5;
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
alert(5**2);

//js event and event handlers
//html element : event: 'js codes'

function clickMe(){
    document.getElementById('demo').innerHTML='WELCOME HERE';
}

const date=()=>{
    document.getElementById('demo').innerHTML=Date();
}

//js strings. js strings are group of charaters usually enlosed in a qoutation mark, single or double.
let b = 'boy';
let g = "girl";
let f = b +' and '+ g
document.write(f +" <br>");

let r = 'obi is "running"';
let w = "ada is 'walking'";
document.write(r+', while '+w + "<br>");

document.write('the length of: '+ r +' is: '+ r.length + "<br>");

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
document.write(text.slice(3,13) +"<br>");

// substring:this is the same thing with slice but doest take negative value.
//subtring(start, end-1); 
let txt = 'welcome here is the place';
let txt1 = txt.substring(0,9);
document.write(txt1 + "<br");

//substr: similar to the slice but the second parameter specifies the length of the characters to be extracted
//subtsr(start, length to be exttrated) 

let strt = 'we want to examplify this method of extraction';
//let txt_2 = txt2.substr(3,7);
document.write(strt);
