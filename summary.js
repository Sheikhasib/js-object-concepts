const pen = {
    brand:'Econo',
    price:10,
    writePoem: function(food){
        console.log(food);
    }
}
const keys = Object.keys(pen);
const values = Object.values(pen);

for(const key in pen){
    // console.log(key, pen[key]);
}

const a = 1;
const b = 1;
const a = b;
if(a === b){

}

// optional
const aBounded = pen.writePoem.bind(a);
aBounded();

// this


