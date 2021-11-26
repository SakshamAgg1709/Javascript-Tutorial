console.log("This is tut27")

//Pretend that this response is coming from the server
const students = [
    {
        name:"Harry",
        subject :"JavaScript"
    },
    {
        name : "Saksham",
        subject:"Python"
    }
]

// students.forEach(element, enrollStudents())// Like here for Each is itsellf a functions and also take function as an argument - It is called callback function
function enrollStudents(student, callback){
    setTimeout(function(){//It is also a callback function as it also take a function as an argument
        students.push(student);
        console.log("Student has been enrolled");
        callback();
        console.log(students);

    }, 1000);//By using setTimeout function we ensure that whatever is inside it, is running in the background which is again asynchronous - This whole code inside the setTimeout will be run after 5 sec 
}
function getStudents(){
    setTimeout(() => {
        let str = ""
        students.forEach(function (student) {
            str += `<li> ${student.name} </li>`
            document.getElementById("students").innerHTML = str
            console.log("Student has been fetched")
        })
    }, 7000);// imagine the server taking 3 sec to accept a request
}

let newStudent = {
    name:"Sunny",
    subject :"Machine Learning"
}
enrollStudents(newStudent, getStudents)
// getStudents()//Abse pehle ye hoga - aur phir 3 second baad naya student enroll hoga , which means hume sunny nhi show hoga 

//If we will use callback functions in enroll students we will be able to see newStudent in the list