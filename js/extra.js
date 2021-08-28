// const stuInfo = JSON.stringify({ name: "James", roll: 3 }); console.log(stuInfo.name);

// const premikas= { name: 'keka ferdousi' , cars: { brand: 'toyota'} }
// const {brand} = premikas.cars
// console.log(brand);

fetch('https://jsonplaceholder.typicode.com/todo/1')

.then(response => response.json()

.then(json => console.log(json))