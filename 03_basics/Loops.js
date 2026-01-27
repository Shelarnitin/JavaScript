/*************************** FOR LOOP ****************************/
// best when you know how many times you need to iterat
// Reverse array

let arr = [1,2,3,4,5];
for (let i=arr.length-1 ; i>=0 ; i--){
    console.log(arr[i])
}

// Print multiplication table of 7

for (let i=1 ; i<=10 ; i++){
    console.log(`7 * ${i} = ${7*i}`)
}

// calculate factorial of 5
let fact = 1;
for(let i=1 ; i<=5 ; i++){
    fact = fact * i;
}
console.log("factorial:",fact)

// print character of a string

let sname = "SHELAR";
for(let i=sname.length-1 ; i>=0 ; i--){
    console.log(sname[i])
}

let name = "shelar";
for(let i=0 ; i<name.length ; i++){
    console.log(name[i])
}

// find maximum in an array

let nums = [1,45,3,34,9];
let max = nums[0];
for(let i=0 ; i<nums.length ; i++){
    if(nums[i]> max)max = nums[i]

}
console.log("max:",max)

// create a new array with squares
let arr1 = [1,2,3,4,5];
let squares = [];
for(let i=0 ; i<arr1.length ; i++){
    squares.push(arr1[i]**2)
}
console.log(squares)


/**********While Loop******************/
// when you don`t know the exact number of iteration

// Keep asking until valid input

let input;
while(input !== "Yes"){
    input = "Yes";
}
console.log("user confirmed")

//countdown timer

let time = 5;
while(time>0){
    console.log("Time left", time--)
}

// ATM pin validation

let pin = "1234";
let entered = "0000";
while(entered !== pin){
    entered= "1234";
}
console.log("Access granted")

// Keep doubling until greater than 100
// let val = 1;
// while(val<=200){
//     console.log(val)
//     val*=2
// }

// simulate network retry until success

// let success = false;
// let attempts = 0;
// while(!success && attempts < 3){
//     attempts++;
//     success = attempts === 2;  // success at 2nd try
// }
// console.log("connection:", success ? "Success" : "failed")

/***************Do..... While Loop********************/
// Execute at least once, even if condition is false

// Generate random numbers until we get 5
// let random;
// do{
//     random = Math.floor(Math.random()*10);
//     console.log(random)
// }while(random !== 5)

// Ask for age until valid
// let age;
// do{
//     age = 25;

// }while(age<18)
// console.log("Valid age:",age)

// Roll dice until you get a 6
// let dice;
// do{
//     dice=Math.ceil(Math.random()*6);
//     console.log("Rolled:",dice);
// }while(dice !==6)