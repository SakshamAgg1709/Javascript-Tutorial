console.log("This is TUT30")

//Button With id myBtn
let myBtn = document.getElementById("myBtn");

//Content with content id
let content = document.getElementById("content");

// function getData(){
//     console.log("Started GetData")
//     url = "saksham.txt"
//     //fetch url will run in background because it is asynchronous
//     fetch(url).then((response)=>{//response will again return a promise so there will be 2 times .then()
//         console.log("Inside First then")
//         return response.text();
//     }).then((data)=>{
//         console.log("Inside Second then")
//         console.log(data)
//     })
// }
function getData() {
    console.log("Started GetData")
    url = "https://api.github.com/users"
    //fetch url will run in background because it is asynchronous
    fetch(url).then((response) => {//response will again return a promise so there will be 2 times .then()
        console.log("Inside First then")
        return response.json();//See the difference between .json and .text - .json will retrun parsed data 
        // return response.text();
    }).then((data) => {
        console.log("Inside Second then")
        console.log(data)
    })
}
function postData() {
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"dsdsds232cxz","salary":"123","age":"23"}';
    params = {
        method :'post',
        headers: {
            'Content Type' : 'application/json',
            },
        body : data //In this case i have already taken data as string
        // body : JSON.stringify(data)//data is an object, but we have to post the data in string only.
    }
    fetch(url, params).then(response=> response.json())
    .then(data => console.log(data)//Using arro function
    )
}



console.log("Before running GetData")
postData()
console.log("After running GetData")
