const Kuddus = {
    name:'Kuddus Mia',
    money:4000,
    id:111,
    major:'Mathematics',
    subjects: ['English', 'Economics', 'Calculus'],   
    treatDey: function(expense, tips, tax){
        this.money = this.money - expense - tips - tax;
        console.log('It is coming from here', this);
        return this.money;
    }
}

const heroAlam = {
    name: 'Hero Alam',
    id: 420,
    money:8000
}
const heroNormal = {
    name: 'Hero Normal',
    id: 440,
    money:5000
}

// call

// Kuddus.treatDey.call(heroAlam, 500, 100 , 50);
// Kuddus.treatDey.call(heroAlam, 400, 130, 40);

Kuddus.treatDey.apply(heroAlam, [500, 100, 50]);
Kuddus.treatDey.apply(heroAlam, [1000, 150, 100]);

Kuddus.treatDey.apply(heroNormal, [300, 70, 30]);
