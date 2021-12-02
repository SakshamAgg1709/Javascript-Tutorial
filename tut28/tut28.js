console.log("Welcome to TUT28 - Promises")

// Promise: Best video on promises
// -resolve
// -reject
// -pending

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('Function: Your promise has been resolved')
                resolve();//resolve function is the function insde .then()
            }
            else {
                console.log('Function: Your promise has not been resolved')
                reject('Sorry not fulfilled');//reject function is the function insde .catch()
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Harry: Thanks for resolving")
}).catch(function(error){
    console.log("Harry: Very bad bro. Reason: " + error)
})