console.log("Welcome to TUT17 - Events & Events Object")

document.getElementById('heading').addEventListener('mouseover',
 function(e) {// similarly we can add click, dbclick event 
    console.log("You have clicked the heading")
    // location.href = "https://www.facebook.com"
    console.log(e)//e is the event object - a great object to play with - 
    variable = e.target;// e.target is the HTML element on with the event is added
    variable = e.target.className;
    variable = e.target.classList;
    variable = e.target.id;
    variable = Array.from(e.target.classList)// I have made a array of the classes of the element 
    console.log(variable)

    position = e.offsetX// The x-coordinate of the point on which youb have clicked with respect to the element 
    position = e.offsetY// The y-coordinate of the point on which youb have clicked with respect to the element
    position = e.clientX // The x-coordinate of the point on which youb have clicked with respect to the browser window
    position = e.clientY  // The y-coordinate of the point on which youb have clicked with respect to the  browser window
    console.log(position)

})