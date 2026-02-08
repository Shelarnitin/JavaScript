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

setTimeout(function () {
    console.log('I am Anonymous function')
}, 2000);


// Immediately Invoked Function Expression

(function () {
    console.log('IIFE Executed')
})();