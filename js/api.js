function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then (response => response.json())
    .then(data => console.log(data))
}

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>  getUser(data))
}

function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}

function getUser(data){
    const ul = document.getElementById('users');
    for(const user of data){
       const li = document.createElement('li');
       li.innerText = `name: ${user.name}, email: ${user.email}`;
       ul.appendChild(li); 
    }
}