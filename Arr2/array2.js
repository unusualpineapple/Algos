
// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().copy

function reverseit(arr){
    for (var i = 0; i < Math.floor(arr.length/2); i++){

        var temp1 = arr[i]
        var temp2 = arr[arr.length -1 - i]

        arr[i]= temp2
        arr[arr.length -1-i] = temp1
        
    }
    return arr
}

console.log(reverseit([1,2,3,4,5,6]))



// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
// change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.copy


//we want to rotate the array
//so all number move places what ever number is placed
// the shift can go left or right
//run it only once
// I have arrived
//welcome

function rotateArr(arr, moveBy) {
    var actualMovementsNeeded;
    if (moveBy > 0) {
        actualMovementsNeeded = moveBy % arr.length;
    } else {
        actualMovementsNeeded = Math.abs(moveBy) % arr.length;
    }
    if (moveBy > 0) {
        for (var i = 0; i < actualMovementsNeeded; i++) {
            var temp = arr[arr.length - 1];
            for (var k = arr.length - 2; k >= 0; k--) {
                arr[k+1] = arr[k];
            }
            arr[0] = temp; 
        }
    } else {
        for (var i = 0; i < actualMovementsNeeded; i++) {
            var temp = arr[0];
            for (var k = 1; k < arr.length; k++) {
                arr[k-1] = arr[k];
            }
            arr[arr.length - 1] = temp; 
            // console.log("Array after this rotation:",arr);
        }
    }
    return arr
}

console.log(rotateArr([1,2,3,4,5,6], -1))
// [6,1,2,3,4,5]
//     rotate()

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known
//  range. Given arr and values min and max, retain only the array values between min and max. 
//  Work in-place: return the array you are given, with values in original order. No built-in array functions.copy


// range = [1, 3,5,7,9,11,13,15]
function fR(arr, minval, maxval) {
    var temp = null
    for (var i =arr.length-1; i >= 0; i--){
        // console.log(i)
        // console.log(arr)
        if (arr[i] <= minval || arr[i] >= maxval){
            for (var j = i; j < arr.length -1; j++){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
            arr.length--;
            // console.log(arr)
            
        }
    }
    return arr
}
console.log(fR([1,2,3,4,5,6], 2, 5))


// console.log(fR([1,2,3,4,5,6,7,8], 2, 6))
// console.log(fR(range, 5,11))

// console.log("xxxxxxxxxxxxxxxxxx")

// Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array 
// containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. 
// Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

var bug = [1,'bug', 3]
var hourse = [5, 6, 'horseys']
function Trickydevil(arr1, arr2){
    var conclusion = []
    var count = 0
    // we want to loop through the arr1 and arr2
    //then append to the new array of the objects in each
    for (var i = 0; i <= arr1.length -1; i++){
        conclusion[count] = arr1[i];
        count++;
    }
    for (var m = 0; m <= arr2.length -1; m++){
        conclusion[count] = arr2[m];
        count++;
    }
    return conclusion
}
console.log(Trickydevil(bug, hourse))