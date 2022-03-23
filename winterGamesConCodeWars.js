//Create a function that takes in an array of numbers.
//Return a new array containing every even number from 
//the original array (do not use map or filter)

function aOfNums(array){
    let = evens = []

    nums.forEach( n => {
        if(n % 2 == 0){
            evens.push(n)
        }
    })
    return evens

}
console.log(aOfNums([1,2,3,4,5,6]))


function lovefunc(flower1, flower2){
    if(flower1 % 2 === 0 &&
       flower2 % 2 !== 0){
        return true  
    }
     if(flower1 % 2 !== 0 &&
        flower2 % 2 === 0){
        return true  
    }
    else if(flower1 % 2 !== 0 &&
            flower2 % 2 !== 0){
              return false}
    else if(flower1 === 0 &&
            flower2 === 0){
              return false}
    else if(flower1 === 0 &&
            flower2 % 2 !== 0){
              return true}
     else if(flower1 === 0 &&
             flower2 === 0){
              return false}
    // moment of truth
  }