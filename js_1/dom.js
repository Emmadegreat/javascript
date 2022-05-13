const tagname = document.getElementsByTagName("p");
for (let i = 0; i < tagname.length; i++) {
  tagname[i].style.fontSize = "2rem";
  
}

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

document.getElementById('demo1').addEventListener('click',function(){
    document.getElementById('h1').innerHTML = Date();
})

document.getElementById('h3').addEventListener('mouseover', function (){
    let a = 'i am here to learn';
    let b = 50;
    
    if (typeof(a) == typeof(b)) {
        text = document.getElementById('h2').innerHTML = 'variable "a" is a string';
    }else{
        text = document.getElementById('h2').innerHTML = 'variable "a" above is not a string';
    };

    
})

const text = document.getElementById('demo');
text.addEventListener('click', myFunction);
text.addEventListener('mouseout', otherFunction);

function myFunction() {
    alert('me clicked');
}

function otherFunction() {
    alert('me mouseleave');
}

document.getElementById().addEventListener('mouseleave', function () {
    //code
})




let p1 = 5;
let p2 = 7;
document.getElementById("my-Btn").addEventListener("click", function() {
  myFunct(p1, p2);
});

function myFunct(a, b) {
  document.getElementById("demo4").innerHTML = a * b;
}
let u = "come";
let v = typeof(u);
document.write(v);

document.getElementById("myP1").addEventListener("click", function() {
    alert("You clicked the white element!");
  }, false);
  
  document.getElementById("myDiv1").addEventListener("click", function() {
    alert("You clicked the orange element!");
  }, false);
  
  document.getElementById("myP2").addEventListener("click", function() {
    alert("You clicked the white element!");
  }, true);
  
  document.getElementById("myDiv2").addEventListener("click", function() {
    alert("You clicked the orange element!");
  }, true);//capturing, displays outer element when set to true


  document.getElementById("myDIV").addEventListener("mousemove", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = Math.random();
}

function removeHandler() {
  document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
}

const pe = document.createElement('p');
const n = document.createTextNode('creating an element');
pe.appendChild(n);
const d = document.getElementById('div');
d.appendChild(pe);


document.getElementsByTagName("p")[2].style.fontSize = '5rem';

