console.log("this is tut31")

async function sakshu(){//using async will return a promise
    console.log("Inside sakhsu() function")
    const response = await fetch('https://api.github.com/users')//whenever there is a await, the program will move forward and execute await statement at last
    console.log("Before response")
    const users = await response.json();
    console.log("users resolved")
    return users//the whole promise is returning users- array[30] - the whole users is a promise - The console.log(a) will give a promise which will be pending untill users which is response.json() which again returns a promise
    // return "saksham"
}

console.log("Before calling sakshu()")
let a =sakshu()
console.log("After calling sakshu()")
console.log(a)
a.then(data => console.log(data))
console.log("Last line of js file")
//Another examples 
// async function func() {
//     console.log('Async/Await tutorial.');
//     return Promise.resolve(1);
// }
// func().then(function(res) {
//     console.log(res)
// });