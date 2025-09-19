// reduce array to a single value

// sum of numbers

let nums = [1,2,3,4,5];
let newNum = nums.reduce((res,curr) => res+curr)
console.log(newNum)

// find max

let arr = [1,22,3,7,4,5]
let newArr = arr.reduce((res,curr) => res>curr ? res:curr)
console.log(newArr)

// count occurence

let fruits = ["apple","banana","apple","orange","banana"]
let count = fruits.reduce((acc,fruit) => {
    acc[fruit] = (acc[fruit] || 0) +1
    return acc;
},{})
console.log(count)