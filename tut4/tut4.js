/* Data Types in Javascript

Primitive types:-

Primitive data types are numbers, Booleans, strings, undefined, null, and symbol. Primitive data types are the basic or common data types in JavaScript.

Reference Types
Reference in JavaScript are datatypes based on primitive. Like Objects, Arrays, and Functions. Everything is JavaScript is either an Object or Primitive datatype. When we create an object, that value is not directly assigned to the variable. Instead, a reference to that value is what gets set. Variable knows about the location of the object in memory, not the object itself.

*/

//Primitive Datatypes

//String
let name = "Saksham";
console.log("My string is " + name);
console.log("Datatype is " + (typeof name));
console.log("Datatype is " + typeof(name));//Both are same 

//Number

let num = 44;
console.log("Entered data is  " + num);
console.log("Datatype is " + (typeof num));

//Boolean

let boool = true
console.log("Entered data is " + boool);
console.log("Datatype is " + (typeof boool));

//Null

let nullVar = null
console.log("Entered data is " + nullVar);
console.log("Datatype is " + (typeof nullVar));//It will give object datatype which is a reference datatype, but null is primitive datatype

//Undefined

let undef;
console.log("Entered data is " + undef);
console.log("Datatype is " + (typeof undef));


//Reference Datatype

//Array

myarr = [33, "34", false, 'string']
console.log("Datatype of the entered data is " + (typeof myarr))// Result will be object

//Object Literals

let marks  =  {
    harry :44,
    Saksham : 100,
    Rohan : 3,
    'Rohan Das' : 3
}

console.log(marks)
console.log("Datatype of the entered data is " + (typeof marks))


function findName(){

}

console.log("Datatype of the function made is " + (typeof findName))

let date = new Date();
console.log("Datatype of the entered date is " + (typeof date))
