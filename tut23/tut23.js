console.log("This is tut23")


const proto = {//Proto is an object
    slogan: function () {
        return "this company is the best"
    }
    ,
    changeName: function(newName) {
        this.name = newName
    }
}

//This creates saksham object
// // const saksham = Object.create(proto) // We use Object.create only when we use a object literal , we use new for Contructors
// saksham.name = "Saksham"
// saksham.role = "Developer"
// saksham.changeName("Saksham2")
// console.log(saksham)

//Another syntax of above code

//This also create saksham object
const saksham2 = Object.create(proto, {
    name :{value :"Saksham" , writable :true},//writable true is for enabling the changeName function but in above code it is not necessary
    role :{value :"Developer"}
})

saksham2.changeName("Saksham2")
// console.log(saksham2)

//Employee Contructor

function Employee(name, salary, experience) {// It is an contructor
    this.name = name,
    this.salary = salary,
    this.experience = experience
    
}

//Slogan

Employee.prototype.slogan= function () {// Making functions in the protoype of employee which we can inherit to Porgrammer
    return `this company is the best , Regards ${this.name}`
}

//Creating object from the constructor
let saksham = new Employee("Saksham" , 10000, 2)
console.log(saksham)
console.log(saksham.slogan())

//Programmer

function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary,experience)

    this.language = language
}

//Inherit the Prototype of Employee
Programmer.prototype = Object.create(Employee.prototype);

//Manually set the constructor

Programmer.prototype.constructor = Programmer 

let harry = new Programmer("HArry" , 1000, 3, ["Python", "Javascript"])
console.log(harry)// No contructoris showing as well as we can't use slogan function here untill we inherit the prototype of employee which already has slogan function
console.log(harry.slogan())



//QUIZ

//Flour contructor
function Flour(type , salt) {   
    this.type = type
    this.salt = salt
}

// Cook Function 
Flour.prototype.cook = function () {
    return `I am making cake from ${this.type}`
}

// Create an object from this constructor now
let maida = new Flour("Maida" , "high salt")
console.log(maida)
console.log(maida.cook())

// Cake

function Cake(type ,salt , sweetener , cream, cakeName) {
    Flour.call(this , type , salt)
    this.sweetener = sweetener
    this.cream = cream
    this.name = cakeName
    this.cookCake = function () {
        return `I am making a ${this.name} with ${this.salt} , ${this.sweetener} , ${this.cream}`
    }
}

// Inherit the prototype
Cake.prototype = Object.create(Flour.prototype)

// Manually set the constructor
Cake.prototype.constructor= Cake;

let blackForest = new Cake("Maida", "Low Salt" , ["Refined Sugar", "Honey"] , "White Cream" , "Black Forest")
console.log(blackForest)
console.log(blackForest.cookCake())
console.log(blackForest.cook())