

// basically objects are a 5 types
// (1) Object literals
let person = {
    name : "Nitin",
    age : 26,
    isPass : true
}
console.log(person)  // { name: 'Nitin', age: 26, ispass: true }


// (2) Using new object
let car = new Object()
car.brand = "Tata"
car.model = "curve"
console.log(car)  // { brand: 'Tata', model: 'curve' }

// (3.1) constructor function
function user(name,email){
    this.name = name
    this.email = email
}
let u1 = new user("Nitin","nitin@12")
console.log(u1);


// (3.2)
class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
}
let u2 = new User("Nitin", "Nitin@gmail.com")
console.log(u1);


// (4) class(ES6)
class Animal{
    constructor(type){this.type="bark"}
}
let dog = new Animal("Dog")
console.log(dog.type);


// (5) Object.create() * create object with prototype

let proto = {greet() {return "Nitin"}}
let obj = Object.create(proto)
console.log("Hello",obj.greet())




// OBJECT METHODS (common ones)

// let User = { name:"Nitin",age:26};
// console.log(Object.keys(User));
// console.log(Object.values(User));

// console.log(Object.entries(User));
// User.age=66;
// console.log(User.age);

// Object.freeze(User);
// User.age=55;
// console.log(User.age);

// ASSIGN VALUES
// let a = { x:1}, b = { y:2 };
// let c = Object.assign({},a,b)
// console.log(c);
