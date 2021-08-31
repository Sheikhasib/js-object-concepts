const student = {
    name:'Kuddus Mia',
    money:4000,
    id:111,
    major:'Mathematics',
    subjects: ['English', 'Economics', 'Calculus'],
    bestFriend:{
        name:'Jhandu Baba',
        major:'Mathematics'
    },
    takeExam: function(){
        console.log(this.name, 'Taking Exam');
    },
    treatDey: function(expense, tips){
        this.money = this.money - expense - tips;
        return this.money;
    }
}
student.takeExam();
const remaining1 = student.treatDey(780, 100);
const remaining2 = student.treatDey(1080, 130);
console.log(remaining2);