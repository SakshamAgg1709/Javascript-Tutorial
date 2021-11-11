console.log('This is Exercise 2')
/*
You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away (blur). save the note into the local storage.

*/

// Create a new element
let divElem = document.createElement('div');

// Add text to that created element
let val = localStorage.getItem('text');// Abhi ye getitem h - Niche humne text ko setitem kiya h 
let text;
if (val==null){
 text = document.createTextNode('This is my element. click to edit it');
 console.log("null", val)
}
else{
    text = document.createTextNode(val);
    console.log(text)
    console.log("else", val)

}
divElem.appendChild(text);

// Give element id, style and class
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');

// Grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');


// Insert the element before element with id first
container.insertBefore(divElem, first);// Container ke andar First ke pehle divElem laga do

console.log(divElem, container, first)
let tarea2 = document.getElementsByClassName('textarea')
console.log(tarea2)
// add event listener to the divElem
divElem.addEventListener('click', function () {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    // Agar hum baar click karenge to baar ek naya textarea aa jaaeyga isliye hume if statement lagani padegi
    if(noTextAreas ==0){// Agar textarea class ka ek bhi element nhi h to hum bana denge
    let html = divElem.innerHTML;// This is the content written already in thediv i.e. - This is my element. click to edit it
    divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;// Ye sentence - This is my element. click to edit it - textarea ke andar store ho gaya but because it is a text area we can edit it 
    }
    //listen for the blur event on textarea - Clicking outside the div
    let textarea = document.getElementById('textarea');
    
    textarea.addEventListener('blur', function() {
        elem.innerHTML = textarea.value;// isse bahar clik hone par textarea hat jaaeyga kyuki innerHtml textarea se change hokar usme jo humne content daala wo ban gayi 
        localStorage.setItem('text', textarea.value);
    })
});

 console.log(elem)
 console.log(divElem)