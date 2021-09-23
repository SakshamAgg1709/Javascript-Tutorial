//Type Conversion and Type Coercion

console.log("Welcome to tut5")

let myVar;
myVar = 34;
console.log(myVar)
console.log(typeof myVar)
myVar = String(34)
console.log(typeof myVar)

let booleanVar = true;
console.log(typeof booleanVar)
booleanVar = String(true)
console.log(typeof booleanVar)
booleanVar = Number(true)
console.log(booleanVar ,typeof booleanVar)

let date = String(new Date())
console.log(date, typeof date)

let arr = String([1,2,3,4,5,6]);
console.log(arr.length, (typeof arr))//Length includes comma also

let i = 8;
console.log(i.toString())// It is same as String(i)

let str1 = Number("1222")
str1 = Number("12g22")
console.log(str1, typeof str1)//It will print NaN - Not a Number beacuse of "g" 

let numarr1 = Number([2,3,4,45,4])
console.log(numarr1 , typeof numarr1)//It will also print NaN - Not a Number

let number = '34.33';
// number = parseInt('34.93983');

//All are Number DataType
number = parseFloat('34.33');
number = Number('34.33');
number = parseInt('34.33');

console.log(number, typeof number)


let num2 = 4343.3434343
//IMPORTANT FUNCTION
console.log(num2.toFixed(3))//Show only 3 numbers after decimal

// Type Coercion

let mystr = Number("555")
let mynum = 34;

console.log(mystr + mynum)// It will print 55534 untill we add NUmber("555")