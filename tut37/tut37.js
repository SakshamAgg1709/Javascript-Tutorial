console.log('This is tut37');



function fruitsIterator(values){
    let nextIndex = 0;

    //We will return an object

    return {
        next : function () {
            if (nextIndex < values.length) {
                //We will return this object
                return {
                    value : values[nextIndex++],    
                    done:false
                }
            
                
            } else {
                //We will return below object with only done 
                return {
                    done:true
                }
            }
        }
    }
}

const myArr = ["Apple", "Orange", "Bhindi", "Tomato"]
console.log("My array is ", myArr )


// Using the iterator
const fruits = fruitsIterator(myArr);
console.log(fruits);

console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)