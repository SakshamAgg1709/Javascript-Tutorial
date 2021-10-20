console.log("Welcome to Tut 16")

//Creating a element
let element = document.createElement('li')// li is the html tag 
// console.log(element)// It will show <li></li>
let text = document.createTextNode("This is a Text node created by Javascript")
element.className = "li1"
element.id = "createdli1"
element.setAttribute('title', 'mytitle')
// element.innerText = "Hello This is created by Javascript"
element.innerHTML = `<b>Hello This is created by Javascript</b>`
element.appendChild(text)// We can use this also 
console.log(element)

//Adding the element in the DOM
let ul = document.querySelector('ul.this')
// console.log(ul)
ul.appendChild(element)

//Replacing the Element
let elem2 = document.createElement('h3')
elem2.id = "elem2"
elem2.className = "elem2"
let tnode = document.createTextNode("This is second Text Node for elem2")
elem2.appendChild(tnode)

// I have made a elemet but not added in the DOM , NOW i want to replace element with elem2

element.replaceWith(elem2)
console.log(element)

let myul = document.getElementById('myul')
myul.replaceChild(element, document.getElementById('fli'))
//Myul ke andar jo fli id wala li tha usko maine element naam ke li se replace kar diya
// If document.getElementById('fli') will not be one of the child of myul - you will get an error 

myul.removeChild(document.getElementById("reli"))// Maine of my dreams wali li ko remove kar diya

let pr = elem2.getAttribute("id")
pr = elem2.hasAttribute("href")//It will return false because elem2 has no attribute as href
elem2.removeAttribute("id")// ID ko hi remove kar diya 
elem2.setAttribute('title', "myelem2Title")
console.log(elem2, pr)// elem2 ki id elem2 h 

//Quick Quiz

let headElem = document.createElement('h1')
headElem.innerHTML = `<a href = "www.codewithharry.com">Go To CodeWithHarry.com</a>`
headElem.setAttribute("href","www.codewithharry.com")

document.getElementById("myfirst").appendChild(headElem)