console.log('Welcome to tut33 - Regular expressions');

//this is a Regular expression literal
// let reg = /s/ // - it will search only for the first appearance of the literal
let reg = /saksham/g; // - it will search for all the appearance of the literal - g means global
reg = /saksham/i; // i means case insensitive
reg = /saksham/ig; // i means case insensitive - ig means case sensitive as well as global
// console.log(reg);
// console.log(reg.source);// regular expression ke andar ka content

let s = "This is a great code by saksham which is saksham, SaKsham SAKSHAM"
// Functions to match expressions
// 1. exec() - This function will return an array for match or null for no match

//Due to "g" at the end of literal - they will show different indices
let result = reg.exec(s)
// console.log(result);
// result = reg.exec(s)
// console.log(result);
// result = reg.exec(s)
// console.log(result);
// result = reg.exec(s)
// console.log(result);
// result = reg.exec(s)
// console.log(result);//it will return null when all the appearances are mentioned already or there is no match
// console.log(result); ---> We can use multiple exec with global flag


// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }


// 2. test() - Returns true or false
let result2 = reg.test(s);
console.log(result2);// --> This will only print true if the "reg" is there in the string "s"

// 3. match() - It will return an array of results or null
// let result3 = reg.match(s) //---> This is wrong!!
let result3 = s.match(reg) // ---> This is right
console.log(result3);


// 4. search() - Returns index of first match else -1
// let result4 = reg.search(s) ---> This is wrong!!
let result4 = s.search(reg) // ---> This is right
console.log(result4);

// 5. replace() - Returns new replaced string with all the replacements (if no global flag is given, first match will be replaced)

let result5 = s.replace(reg, 'SHUBHAM');
console.log(result5);
