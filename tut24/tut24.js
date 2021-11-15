console.log("Welcome to Tut24")

class Employee {
    constructor(givenName, givenSalary, givenExperience) {//Contructor is a function which is run whenever we make a object 
        this.name = givenName
        this.salary =givenSalary
        this.experience = givenExperience
    }

    slogan(){
        return `I am ${this.name} and this company is the Best`
    }

    joiningArea(){
        return `You have joined this company in ${2021 - this.experience}`
    }

    static add(a,b){//We can use this method without making objects like saksham , harry etc.
        return a+b 
    }
}

let saksham = new Employee("Saksham", 100000 , 4)
console.log(saksham)
console.log(saksham.slogan())
console.log(saksham.joiningArea())
// console.log(saksham.add(34 , 22))//This is invalid - not a function
console.log(Employee.add(34 , 22))

//Inhertance

class Programmer extends Employee{
    constructor(givenName, givenSalary, givenExperience, givenLanguage, givenGithub){
        //Contructor is a function which is run whenever we make a object - and whenever an object is made with the contructor the super method will call the contructor of the inherited class
        super(givenName, givenSalary, givenExperience);
        this.language= givenLanguage;
        this.github = givenGithub
    }

    favouriteLang(){
        if (this.language == 'python') {
            return 'Python'
        } else {
            return 'Javascript'
        }
    }

    static multiply(a,b){
        //we use static when we don't need to use 'this' or 'this.name' etc. also 'this' is not applicable in static methods
        return a*b
    }
}

let harry = new Programmer('Harry Bhai' , 10000 , 3 ,'Javascript', 'Harry433')

console.log(harry)
console.log(harry.favouriteLang())
console.log(Programmer.multiply(2,5))