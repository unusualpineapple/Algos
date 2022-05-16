let newArray = ['hello', 'world', 42, false]

let itemCounter = 0
for(let i = 0; i < newArray.length; i++) {
    itemCounter += 1
}

let counter = 0
while(counter != newArray.length) {
    console.log(newArray[counter])
    counter++

}