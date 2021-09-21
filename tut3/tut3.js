console.log("Hi this is Tutorial 3");

// Variables in JS 
// var, let, const

var name = `Saksham' channel is`;
// They are backticks used for entering HTML, ",' 
console.log(name, channel);
//It will print undefined in place of channel
var channel;
console.log(name, channel);
var channel = `SA Learner`;
console.log(name, channel);

var marks = 100;
console.log(name, channel, marks);

// RULES FOR VARIABLES -:
// 1. Cannot start with numbers 
// 2. Can start with letter, numbers, underscore, $
// 3.  Are case sensitivity 
// 4. It is not advisable to use _ or $ in variable name 

var city = 'Delhi';
console.log(city);

const ownersName = 'Saksham'
// ownersName = 'Harry'//It will give error, you cannot change const
console.log(ownersName)
const fruit = 33; //Cannot do this
console.log(fruit)

// let - has a block level scope 

{//opened a empty block, it could be of if, else, loop

    let city = 'Rampur';
    city = 'Kolkata';// we can change let variable inside a block
    console.log(city);
}
console.log(city);


const arr1 = [12, 23, 12, 53, 3];
// arr1 = [233, 44,4] this is not permitted
// arr1.push(45);
console.log(arr1)


/* Most common programming case types:

1. camelCase  - It is gud to use
2. kebab-case
3. snake_case 
4. PascalCase 


*/