// let a = 10;
// function test(){
//     let b = 20;
//     console.log(a)   // 10
//     console.log(b)   // 20
// }
// test()
// console.log(a)  //10
// console.log(b)  // error


// ******GLOBAL SCOPE******
// let name = "Nitin";
// function greet(){
//     console.log("Hello "+name);
// }
// greet()
// console.log(name)

// *****FUNCTION SCOPE*****
// function sayHi(){
//     let msg = " Hi Nitin!";
//     console.log(msg);
    
// }
// sayHi()
// console.log(msg);  // Error

//*****BLOCK SCOPE*****/
// if (true) {
//     let x = 100;
//     const y = 200;
//     console.log(x,y);
    
// }
// NOTE : var is not a block-scope it ignored {}

// *****LEXICAL SCOPE*****
// function outer(){
//     let outerVar = "I`m Outer";
//     function inner(){
//         console.log(outerVar)
//     }
//     inner()
// }
// outer()


// *****CLOSURES*****
// function counter(){
//     let counte = 0;
//     return function(){
//         counte ++;
//         return counte;
//     }
// }
// let inc = counter();
// console.log(inc());
// console.log(inc());
// console.log(inc());
// console.log(inc());





