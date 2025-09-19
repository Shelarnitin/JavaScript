// get squares of even numbers and sum them

let nums = [1,2,3,4,5,6];
let result = nums
            .filter(a => a%2 === 0)
            .map(a => a**2)
            .reduce ((a,b) => a+b,0)

console.log(result)

// Extract active user names

let users = [
    {name: "Nitin", active: true},
    {name: "Neo", active: false},
    {name: "Shelar", active: true},
]
let active = users
            .filter(a => a.active)
            .map(a => a.name)

console.log(active)


// total shopping cart price

let cart = [
    { item: "shoes", price:2000, qty:2},
    { item: "watch", price:1500, qty:1},
    { item: "bag", price:1000, qty:3},
]

let total = cart
            .map(a => a.price * a.qty)
            .reduce((result,curr) => result+curr,0)

console.log(total);

// Average score of students who passed

let scores = [ 45, 80, 32,90, 55, 70]

let avg = scores
            .filter(a => a>=50)
            .reduce((acc,val,arr) => acc+val/arr.length,0)
console.log(scores);

// count words longer than 4 letters

let words = ["code", "javascript","Neo","developer","js"]

let count = words
            .filter(w => w.length > 4)
            .reduce((acc,_) => acc+1,0)
console.log(count)

