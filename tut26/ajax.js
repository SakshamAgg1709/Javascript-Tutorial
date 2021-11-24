console.log("Ajax Tutorial")

let fetchBtn = document.getElementById('fetchBtn')
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler(){
    console.log("You have clicked the fetchbtn")
    //Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //Open the object
    //GET REQUEST
    xhr.open('GET', 'harry.txt', true)// true means it should be non-blocking that is asychronnous, false would mean it will be a blocking call
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', false)// if their would be false it would throw a warning that ther user might have to wait for long for the response of the server so we should use asynchronous call and done will be printed after the fetched data

    //POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true)
    xhr.getResponseHeader('Content-type', 'application/json')

    //What to do on progress - OPTIONAL
    xhr.onprogress = function(){
        //It is mainly for spinners and loaders while the request is in progress    
        console.log("On Progress")
    }

    xhr.onreadystatechange = function(){//It is Optional
        //There are 5 values of readyState which are 0,1,2,3,4 each of them has a meaning which you can google - here we will get different values in different stages i.e. progress, send,onload

        /*readyState - Holds the status of the XMLHttpRequest.
            0: request not initialized
            1: server connection established
            2: request received
            3: processing request
            4: request finished and response is ready
        */
        console.log("Ready state is", xhr.readyState)
    }

    //WHat to do when response is ready
    xhr.onload = function(){
        if (this.status === 200) {//200 is the response code of http which means response ok
            
            console.log(this.responseText)
        }else{
            console.log("Some error occured")
        }
    }

    //send the request
    params = `{"name":"test34ad545","salary":"123","age":"23"}`;
    xhr.send(params);// program will fetch data without reloding the page
    console.log("Done")//It will be printed before On Progress becuase asyn is true so it is a non-blocking call
}


let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");
    
}
