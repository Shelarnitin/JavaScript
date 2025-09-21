import { pi } from "./nums_math.js"
console.log(pi)

// function declaration


// function expression


//Arrow function


//Anonymous function


//IIFE function


//constructor function


//Generator function


//Async function


//callback function



//Higher order function



// global scope
let name = "Neo"
function greet(){
    console.log("hello " + name)
}
greet()

// local scope
function sayHi(){
    let msg = "Hi Nitin"
    console.log(msg)
}
sayHi()

// block scope
if(true){
    let x = 100;
    const y = 200;
    console.log(x,y)
}
// console.log(x,y) // error

// lexical scope

function outer(){
    let outerVar = "I am outer"
    function inner(){
        console.log(outerVar)
    }
    inner()
}
outer()

// module scope5

