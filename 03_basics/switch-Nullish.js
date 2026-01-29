let value=2
switch(value){
    case 2:
        console.log("monday")
        break;
    case 1:
        console.log("sunday")
    default:
        break;
}


// ************Grouping cases**************
let fruit = "Banana";
switch (fruit){
    case "apple":
    case "Mango":
    case "Banana":
        console.log("It`s a fruit");        
        break;
    default:
        console.log("It`s Not a fruit")
        break;
    
}

// *************Switch with Expressions*********

// let num = -1;
// switch(true){
//     case num < 0:
//         console.log("Negative");
//         break;
//     case num === 0:
//         console.log("Zero");
//         break;
//     case num > 0:
//         console.log("Positive");
//         break;
//     default:

//         break;
// }

/********************NULLISH COALESCING ??*****************/
/* Returns the right-hand value if the left-hand 
NULL or UNDEFIEND otherwisereturns left-hand value*/
// let user;
// console.log(user ?? "Guest")

// Difference between || and ??
// || (OR) considers falsy values (false, o, -0, null, undefiend,NaN)
// ?? considers only null and undefiend

// let score = 0;
// console.log(score || 100)
// console.log(score ?? 100)

//************Chaining with multiple Defaults*********/
// let val = null;
// let result = val ?? "default1" ?? "default2";
// console.log(result)
// console.log(val)

//************Real-life example User profile***********/

// let user = {
//     name : "Nitin",
//     age : null,
// }
// console.log(user.name ?? "Rahul")
// console.log(user.age ?? "26")
// console.log(user.city ?? "aurangabad")

//***************With functions***********/

// function greet(msg){
//     console.log(msg ?? "Hello World")
// }
// greet("Hi Neo")
// greet()

//*************Nullish coalescing with optional chaining***********/
// let user = {};
// console.log(user.profile ?? user.email ?? "No Email")