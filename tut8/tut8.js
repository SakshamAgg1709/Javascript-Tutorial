console.log("This is tutorial 9")

const age = 13;

if (age==18) {//It will check only value i.e. 18, not datatype, string can be compared with integer
    console.log("You can drive")
} 
else if(age===2){// It will check value as well as datatype, string can't be compared with integer 
    console.log("Enter correct age")
}
if(age!==13){
    console.log("Age is not 13")
}
else {
    console.log("You can't drive")

}

const ageTwo = "13"

if (ageTwo == 18) {
    console.log("Age is 18 in integer")
}
else if (ageTwo === 18){
    console.log("Age is 18 with datatype AS well as value")
}
if (ageTwo != 13){
    console.log("Age is not 13")
}
if (ageTwo !== 13){
    console.log("Age is not 13 in datatype")
}
else {
    console.log("enter the age correctly")
}


// const var1;

if (typeof var1 !== 'undefined'){//typeof always returns the type of the variable as a string, so we have to write 'undefined' not undefined
    console.log("Var1 is defined")
}
else{
    console.log("Var1 is not defined")
}


const doesDrive = true;

if (doesDrive && age >=18){//Both condition must be true
    console.log("You can drive")
}

else{
    console.log("You cannot drive")
}


console.log( age == 13?'Age is 13':'Age is not 13' )//Shorthand property - ? mark is important symbol of then

switch (age) {
    case 18:
        console.log("You are 18")
        break;
    case 14:
        console.log("You are 14")
        break;
    case 13:
        console.log("You are 13")
        break;//If you will remove break, it will execute all cases
    
    default://Agar koi case match nhi hua to default wala code run hoga
        console.log("You are not 13, 14 or 18")
        break;
}