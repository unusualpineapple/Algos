// For [1,3,5,7,9,13], print values that are greater than its 2nd value. 
// Return how many values this is.

function countthat(arr){

    var howmany = arr => {
        var count = 0
        for (var i =0; i<arr.length; i++){
            if(Array.isArray(arr[i])){
                count += arr[i].length
            }
            else{
    
            }
        }
        return howmany
    }
}

console.log(countthat([1,3,5,7,9,13]))