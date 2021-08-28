// Javascript Object Notation
// JSON
const user = {id: 11, name: 'Mridul Islam', job:'Programmer'};
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    profit: 15000,
    product: ['laptop', 'Mobile', 'Headphone'],
    owner:{
        name: 'Alia Bhatt',
        profession: 'actor'
    },
    isExpensive: false
};

const shoptStringified = JSON.stringify(shop);
console.log(shop);
// console.log(shoptStringified);

const converted = JSON.parse(shoptStringified);
console.log(converted.owner);