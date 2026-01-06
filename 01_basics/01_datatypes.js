// console.log(Math.max() < Math.min());

/****************** DATA TYPES********************/

/********PRIMITIVE*****NON-PRIMITIVE***************/

/**********PRIMITIVE*************/

let number = 1
let string = "Nitin"
let boolean = true
let nullNumber = null
let undefined;
let bigInt = 1234n
let symbol = Symbol("123")

console.table( [typeof number, typeof string, typeof boolean, typeof nullNumber, typeof undefined,typeof  bigInt, typeof symbol])

// console.log(typeof Object) // function

// console.log(typeof Function) //function


/*****************NON-PRIMITIVE**********************/

// let arr= [1,2,3,4]
// console.log(arr)
// console.log(typeof arr)   // object

// let student = {
//     fullName : "nitin",
//     age : 26
// }
// console.log(student)
// console.log(typeof student)  //object

// let myFunc = function() {
//     console.log("nitin")
// }

// console.log(typeof myFunc)  //function


/************************************************/

// stack (primitive)  & heap (non-primitive)

// let name = "nitin"

// let surname = name

// surname = "shelar"

// console.log(name)
// console.log(surname)

// // Heap ( Non-Primitive )

// let userOne = {
//     email : "nitin@gmail.com",
//     upi : "user@ybl"
// }

// let userTwo = userOne

// userTwo.email = "shelar@gmail.com"

// console.log(userOne);
// console.log(userTwo);

// const gamename = ("nitin")
// console.log(gamename)

let str = "banana";
let empty= []
for (let i=0;i<str.length;i++){
    if(str[i]==="a"){
        empty.push(i)
    }
}
console.log(empty)


// let row = 5

// for (let i = 1 ; i <= 5 ; i++){
//     let str = ''
//     for(let j=0;j<=5-1-i;j++){
//         str += ' '
//     }
//     for(let j=0;j<i;j++){
//         str += '* '
//     }
//     console.log(str)
// }



for(let i=1;i<=5;i++){
    let str = ''
    for(let j=0;j<=5-1-i;j++){
        str += ' '
    }
    for(let j=0;j<i;j++){
        str += '* '
    }
    console.log(str)
}