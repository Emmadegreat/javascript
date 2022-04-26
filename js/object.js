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

/*const sch = {
    name:'unizik',
    locat:'awka',
    type:'versity'
};

document.getElementById('id2').innerHTML = JSON.stringify(sch) + "<br>";//displaying js object as a string with JSON.stringify
// Js object function constructor

/*function People(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

const man = new People('Emf', 23, 'male')
document.getElementById('id3').innerHTML = man.age;*/