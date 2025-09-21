// (1) Math.round(x) *Rounds to the nearest integer
// console.log(Math.round(4.6));  // 5
// console.log(Math.round(4.4));  // 4

// (2) Math.floor(x) *Rounds down to the nearest integer
// console.log(Math.floor(4.6));  // 4
// console.log(Math.floor(-4.6));  // -5

// (3) Math.ceil(x) *Rounds up to the nearest integer
// console.log(Math.ceil(4.1));  // 5
// console.log(Math.ceil(-4.9)); // -4

// (4) Math.trunc(x) *Removes the decimal part (just the integer part)
// console.log(Math.trunc(4.9));  // 4
// console.log(Math.trunc(4.1));  // 4
// console.log(Math.trunc(-4.9)); // -4
// console.log(Math.trunc(-4.1)); // -4

// (5) math.max(...values) *Returns the largest values
// console.log(Math.max(1,2,3,4,5,8)); // 8

// (6) Math.min(...values) *Returns the smallest value
// console.log(Math.min(1,2,3,4,5,6,8)); // 1

// (7) math.sqrt(x) *square root
// console.log(Math.sqrt(9));  // 3

// (8) Math.cbrt(x) *Cube root
// console.log(Math.cbrt(27));  // 3

// (9) *Math.pow(base, exponent) *Power function
// console.log(Math.pow(2, 4));  // 2*2=4, 4*2=8 8*2=16  // 16

// (10) Math.abs(x) *Absalute value (always positive)
// console.log(Math.abs(-5));  // 5

// (11) Math.random() *Random number between 0 and 1
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 10) + 1);  // for 1 to 10

// (12) Math.sign(x) *Returns 1 , -1 , or 0
// console.log(Math.sign(4));  // 1
// console.log(Math.sign(-4)); // -1
// console.log(Math.sign(0));  // 0

// (13) Math.PI  *Constant for π (3.14159…)
// console.log(Math.PI);  // 3.141592653589793

// (14) Math.E  *Constant for Euler’s number (~2.718)
// console.log(Math.E);  // 2.718281828459045

// (15) Math.log(x) *Natural log (base e)
// console.log(Math.log(Math.E));  // 1

// (16) Math.log10(x) *Logarithm base 10
// console.log(Math.log10(100));   // 2


/*************************************/

// 💡 Most used in real coding:
// round, floor, ceil, trunc, max, min, sqrt, random, abs


/***************************JavaScript Number Static Methods*************************************/

// (1) Number,isFinite(value) *checks if value is a finite number
// console.log(Number.isFinite(25));         // true
// console.log(Number.isFinite(Infinity));   // false
// console.log(Number.isFinite("25"));       // false

// (2) Number.isInteger(value) * checks if value is an Integer
// console.log(Number.isInteger(10));    // true
// console.log(Number.isInteger(10.5));  // false

// (3) Number.isNaN(value) *checks if value is NaN
// console.log(Number.isNaN(NaN));       // true
// console.log(Number.isNaN("Hello"));   // false
// console.log(Number.isNaN(0/0));       // true

// (4) Number.issafeInteger(value) *Checks if number is within safe integer range (−(2⁵³ − 1) to 2⁵³ − 1).
// console.log(Number.isSafeInteger(903652489632455));    //true
// console.log(Number.isSafeInteger(90365258649755446));  //false

// (5) Number.parseFloat(value) *parses a string into a floating point number
// console.log(Number.parseFloat("99.99"));   //99.99
// console.log(Number.parseFloat("99px"));    //99

// (6) Number.parseInt(value, index) *parses a string into a integer (optianally with a base)
// console.log(Number.parseInt("10.55"));  // 10

// (7) Number.EPSILON *smallest difference between two representable numbers
// console.log(Number.EPSILON);   // 2.220446049250313e-16

// (8) Number.MAX_SAFE_INTEGER *largest safe integer in js
// console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991

// (9) Number.MIN_SAFE_INTEGER *smallest safe integer in js
// console.log(Number.MIN_SAFE_INTEGER);    // -9007199254740991

// (10) Number.MAX_VALUE *largest representable positive number
// console.log(Number.MAX_VALUE);   // 1.7976931348623157e+308

// (11) Number.MIN_VALUE *smallest positive number greter than 0
// console.log(Number.MIN_VALUE);   // 5e-324

//(12) Number.POSITIVE_INFINITY & Number.NEGATIVE_INFINITY  *positive and negative infinity constants
// console.log(Number.POSITIVE_INFINITY);   // Infinity
// console.log(Number.NEGATIVE_INFINITY);   // -Infinity

// (13) Number.NaN *special NaN number
// console.log(Number.NaN);  // NaN




// let a= 10;
// let b= 20;
// console.log(typeof("sum of 10 and 20 is " +a + b));
// console.log(typeof(a + b)+" is sum of 10 and 20 is ");

export const pi = 3.14;