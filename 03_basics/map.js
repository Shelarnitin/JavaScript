// map
// create a new array by applying a function to each element

// Double each number

let nums = [1,2,3,4];
let doubled = nums.map(n => n*2);
console.log(doubled)

// Extract usernames

let user = [
    { id:1, name: "Neo"},
    { id:2, name: "Nitin"},
]
let names = user.map(u => u.name)
console.log(names);

// convert celsius --> fahrenheit

let celsius = [ 0, 10, 20]
let fahrenheit = celsius.map(c => (c* 9/5)+32)
console.log(fahrenheit)
