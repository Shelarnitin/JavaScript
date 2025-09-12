// (1) Normal functions & this

// function normalFunc() {
//     console.log(this)
// }
// normalFunc();

// If called as an object method

// let obj = {
//     name: "Neo",
//     sayHi: function(){
//         console.log(this.name);
//     }
// };
// obj.sayHi()  // Neo

// (2) Arrow function & this

// let obj = {
//     name: "Neo",
//     sayHi: () => {
//         console.log(this.name)
//     }
// }
// obj.sayHi()  // undefined

// (3) Arrow functions inside methods

// let obj = {
//     name: "Neo",
//     sayHi: function() {
//         let arrow = () => console.log(this.name)
//         arrow();
//     }
// };
// obj.sayHi()

// (4) Arrow functions in callbacks

// function Person(name){
//     this.name=name;
//     setTimeout(() => {
//         console.log("Hello "+ this.name)
//     }, 1000);
// }

// let p1 = new Person("Nitin")
// // console.log(p1);

// If we use a normal function inside timeout

// function Person(name) {
//     this.name = name;
//     setTimeout(function() {
//         console.log("Hello "+ this.name);
//     }, 1000);
// }

// let p1= new Person("Nitin")

