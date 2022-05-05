const h1 = document.getElementById('h1').innerHTML = 'Welcome to our tutorial';
document.getElementsByTagName('h1').innerHTML = 'here';
document.getElementById('inp').value = 'myfirstname';
document.getElementById('h1').style.color = 'red';
const p = document.getElementsByTagName("p")[1].innerHTML = 'dude';
document.getElementsByTagName("p")[0].innerHTML = "welcome";
const z = document.getElementsByClassName("p");
document.getElementById('h1').innerHTML = z[1].innerHTML + ' and '+ z[0].innerHTML;


const x = document.getElementsByClassName('ref');
//const y = document.getElementById('demo').innerHTML;
document.getElementById('demo').innerHTML = x[1].innerHTML;
const h = document.getElementById('h1');
h.innerHTML = 'using DOM here';
h.style.fontSize = '3rem';

const img = document.getElementById('image');
img.scr = '/images/jp.png';

function validateForm(){
    let x = document.forms["fname"]["fullname"].value;
    let y = document.forms["fname"]["email"].value;
    if ((x && y) =="") {
        alert("all fields must be filled");
    }else{
        alert("submitted");
    };
}
document.getElementById('btn').onclick = displayDate;

function displayDate(){
    
    document.getElementById('demo').innerHTML = Date();
}