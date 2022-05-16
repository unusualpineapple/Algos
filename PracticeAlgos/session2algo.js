// 1. Biggie Size

// Given an array, write a function that changes all
// positive numbers in the array to “big”. Example:
// makeItBig([-1,3,5,-5]) returns that same
// array, changed to [-1,"big","big",-5].
function big(array){
    for (let i = 0; i<array.length; i++)
}

function lengthNested(arr){
    count = 0
    for (i=0; i<arr.length; i++){
        if (arr[i].length === 0){
            continue

        }
        else if (arr[i].length > 1){
            for (y=0; y < arr[i].length; y++)
            count++
        }
        else {
            count++
        }
    }
    return console.log(count)
}

lengthNested([4,[],8,[9,6,3],7])



var arr2 = [1,[1,2,3],5,[],6]

const howmany = arr => {
    var count = 0
    for (var i =0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            count += arr[i].length
        }
        else{

        }
    }
}

// 2. Length of Nested Array

// Given an array that could contain indexes of arrays, 
// determine the amount of numbers in all indexes. Example: 
// lengthNested([4,[],8,[9,6,3],7]) returns 6.
// Do not consider there being a third level of nesting 
// (something such as [11,[[6]]]).

// function nested(arr){
//     var count =0
//     for(var i=0; i<arr.length; i++){
//         for (var j=0; j<arr[i].length; j++){
//             if (arr[i]) == arr[j]){
//                 count = count +1;
//             }
//             return count
//         }
//     }
// }
