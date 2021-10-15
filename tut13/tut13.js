console.log("Welcome to Tut 13")

// Element Selectors - 
// 1. Single element selector
// 2. multi element selector


// Singe Element Selector
let element = document.getElementById("myfirst")
// element = element.className// It will tell the class of element .ie. child
// element = element.childNodes//It will show a Text node i.e. child1 - The onl text between this div
// element = element.parentNode// It will tell the parent element of div that is div.container
element.style.color = "white"
element.style.background= "black"
element.innerText= "Chile 1 edited by javascript - innertext"
element.innerHTML= `<b>Chile 1 edited by javascript - innertext</b>`

console.log(element)

let sel = document.querySelector('.this')// It iwll give ul having the class - this
console.log(sel)

let btag = document.querySelector('b')// It will give the first element having <b> tag
console.log(btag)

let htag = document.querySelector('h1')// It will give the first element having <h1> tag
console.log(htag)

let divtag = document.querySelector('div')// It will give the first element having <div> tag
console.log(divtag) 

divtag.style.color = "green"

//Multi Element Selctor


let elems = document.getElementsByClassName('child')
console.log(elems)//There are 4 elements having class child
console.log(elems[0])//It will give the first element having class child - Similarly we can add 1,2,3

elems = document.getElementsByClassName('container')
console.log(elems[0].getElementsByClassName('child'))// First container class ke element ke andar jitne hi child class wale element h wo show honge

elems= document.getElementsByTagName('div')
console.log(elems)// You will get all the element of having div tag

// YOU can also iterate the multi element selector

Array.from(elems).forEach(element => {// ForEach is mainly for arrays so we hve to use Array.from( )
    console.log(element)
    element.style.background = '#046c72'
});

//You can also use tradtional for loop 

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element)
    element.style.background = 'yellow'

}