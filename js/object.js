alert('welcomeeee here');
//js object

const obj = {name:'emma',age:30,level:4} + "<br>";

const person = {};
person.name = 'john';
person.school = 'unizik';
document.getElementById('id').innerHTML = person.name +" is in "+ person.school +"<br>";

const per = new Object();
per.name = 'Alex';
per.age = 50;
per.nation = 'Nigeria';
delete per.nation;

document.getElementById('id1').innerHTML = per.name + " is "+ per.nation+', ' + per['age'] + " old" + "<br>";

const man = {
    name:'mike',
    height:10,
    age:80,
    propertys:{
        car:'camry',
        house:'duplex'
    }
};
document.getElementById('id1').innerHTML = man.propertys['car'];

const state = {// object method
    state1:'lagos',
    state2:'abuja',
    state3:'ph',

    FirstState : function(){
        return this.state1;
    }
}
document.getElementById('id2').innerHTML = state.state1 +"<br>"; 

const sch = {
    name:'unizik',
    locat:'awka',
    type:'versity'
};

document.getElementById('id2').innerHTML = JSON.stringify(sch) + "<br>";//displaying js object as a string with JSON.stringify
// Js object function constructor

function People(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

const myMan = new People('Emf', 23, 'male')
document.getElementById('id3').innerHTML = 'my man is age ' .concat(myMan.age) +'<br>';

function Person(first, last, age, eye) {// object type blueprint / classes
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nation = 'USA';
  }
  
  // Create two Person objects
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  
  // Display age
  document.getElementById("id3").innerHTML =
  "My father is " + myFather.age + ". My mother is " + myMother.age + ". <br>"; 
  document.getElementById('id3').innerHTML = 'my father is from '.concat(myFather.nation) + "<br>";
  
  const cityz = new Set(['aba', 'enugu', 'lagos']);
  let txt ="";
  for (const x in cityz.values()){
      txt+= x + "<br>";
  }

document.getElementById('id2').innerHTML = txt;