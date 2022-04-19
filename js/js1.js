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
