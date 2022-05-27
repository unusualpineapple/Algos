// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

function divisors(integer) {
    if (integer > 1){
    let i = 2
    let newarr = []
    while (i < integer){
        if (integer%i == 0){
            newarr.push(i)
        }
        i++
        }
        if (newarr.length < 2){
            return (integer + " is prime")
        }
        return newarr
    }
    
};

console.log(divisors(1137))
  // first we want to check if the int is greater than 1
  // then we want to find the divisible numbers of the object
  // return the list of divisible numbers (excluding 1 and the number itself) in order of smallest to biggest
  // if number is prime say number is prime




//   Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//   It should remove all values from list a, which are present in list b keeping their order.
//   arrayDiff([1,2],[1]) == [2]
//   If a value is present in b, all of its occurrences must be removed from the other:
//   arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    for (let i = 0; i < b.length; i++){
    for (let j = a.length-1; j >= 0; j--){
    if (b[i] == a[j]){
        a.splice(j,1)
        }
    }
    }

        return a
}

  //in the given array we want to select the given number and remove from array
  // once selected number is found in array delete the number from the array
  // return the original array