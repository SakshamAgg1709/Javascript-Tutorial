console.log("Welcome to TUT19")

let x = 10;
let y = 5;
let z = x+y;
z = x-y;
z = x*y;
z = x/y;// It will print with or without decimal
z = x%y;// Remainder

//Exploring Math Object
z = Math;
z = Math.PI;
z = Math.E;
z = Math.round(5.4);// Round of value
z = Math.ceil(5.3);// 6 print hoga - ceil means top value , whether it is more than 5 or less than 5
z = Math.floor(5.3);// 5 print hoga - floor means bottom value , whether it is more than 5 or less than 5
z = Math.abs(-4);// Absolute Value |-5| = 5 ; |5| = 5
z = Math.sqrt(64);// Integer as well as Float value available
z = Math.pow(2, 3);//2 raise to power 3
z = Math.min(0.1,2, 3, 34,234, 2342,34);// Minimum value
z = Math.max(2, 3, 34,234,34);//Maximum Value
z = Math.random();// Random number between 0 to 1
z = 100*Math.random()//Random number between 0 to 100 - Simlarly we can multiply it by other number as we want random numbers

z = Math.ceil(50 + (100-50)*Math.random()) // random numbere between 50 and 100 - (100-50) is important otherwise it can print value more than 100
console.log(z)

//Concept of Random

// a = (0, 1)
// a100 = a*100 = (0, 100)// Random number between 0 to 100
// a10_100 = 10+a*(100 - 10)// Random number between 10 to 100

// Floor & ceil

// 3
// 2.8
// 2
// 1
// 0
// -1
// -2//This is Ceil value of 2.7
// -2.7
// -3// This is floor value of 2.7