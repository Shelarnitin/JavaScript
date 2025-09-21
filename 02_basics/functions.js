// basic syntax
// function greet(){
//     console.log("hello");
// }
// greet();

// function add(a,b){
//     return a+b;
// }
// console.log(add(2,3))

// (1) Function declaration(named function)
// Define with function keyword

// function sayHi() {
//     return "Hi";
// }
// console.log(sayHi());

//NOTE: Hoisted (can be called before declaration)

/***(2) function Expression * stored inside a variable***/

// let greet = function(name) {
//     return "Hello " + name;
// };
// console.log(greet("Nitin"));
// NOTE: Note Hoisted


/*******(3) Arrow functions (ES6) * shorter syntax, this behaves differently*********/
// let squareTwo = (n,m) => {
//    return [n*n, m*m];
// } 
    
// console.log(squareTwo(5,6)); // for multiple number

//  let square = (a) => {
//     return a*a;
//  }
//  console.log(square(9));  // for single digit


/********(4) Anonymous function * function without a name, usually used in inline********/
// setTimeout(function() {
//     console.log("I`am Anonymous")
// }, 2000);
// console.log("Wait.....")

/*********(5) * Immediatly invoked Function exprission(IIFE)************/
// runs instantly after creation
// (function () {
//     console.log("IIFE execution");
// })();


/**********(6) * constructor Function*************/
// used to create multiple similar objects
// function person(name){
//     this.name = name;
// }
// let p1 = new person("Nitin");
// console.log(p1)
// console.log(p1.name);
// console.log("Hello ",p1.name)

/***********(7) * Generator function****************************/
// special function that can pause & resume with yield

// function* numbers(){
//     yield 1;
//     yield 2;
//     yield 4;
//     yield 6;
// }
// let gen = numbers();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

/************(8) * Async Function (ES8)*************************/
// Handles promises with await
// async function fetchData() {
//     return "Data Received!";
// }
// fetchData().then(console.log) 
// console.log(fetchData().then(console.log))  // promise { <pending> }

/********(9) * callback function************/
// a function passed as an argument to another function

// function processUserInput(callback){
//     let name = "Nitin";
//     callback(name);
// }
// processUserInput((n) => console.log("Hello " + n));

