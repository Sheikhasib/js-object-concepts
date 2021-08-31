const Kuddus = {
    name:'Kuddus Mia',
    money:4000,
    id:111,
    major:'Mathematics',
    subjects: ['English', 'Economics', 'Calculus'],   
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
const heroNormal = {
    name: 'Hero Normal',
    id: 440,
    money:5000
}
Kuddus.treatDey(120);

const heroTreatDey = Kuddus.treatDey.bind(heroAlam);
heroTreatDey(340);
heroTreatDey(440);
heroTreatDey(270);
Kuddus.treatDey(320);

const normalTreatDey = Kuddus.treatDey.bind(heroNormal);
normalTreatDey(324);
