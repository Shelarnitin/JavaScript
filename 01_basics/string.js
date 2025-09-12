// (1) charAt(index)  *returns the character at a specified index

// let str = "Neo";
// console.log(str.charAt(1));  // e


// (2) charCodeAt(index)  *return the unicode of the character at a specified index

// let str = "Neo";
// console.log(str.charCodeAt(1))  // 101

// (3) at(index)  * similar to charAt() but allows negative values
// let str = "Neo";
// console.log(str.at(-1))  // o


// (4) concat(str1, str2, ....) * joins string together
// let str1 = "Nitin";
// let str2 = "Shelar";
// console.log(str1.concat(" ",str2))  // Nitin Shelar

// (5) includes(substrings)  * check if a string contains a substring
// let str = "JavaScript";
// console.log(str.includes("Script"));  // true


// (6) endswith(substring) *check if a string ends with a specific substring
// let str = "nitin Shelar!";
// console.log(str.endsWith("!"));  // true

// (7) startsWith(substring) *check if a string starts with a specific substring
// let str = "Nitin Shelar";
// console.log(str.startsWith("N"));  // true

// (8) indexOf(substring) *Returns the first index of substring
// let str = "Nitin";
// console.log(str.indexOf("t"))  // 2

// (9) lastIndexOf(substring) *Returns the last index of substring
// let str = "Nitin";
// console.log(str.lastIndexOf("n"))  // 4

// (10) match(regex) * matches a string against a regex
// let str = "I love JavaScript";
// console.log(str.match(/Java/)); // ['Java']

// (11) matchAll(regex) *Returns all regex matches (with details)
// let str = "test1 test2";
// let matches = str.matchAll(/test\d/g);
// console.log([...matches]); // [["test1"], ["test2"]]

// (12) padStart(length, char) *pads the start of the String
// let str = "5";
// console.log(str.padStart(3, "0"));  // 005

// (13) padEnd(length, char) *pads the start of the string
// let str = "5";
// console.log(str.padStart(5, "0"));  //00005

// (14) repeat(n) *Repeats a string n time
// let str = "Nitin ";
// console.log(str.repeat("3"));  // Nitin Nitin Nitin

// (15) replace(search, replace) *Replace the first match
// let str = "I Love Js";
// console.log(str.replace("Js", "JavaScript"));  // I Love JavaScript

// (16) replaceAll(search, replace) *Replace all matches
// let str = "apple apple";
// console.log(str.replaceAll("apple", "banana"))  // banana banana

// (17) search(regex) *returns the index of a match
// let str = "JavaScript";
// console.log(str.search(/Script/)); //4

// (18) slice(starts, end) *extract part of string
// let str = "Hello World"
// console.log(str.slice(0, 5)); // Hello

// (19) split(separater) *split a string into an array
// let str = "Nitin, shelar";
// console.log(str.split(","));  // [ 'Nitin', ' shelar' ]

// (20) substring(start, end) *extract part of a string NOTE:=>(no negative indexes)
// let str = "Hello World";
// console.log(str.substring(0, 5)); // "Hello"

// (21) toLowercase() *Converts string to lower case
// let str = "Nitin";
// console.log(str.toLocaleLowerCase());  //nitin
// console.log(str.toLowerCase());        //nitin

// (22) toUpperCase() *Convert String To Uppercase
// let str = "Nitin";
// console.log(str.toLocaleUpperCase());  //NITIN
// console.log(str.toUpperCase());        //NITIN

// (23) trim() *remove spaces from both end
// let str = "   Nitin   ";
// console.log(str.trim());  //Nitin

// (24) trimStart() / trimLeft() *Remove Spaces from start
// let str = "  Nitin";
// console.log(str.trimStart());  // Nitin

// (25) trimEnd() / trimRight() *remove Spaces from end

// (26) valueOf() *returns a primitive value of a string object
// let str = ("Neo");
// console.log(str.valueOf()); // "Neo"

// (27) toString() *converts object to a string
// let str = new String("Neo");
// console.log(str.toString()); // "Neo"
