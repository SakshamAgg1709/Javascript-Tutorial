console.log('Welcome to tut32');
let a = "saksham"
a = undefined
if(a!=undefined){
   throw new Error('This is not undefined');//error in console -after this error no code will run after this
}else{
    console.log('This is undefined');
    
}

try {
    // adfsl//This is a error
    console.log('We are inside try block');
    harry()
    
} catch (error) {
    console.log("Sorry the try block is not executed :(");
    console.log('This is the error =>' , error);
    console.log('This is the name of error =>' , error.name);
    console.log('This is the message of error =>' , error.message);
    
    
}finally{//chahe try ho ya catch finally ye run zaroor hoga
    console.log('We will finally run this');
    
}
