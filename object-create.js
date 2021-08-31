// 1.using object literal
const student = {name:'Rozen', job:'Web Developer'};

// 2.constructor
const person = new Object();

// 3.
// const man = Object.create(null);
const man = Object.create(student);
// console.log(man.job);

// 4.class
class People {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const pepo = new People('Manus', 22);
// console.log(pepo);

// 5.function

function Manus(name){
    this.name = name;
}
const human = new Manus('Abdul Kader');
console.log(human);
