// let a = 10;
// function test(){
//     let b = 20;
//     console.log(a)
//     console.log(b)
// }
// test()
// console.log(a)
// console.log(b)

// GLOBAL SCOPE => Accescible Everywhere
 let str = "Neo";
 function greet() {
    console.log("Hello " + str)
 }
 greet()
 console.log("Welcome " + str)

 // (Function Scope) Local Scope
 // veriable declare inside a veriable and accessible only inside it scope

 function SayHii(){
    let msg = "Hii Nitin"
    console.log(msg)
 }
 SayHii()
//  console.log(msg) // ReferenceError

// LEXICAL SCOPE => function can access variable from their outer scope
 function outer(){
    let outerVar = " I`am Outer";
    function inner(){
        let innerVar = "I`am Inner"
        console.log(outerVar)
        console.log(innerVar)
    }
    inner()
 }
 outer()

 // Scope Chain

 let a = 10;
 function one(){
    let b = 20;
    function two(){
        let c = 30;
        console.log(a,b,c)
    }
    two()
 }
 one()