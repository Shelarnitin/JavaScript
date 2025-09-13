/********For-of loop***************/
//used to iterate over iterable objects like arrays, strings, maps, sets.

// Loop over array of fruits

// let fruits = ["Mango", "banana", "apple"];
// for(let fruit of fruits){
//     console.log(fruit)
// }


// Loop over character in a string

// let word = "Neo";
// for(let char of word){
//     console.log(char)
// }


// calculate sum of numbers in array

// let nums = [5,10,15];
// let total = 0;
// for(let n of nums){
//     total = total + n;
// }
// console.log("Total:",total)


// Iterate over a set(Unique values)

// let Unique = new Set([1,2,2,3]);   // set removes duplicate values
// for(let val of Unique){
//     console.log(val)
// }


// Iterate over map (Key-value pairs)

// let user = new Map([
//     ["name","Nitin"],
//     ["city","pune"],
// ]);
// for(let[key,value]of user){
//     console.log(`${key}; ${value}`)
// }




/*******************For-In Loop****************************/
// used to iterate over object properties (keys)

// Loop over object properties

// let person = { name: "Neo", age: 26, city:"pune"}
// for(let key in person){
//     console.log(key,"=", person[key])
// }

// Loopp over array indexes

// let colors = ["red", "green", "blue"];
// for(let index in colors){
//     console.log(index,"=",colors[index])
// }

// count numbers of properties in object

// let car = { brand:"tesla", model:"x",price:90000}
// let count = 0;
// for(let key in car){
//     // console.log(key,"=",car[key])
//     count++
// }
// console.log("properties:",count)

// clone object using loop

// let source = {x:1, y:2};
// let clone = {};
// for(let key in source){
//    //console.log(key,"=",source[key])
    // clone[key] = source[key];
// }
// console.log(clone)

// validate object for empty keys

// let config = {x:1};
// let isEmpty = true;
// for(let key in config){
//     isEmpty = false
// }
// console.log("Is config empty?", isEmpty)