console.log("We are at Tutorial 9")

/*Types of loops -
 - While
 - for
 - Do while
*/
// let a = 34 
// a += 1
// a ++ 
// console.log(a)
// for (let i = 0; i < 10; i++) {
//     console.log(i);

// }

// let j = 10
// while (j<10) {// Entry is blocked as j is not less than 10
//     console.log(j)
//     j += 1
// }

let k = 0;

do {
    // console.log(k+1)// It will run infinetly untill we don't add  k+=1
    if (k === 5) {
        k += 1;// 6 is not printed
        // break;// Loop hi khatam ho jaaeyga
        continue; // continue se aage jo bhi code h wo excute nhi hoga - dubara se wo upar chala jaaeyga
    }
    console.log(k)
    k += 1
} while (k < 10);

console.log("done")

//Differnce between Do-While and While is that in do -while it will run the code inside the do atleast once even if the condition in while is not met, it will run the code inside do and then check the condition of while


let arr = [1, 2, 3, 4, 5]

arr.forEach(function (element, array, index
) {
    console.log(element, array, index
    )
})

// Another way of doing th3e above thing - 

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}


let obj = {
    name: "Saksham",
    occupation: "Student",
    goal: "Entrepreneur"
}

for (let key in obj) {
    console.log(`${key.charAt(0).toUpperCase() + key.slice(1)} of the object is : ${obj[key]}`)
}

//Upar jo charAt, toUppercase and key.slice likha h wo maine khud type kiya h to make first letter of the key capital