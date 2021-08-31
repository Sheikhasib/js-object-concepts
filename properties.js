const bottle = {
    color:'green',
    hold:'water', price:60,
    isCleaned: true
};
// getting all properties name
const keys = Object.keys(bottle);
// console.log(keys);
// get all values
const values = Object.values(bottle);
// console.log(values);
const pairs = Object.entries(bottle);
// console.log(pairs);

// Object.seal(bottle);
Object.freeze(bottle);
bottle.price = 100;
bottle.height = 24;
delete bottle.isCleaned;
console.log(bottle);