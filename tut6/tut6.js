console.log("Welcome to Tutorial 6")
const name = "Saksham";
const greeting = "Good Morning";
console.log(greeting + name);
console.log(greeting + ' ' + name);

let html;
// html = "<div>
// <p>This is a paragraph</p>
// </div>
// " This is not valid 
html = "<h1>This is a heading" + "<p>This is a paragraph</p>"
// html = html.concat('this','that')//You cann add as much strings as you want at the end of the sting 
// console.log(html)
// console.log(html.length)//Start with 0 only
// console.log(html.toLocaleLowerCase())
// console.log(html.toLocaleUpperCase())
// console.log(html)//It doesn't change original string

//INDEXING

console.log(html[0])
console.log(html[2])

//Other Funcitons

console.log(html.indexOf('h1'))
console.log(html.indexOf('dslfjsd'))// It will give -1 as it is not in string html
console.log(html.indexOf('i')) // IT will give first occurence only
console.log(html.lastIndexOf('i'))// It gives index of last occurrence of i 
console.log(html.charAt(3))
console.log(html.endsWith(">"))//true - Yes, it ends with ">"
console.log(html.endsWith("44"))//false - No, it doesn't end with 44"
console.log(html.includes("heading"))//true - Yes, it includes  heading"
console.log(html.substring(1, 5)) // It will give 1,2,3,4 - not 5
console.log(html.slice(0, 5))// Return characters from 0 to 4 index
console.log(html.slice(-4))// Return LAst 4 character
console.log(html.split(" "))// Return a array with 7 elements
console.log(html.split(">"))// Return a array with 4 elements

console.log(html.replace('This', 'it'))// Replaces only first occurence of this not all


let fruit1 = 'Orange';
let fruit2 = 'Banana';
let fruit3 = 'Mango';
let myHtml = `Hello ${name} 
            <h1> This is a heading </h1>
            <p>You like ${fruit1}, ${fruit2} and ${fruit3}
            `;
document.body.innerHTML = myHtml