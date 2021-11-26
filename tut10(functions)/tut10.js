// function greet(name, thank="Greetings") {//Greetings is the default message, in case the user doesn't add a thank message with a comma 
//     // console.log(`Happy Birthday ${name}, ${thank}`)
//     let msg = `Happy birhday ${name}, ${thank}`;
//     console.log(msg)
//     return msg ;
// }

//Another way - making functions in the variable - no need to give name of the function if you are using variable

const greet = function (name, thank = "Greetings") {
    // console.log(`Happy Birthday ${name}, ${thank}`)
    let msg = `Happy birhday ${name}, ${thank}`;
    console.log(msg)
    return msg;
}


console.log("This is tut10");
let name = 'Saksham';

console.log(`${name}, very Good Morning`)
greet(name, " more greetings!!")// It will print the output untill there is console.log in the function - otherwise it will say undefined

//When there is a return you need to add a variable and print it separately


let val = greet(name)
console.log(val)// It will give undefined untill you add return in function


const myObj = {
    name: 'Harry',
    game: function () {
        return 'GTA';
    }
}

console.log(myObj)
console.log(myObj.game())
console.log(myObj.name)


arr = ['fruits', 'vegetable', 'grains']

arr.forEach(function (element, index, array) {
    console.log(element, index, array)//Array - From which array the element is 
})

// Scope - A new Topic though
// Const and LET has block level scope only 
// Var has function level scope - If var is used inside function then it has scope only inside that particular function otherwise if var is used anywhere else except a function it would have a global scope 
// It is recommended to use let and const only

if (1) {
    // let i = 234;// It is not globally assigned
    // const i = 234;// It is not globally assigned
    var i = 333;// It is  globally assigned because var is not inside a function
    console.log(i);
}

console.log(i)// It will give error if we use let in if statement

function ui(name) {
    // var i = 2;//  It has function level scope, globally value of i will be 333
    // i = 5;// This will change value of i into 5 globally
    // let i = 5 // It has scope with in the function
    const i = 5 // It has scope with in the function
    console.log(i)
    return `This is ${name} ui`;
}
console.log(ui("Sakshma"), i)
// console.log(i) - It will also give error if we use let in if statement