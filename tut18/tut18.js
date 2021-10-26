console.log("This is tut18")

// let btn  = document.getElementById('btn')

// btn.addEventListener('click', func1);
// btn.addEventListener('dblclick', func2);
// // btn.addEventListener('mousedown', func3);

// function func1(e) {
//     console.log("Thanks",e)
//     //Thanks print hone ke baad form submit hota h, page change hota h aur wo Thanks hat jaata h 
//     e.preventDefault()
// }
// function func2(e) {
//     console.log("Thanks its a double click",e)
//     //Thanks print hone ke baad form submit hota h, page change hota h aur wo Thanks hat jaata h 
//     e.preventDefault()
// }
// // function func3(e) {
//     console.log("Thanks its a mousedown",e)
//     //Thanks print hone ke baad form submit hota h, page change hota h aur wo Thanks hat jaata h 
//     e.preventDefault()
// }

//Other Events

// document.querySelector('.no').addEventListener('mouseenter'
// , function () {
//     console.log("You entererd no")
// })
// document.querySelector('.no').addEventListener('mouseleave'
// , function () {
//     console.log("You exited no")
// })

//Interesting Program

document.querySelector('.container').addEventListener('mousemove'
, function (e) {
    console.log(e.offsetX , e.offsetY)
    document.body.style.backgroundColor = `rgb(${e.offsetX} , ${e.offsetY},134)`// Use of backticks is important
    console.log("You triggered mousemove")
})

