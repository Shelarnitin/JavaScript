// console.log(Math.round(4.1))
// console.log(Math.round(4.9))

// console.log(Math.trunc(-3.7));

// console.log(Math.floor(4.9));
// console.log(Math.floor(4.1));

// console.log(Math.ceil(4.1));
// console.log(Math.ceil(-4.9));


// console.log(Math.floor(-4.9));
// console.log(Math.floor(-4.1));

// console.log(Math.max(1,2,3,2,6,5,4,3));
// console.log(Math.min(1,2,3,2,6,5,4,3));

// console.log(Math.sqrt(16));

// console.log(Math.cbrt(8));

// console.log(Math.pow(2,3))

console.log(Math.abs(-4))

// console.log(Math.round(Math.random()*10000))



// let now =new Date().getTime()
// console.log(now)

// arr.push(6)
// console.log(arr)
// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)
// arr.unshift(1)
// console.log(arr)

// let arr = [1,2,3,4,5]
// console.log(arr.findIndex(x => x>=3))
// console.log(arr.includes(4))
// console.log(arr.includes(9))


// let doubled = [1,2,3].map(x => x*2)
// console.log(doubled)

// let evens = [1,2,3,4,5,6,7,8,9].filter(x => x>5 )
// console.log(evens)

// let count = [1,2,3,4,5].reduce((x,y) => x+y)
// console.log(count)

// let arr2 = [1,2,3,4,5,6]
// console.log(arr.reverse())

// let arr1 = [6,5,7,3,2,8]
// console.log(arr1.sort())

// let person2 = {
//     name:'nitin',
//     age:'27'
// }
// console.log(person)

// let car = new Object()
//     car.brand = 'tata'
//     car.model = 'curve'
// console.log(car)

// let person1 = new Object()
// person1.name = 'Nitin';
// person1.work = 'student';
// console.log(person)

// function user(name, email){
//     this.name = name
//     this.email = email
// }
// let user1 = new user('neo', 'neo@gmail.com')
// console.log(user1)

// class person{
//     constructor(name, email){
//         this.name = name
//         this.email = email
//     }
// }
// let user = new person('neo', 'neo@gmail.com')
// console.log(user)

// let proto = {greet() {return "Hello"}};
// let obj = Object.create(proto)
// console.log(obj.greet()) 

// let user = { name: 'Neo', email : "neo@gmail.com"}
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))


// let a={x:1}, b={y:2}
// let c = Object.assign({},a,b)
// console.log(c)

// function Greet(){
//     console.log("Hello neo");
// }
// Greet()

// function add(a,b){
//     return a+b;
// }
// console.log(add(4,6))

// function sayHii(){
//     return "Hello"
// }
// console.log(sayHii())
// sayHii()


// function Expression => Stored inside a variable

// let greet = function(name){
//     return "Hello " + name;
// }
// console.log(greet("Nitin"))

// Find() --> first matching element

let arr = [10,20,30];
console.log(arr.find(x => x > 15))


// [1,2,3].map(num => console.log(num*2))

// let arr = [1,2,3,4].forEach(num=> num*2)
// // arr.forEach(num=> console.log(num*2))
// console.log(arr)

// let doubled = [1,2,3].map(x=>x*2)
// console.log(doubled)

// let evens = [1,2,3,4].filter(x => x%2 == 0)
// console.log(evens)
// let sum = [1,2,3,4,5].reduce((a,b) => a+b,0)
// console.log(sum)

// basic array

// let arr = [1,2,3,4,5]
// console.log(arr.slice(1,4))

// let arr = [1,2] , arr2 = [3,4]
// console.log(arr.concat(arr2))


// let arr = [1,2,3,4,[5,6,7],8,[9,10]]
// console.log(arr.flat())

// let arr = [1,7,3,5,3,9,7,8]
// console.log(arr.sort())

// let arr = [1,2,3,4,5,6,7]
// console.log(arr.reverse())



// setTimeout(function() {
//     console.log("I`am anonymous")
// },2000);

// (function() {
//     console.log("IIFE executed")
// })();


// function persone(name){
//     this.name = name;
// }
// let p1 = new persone("Neo")
// console.log(p1)

// function * numbers(){
//     yield 1;
//     yield 2;
//     yield 2;
// }
// let gen = numbers()
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)

// async function fetchData(){
//     return "Data Received..!"
// }
// fetchData().then(console.log)


// function Input(c) {
//     let name = 'Neo';
//     c(name)
// }
// Input ((n) => console.log("Hello " + n))