function logMessage() {
    console.log("Hello World")
}

logMessage()

function addTwoNums(num1, num2) {
    let sum = sum1 + sum2
    return sum
}

let returnedValue = addTwoNums(1,2)
console.log(returnedValue)

//create a function that logs all the  key/value pairs of a given object

//create a function that accepts an object
function logKeyValuePairs(obj) {
    //loop through the object
    for (let key in obj){
        console.log(obj[key])

    }
}
//log each key,value pairs


function foo() {
    let bar = "Hello"
}

console.log(bar)


//create a funtion that gives the average of the array given
function average(number){
    let sum = 0
    for(let i = 0, i < number.length; i++ ){
        sum += number[i];
    }
    return sum / number.length
}
console.log(average([1,2,3,4,5,6]))