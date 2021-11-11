console.log("Welcome to TUT22 - Object Prototype")

//Object Literal: object.prototype - some already defined methods are already available - It is a premade template of Javascript Object having default methods

let obj1 = {
    name:"Saksham",
    age:16,
    channel:"SA Learner"
}

console.log(obj1)

function Obj(givenName, givenAge) {
    this.name = givenName
    this.age  = givenAge
}

//Adding methods or functions to THE PROTOTYPE of YOUR OWN OBJECt
//Never change the prototype of Global object like Object.prototype
// We can not change the prototype of object literal but only change the prototype of contructor object
Obj.prototype.getName = function () {
        return this.name
}

//Another function to add in the prototype object
Obj.prototype.setName = function (newName){
    this.name = newName;
    return this.name
}

let obj2 = new Obj("Saksham", 7)
console.log(obj2)
console.log(obj2.getName())
console.log(obj2.toString())// Default method available 
console.log(obj2.setName("Harry"))