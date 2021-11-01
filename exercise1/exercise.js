// Exercise 1
// You have to create a variable which is a string containing the text which is a link you are interested in. 

// You have to fetch all the links from a given page which contains this text

// codewithharry.com 
// javascript


let str = "js"

let links = document.links// It is a object but we want an array to apply foreach loop
// console.log(typeof(links))

let href;
htmlDoc = document.getElementById("links")
Array.from(links).forEach(function (element) {
    href = element.href;
    console.log(href)
    if (href.includes(str)){
        console.log(href)
        htmlDoc.innerHTML = href
    }
    
})
