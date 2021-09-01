// console.log(this);
const Kuddus = {
    name:'Kuddus Mia',
    money:4000,
    id:111,
    major:'Mathematics',
    subjects: ['English', 'Economics', 'Calculus'],
    treatDeyArrow: () => {
        console.log(this);
    },
    treatDeyInside: function(){
        const myArrow = () => console.log(this);
        myArrow();
    },   
    treatDey: function(expense){
        this.money = this.money - expense;
        console.log('It is coming from here', this);
        return this.money;
    }
}

const heroAlam = {
    name: 'Hero Alam',
    id: 420,
    money:8000
}

function add(a, b){
    console.log(this);
}