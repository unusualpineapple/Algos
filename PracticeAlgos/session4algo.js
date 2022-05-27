// Array: Remove Negatives
// Implement removeNegatives() that accepts an array, removes negative values, and returns the
// same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.
// You can remove the last element of an array WITHOUT .pop()!

// we want to give an array
// then we look at each number given
// then determine if it is a negative or not
// if negative move to the right 
// drop the last number from the arr
// if its not negative pass by
// then return the list with no negatives

function removeNegatives(arr){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            var negs = 0
            for (let y = i; y < arr.length; y++){
                var temp = arr[i]
                arr[y] = arr[i+1]
                temp = arr[y]
                negs++
            }
        }else{
            continue
        }
    }
    return arr
}
console.log(removeNegatives([4,76,-94,-74, 12, 100]))
// return 4,76,12,100

function removeNegatives(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            continue
        }
        // if negative move over 1
        for (var y = i; y < arr.length -1; y++){
            
            var temp = arr[y]
            arr[y] = arr[y+1]
            arr[y+1] = temp
        }
        arr.length--;
        i--
        console.log(arr)
    }
    return arr
}

console.log(removeNegatives([1,2,-5,-7,12,-15,-21,43]))
// iterate array from right1.	Iterate array from right until i < 0
// 2.	If check
// a.	If positive then skip
// b.	If negative then:
// i.	Swap value with value to the right until arr[i] = arr.len-1
// ii.	Decrement array length (arr.len--)
// 3.	Return arr
