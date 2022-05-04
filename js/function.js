
alert('welcome function');

function myFunction(a){
    return a;
}

myFunction();
    document.getElementById('js').innerHTML = 'welcome to function in js tutorial' + "<br>";

    function  Add(b, c, d){
        document.getElementById('js1').innerHTML = c+b+d;
    }
    Add(2,3,4) + "<br>";


function Multiply(b, d){
    return b * d;
}
var x = Multiply(4, 6);
document.getElementById('js2').innerHTML = x +"<br>";

var y = function(a, c){return a-c}; //example of anonymous function, fxn without a name.
document.getElementById('js').innerHTML = y(5, 3) + "<br>";

//function constructor with Function()

const mySubstract = function(d, f) {return d-f};

document.getElementById('j3').innerHTML = mySubstract(7, 3) +"<br>";

const arrow = (d, a)=>(d+a);//arrow fxn
document.getElementById('j4').innerHTML = 'example of arrow fxn: ' + arrow(5,8) + "<br>";

function Sum(){
    let x = 0;
    for (let i = 0; i < arguments.length; i++) {
        x += arguments[i];
        
    }
    return x;
}
document.getElementById('j4').innerHTML = Sum(3, 5,7) +"<br>";

const person = {
    fullname: function(city, town){
        return this.firstName +' '+this.lastName +' from  '+ city+', near '+ town;
    }
}

const person1 = {
    firstName : 'john',
    lastName : 'frank'
}
document.getElementById('js2').innerHTML = person.fullname.apply(person1, ['aba', 'ph']) +'<br>';

const mark = {
    details: function(y, z){
        return this.age + ' '+ this.sex + y + 'and  '+ z ;
    }
}

const jack ={
    age:14,
    sex:'male'
}

document.getElementById('js1').innerHTML = mark.details.call(jack, 'from', 'abj') +'<br>';

/*var para = document.getElementsByClassName("class1");
document.getElementsByClassName("class1") = para +"<br>";

var clikbutton = document.getElementById('button'), 
    container = document.querySelector(".container");

clikbutton.addEventListener('click', function(Event){
    document.getElementById('button').innerHTML = clikbutton;
});

container.addEventListener('mouseenter', mouseEnterContainer);
function mouseEnterContainer(){
    document.getElementByClassName('.container');
    
}*/

function myFunction(){
    document.getElementById('button').innerHTML = 'welcome';
}
myFunction();

alert('container');