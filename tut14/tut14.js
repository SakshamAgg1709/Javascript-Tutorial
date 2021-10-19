console.log("welcome to Tut 14")

let cont = document.querySelector('.no')// If there are more than 1 element with class no, it will select only the first element
cont = document.querySelector('.container')
// console.log(cont)
console.log(cont.childNodes)// It will show you all the the elements inside container in a chronological order
// childNodes sabko consider karega  - text, comments, newline (NewLIne is also reffered as text in childNodes)
// BUt if we don't want these text, comments or newLine to be considered , we can use .children

console.log(cont.children)// It will show only html elements like h1, div, ul, form etc.
//Most of the cases mein children hi use hota h 

// If you will choose chidlnodes, length will chnage even due to a single new line or a comment

let nodeName = cont.childNodes[3].nodeName
let nodeType = cont.childNodes[3].nodeType
console.log(nodeName)
console.log(nodeType) // It will show 1 - below are the meaing of these numeric values
/* Node Types :
1 - Element
2 - Attribute
3 - Text Node
8 - Comment
9 - document
10 - docType
*/

let container = document.querySelector('.container')// we can also write - div.container - . is important

console.log(container.children)
console.log(container.children[1].children)// Similarly we can add children of children 
console.log(container.firstChild)// It will show text as it considers childNodes - in child nodes , text is the first element (Remember - Text is the NewLine space between div.container and h1)

// BUT if we want HTML elements not texts or comments we will use - 
console.log(container.firstElementChild)// First Html element inside container
console.log(container.lastElementChild)// last Html element inside container i.e. form

console.log(container.childElementCount)// There are 6 child element inside the container - not including texts or comments

console.log(container.firstElementChild.parentNode)//It will tell container

console.log(container.firstElementChild.nextSibling)//nextSibling shows the next element be it text, comment or any other element - It will show text which is the new line after h1
// If we want HTML element only we will use :

console.log(container.firstElementChild.nextElementSibling)// It shows div.myfirst that is the first element just after h1