console.log("Welcome to tut15")

let inpArray = ['ginger', 'tomato', 'onion', 'ladyfinger']
// console.log(typeof inpArray)
// Adding a key Value pair inside the local storage 

// localStorage.setItem('name', 'harry')// name is a key and harry is a value 
// localStorage.setItem('name2', 'Saksham')// Same fomat here also and all this is stored in one local storage in the browser window - You can checkthem out in the Application tab in the console of the browser
// localStorage.setItem('sabzi', inpArray)// It will retrieve array in the form of a string
// localStorage.setItem('sabzi2', JSON.stringify(inpArray))// It is also a string  but the whole array is a string [] is also a part of string

//Retrieve an Item from localStorage

let name = localStorage.getItem('name')
console.log(name)// It will print harry

let name2 = localStorage.getItem('name2')
console.log(name2)
let name3 = localStorage.getItem('name3')
console.log(name3)// It will print null as name3 doesn't exist

let sabzi = localStorage.getItem('sabzi')
console.log(sabzi)// It is a string not an array
console.log(JSON.stringify(sabzi))// It is a string not an array
console.log(JSON.stringify(sabzi)[0])// It will show " because "ginger,tomato, .." is a whole string

let sabzi2 = localStorage.getItem('sabzi2')
console.log(sabzi2)

// It will tell you the difference 
/*
sabzi[0]
'g'
sabzi2[0]
'['
*/

let sabzi2Arr = JSON.parse(sabzi2);// Now sabzi2 is a proper array// It is a type of object
console.log(sabzi2Arr);// All methods of array can be used on it

// If you want to have an array in the localstorage - You have to JSON.stringify(object) th array to convert it into a string and then you have to use JSON.parse(string) while retrieving it so that the String is converted into an array and than you can have the priviledge of accessing an array

//Clears entire local storage
// localStorage.clear()

// Clear a particular key value pair

localStorage.removeItem('name')
console.log(localStorage.getItem('name'))// It will return null 
console.log(localStorage.getItem('name2'))// It is unchanged


//Session Storage 

// sessionStorage.setItem('sessionname', 'harry')
// sessionStorage.setItem('sessionname2', 'Saksham')
// sessionStorage.setItem('sessionsabzi', JSON.stringify(inpArray))

// Agar localStorage ek baar set kardi to wo permanent rahegi even if you remove it from your code BUT seesion storage sirf temporary hoti h - Browser close kiya ya phir code hataya to wo storage bhi khatam ho jaeygi