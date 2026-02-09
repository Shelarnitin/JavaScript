// Arrow function => shorter syntax

// let square = (n) => n*n;
// console.log(square(7))

// setTimeout(function() {
//     console.log("I Am Anonymous");
// },3000)

// function processUserInput(callback){
//     let name = "Nitin";
//     callback(name)
// }
// processUserInput((n) => console.log("Hello " + n))


function add (a,b) {
    return a + b
}
console.log(add(4,5))

function SayHii(){
    return "Hello"
}
console.log(SayHii())

// Function Expression => Stored inside a veriable
function Greet(name){
    return "Hello " + name
}
console.log(Greet("Nitin"))

// Arrow Function (Es6) => Shorter syntax
let square = (n) => n*n
console.log(square(5))

// Anonymous function

/*
setTimeout(function () {
    console.log('I am Anonymous function')
}, 2000);

// Immediately Invoked Function Expression

(function () {
    console.log('IIFE Executed')
})();
*/

// CONSTRUCTOR FUNCTION => used to create multiple similar object

function person(name){
    this.name = name;
}
let p1 = new person("nitin")
let p2 = new person("neo")
console.log(p1)
console.log(p1.name)
console.log(p2)
console.log(p2.name)

// Async Function
async function fetchData(){
    return " Data Received!"
}
fetchData().then(console.log)

// Callback Function => a function passed as an argument to another function

function processUserInput(callback){
    let name = "Nitin"
    callback(name)
}
processUserInput((n) => console.log("Welcome " + n))