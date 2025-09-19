// creates a new array with elements that pass a condition

// even numbers

let nums = [ 1,2,3,4,5,6,7]
let newNums = nums.filter(n => n%2===0)
console.log(newNums)

//Adults only

let ages = [15,22,13,25,17,33]
let adults = ages.filter(a => a>=18)
console.log(adults)

// Words with length

let words = ["hi","neo","hello","javascript","nitin"]
let length = words.filter( n => n.length>3)
console.log(length)