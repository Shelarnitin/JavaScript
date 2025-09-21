// BASIC OPERATION

// (1) push() * Add element at the end
// let arr = [1,2,3];
// let newArr = arr.push(4)
// console.log(arr)
// console.log("Added element is",newArr)

// (2) pop() *Removes last element
// let arr = [1,2,3,4,5]
// let newArr = arr.pop()
// console.log(arr)
// console.log("Removed element is",newArr)

// (3) shift() *remove first element
// let arr = ["Nitin","shelar"]
// arr.shift()
// console.log(arr)
// arr.unshift("Neo")
// console.log(arr)

// (4) unShift() *Add element at the first
// let arr = ["shelar"];
// arr.unshift("nitin");
// console.log(arr);

// ITERATION METHODS

// (5) forEach() * loop through array
// [1,2,3].forEach(num => console.log(num*2))
// let arr = [1,2,3,4]
// arr.forEach((x,i,array) => {
//     array[i] = x*2
// })
// console.log(arr)



// (6) map() * transform into new array
// let num = [1,2,3,4]
// let newNum = num.map((x) => {
//     return x*2
// })
// console.log(num);
// console.log(newNum)


// (7) filter() *filter elements
// let arr = [1,2,3,4,5,6,7,8,9]
// let newArr = arr.filter((x) => {
//     return x > 3
// })
// console.log(newArr)

// (8)reduce() *reduce to a single value
// let arr = [1,2,3,4,5]
// let newArr = arr.reduce((x,y) => {
//     return x+y
// })
// console.log(newArr)

// (9) find() *first matching element
// let arr = [1,2,3,4,5,6,7,8];
// let newArr = arr.find((x) => x>3);
// console.log(newArr);

// (10) findIndex() *Index of first match
// let arr = [10,20,30];
// console.log((arr.findIndex(x => x>25)));

// (11) includes() *eheck if element exists
// let arr = [1,2,3];
// console.log(arr.includes(1));
// console.log(typeof(arr.includes(1)));

// (12) indexOf() *first occurence position
// let arr = [1,2,3,2];
// console.log(arr.indexOf(2));

// console.log(!![]);  // true

// (13) flat() *flatten nested arrays
// let arr = [1,[2,3,4,5,6]];
// console.log(arr.flat());

// (14) sort() *sort element
// let arr = [1,4,3,5,7]
// console.log(arr.sort());

// let arr= [9,2,5,1,82,45]
// arr.sort((a,b) => a-b)
// console.log(arr)

// (15) reverse() *reverse array
// let arr = ['s ','h','e','l','a','r'];
// console.log(arr.reverse());
