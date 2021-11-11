console.log("Welcome to Tut7 - Arrays")

/*
When i use const i can change the marks array with the use defined methods like splice, push, pop etc. BUT cannot do like 
marks = marks.push(44)
for that i had to use Let
*/
let marks = [34,55,21,66,36,99]
const fruits = ["Mango","Apple","Orange"]
const mix = ['str', 34, [3,4]]

const arr = new Array(33,2323,42,'Mango')//Another way of making Array

console.log(arr)
console.log(mix)
console.log(fruits[0])

console.log(arr.length)//length is a prrperty not a method so no need to put ()

console.log(Array.isArray('ff'))// ff is not an  array so it return false, if it would be fruits in place of ff it would return true

arr[0] = 'Saksham';// It didn't add the element but replace them
console.log(arr)

let arrelement =  arr[0]
console.log("element :", arrelement)

let value = marks.indexOf(66)
let value2 = marks.indexOf(2)
console.log(value)
console.log(value2)// It will print -1 because there is no 2 in marks

marks.push(3333)//End mein push kar do ya add kar do
console.log(marks)


marks.unshift(10009)// Start mein add karna
console.log(marks)

marks.pop()//Eradicate last element
console.log(marks)

marks.shift()// Removes first element from an array
console.log(marks)

marks.splice(2, 3) // 2nd Index se start ho kar 3 element hata dega 
console.log(marks)

marks.reverse()
console.log(marks)

let marks2 = [2,11,3,2]
marks3 = marks.concat(marks2)// Concat requires defining the marks = something -  Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(marks)//Original array didn't change
console.log(marks3)

let  myObj = {
    name:'Saksham Aggarwal',
    channel : ' SA Learner',
    goal : 'Entrepreneur',
    isActive : true,
    age : 16,
    marks : [33,44,33]
}

console.log(myObj)
console.log(myObj['channel'])
console.log(myObj.channel)// Same as log(myObj['channel'])