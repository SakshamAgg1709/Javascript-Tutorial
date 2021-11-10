console.log("Welcome to tut21")
console.log("Object Literals, Constructors and Object Oriented JavaScript")

let car = {//It is a Object Literal different from Constructors
    name:"Maruti 800",
    topSpeed : 200,
    run :function(){
        console.log("car is running");
    }
}
console.log(car)
console.log(car.run())// It will print car is running as well as undefined because there is nothing in return statement
car.run()// It will not print undefined

//We have already seen constructors like this
// new Date();

//Creating a constructor of cars

function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`)
    }
    
    this.analyze = function () {
        console.log(`This car is slower by ${200-this.topSpeed}KmHr than Ferrari`)
    }
}

car1 = new GeneralCar('Audi' , 250)
car2 = new GeneralCar('Maruti Alto' , 100)
console.log(car1)
console.log(car2.run())
console.log(car2.analyze())
console.log(car1.analyze())//this function will also print undefined due to the absence of return statement
