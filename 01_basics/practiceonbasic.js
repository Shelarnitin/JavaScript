// function declaration


// function expression


//Arrow function


//Anonymous function


//IIFE function


//constructor function


//Generator function


//Async function


//callback function

function processUserInput(callback){
    let name = "Nitin";
    callback(name);
}
processUserInput((n) => console.log("Hello "+ n))