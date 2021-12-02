console.log("Welcome to Tut 29")

//Regular Function
// function harry(){
//     console.log("This is harry function")
// }
// const harry = function(){//Same as above
//     console.log("This is harry function")
// }

//COnverting it into an arrow function
const harry = ()=>{
    console.log("This is harry Arrow function")
}
harry()

//function returning somthing
// const greet = function(){
//     return "Good Morning"
// }
// Cool Way for the above code - One Liners

const greet = ()=> "Good Morning" // NO need if writing return - it will automatically return the one liners

// const greet = ()=>{return "good Morning"}

greet()//no message
console.log(greet())// it will return a functionS

//Returning a object

const objFunc = ()=>{{name;"saksham"}}//for returning a object you need to put the curly braces
console.log(objFunc())

const argFunc = (name, ending)=> "Good Morning " + name + " " + ending;
const argFunc2 = name => "Good Morning " + name  ;

console.log(argFunc("Saksham" , "bye bye"))
console.log(argFunc2("Saksham"))
// Single parameters do not need parenthesis 
// but you will have to put parenthesis if there are multiple paramteres