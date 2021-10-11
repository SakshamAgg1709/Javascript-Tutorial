console.log("Welcome to Tut12 ")
 a = document;
a = document.all
a = document.body

a = document.forms[0]// You will get the first form  
Array.from(a).forEach(function (element){
    console.log(element)
} )

a = document.links[0].href
console.log(a)

//Quiz

let c=document.images;
Array.from(c).forEach(function(element){
console.log(element);
});

let b=document.script;
Array.from(b).forEach(function(element){
console.log(element);
})