// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, 
//and print the value to the console
let holiday = "independence"

holiday = "christmas"
holiday = holiday.toUpperCase()
print(holiday)


//Declare a variable, assign it a string, alert the last three characters in the string 
//(Use your google-fu and the MDN)

let someWord = ""
someWord = "Federico"

alert(someWord.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. 
//Alert the absolute value of the difference. Call the function.
function fiveNums (n1,n2,n3,n4,n5){
    let resta = 100 - n1 - n2 - n3 - n4 - n5
    if(resta > 0){
        alert(resta)
    }
    else if (resta < 0){
        alert(resta * -1)
    } 
}

fiveNums(4,5,6,7,6)
// Create a function that takes in 3 numbers. 
//Console log lowest and highest values. 
//Call the function.

function threeNums(n1,n2,n3){
    console.log(Math.min(n1,n2,n3))
    console.log(Math.max(n1,n2,n3))
}
threeNums(2,4,5)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. 
//Call the function.
function headsOrTails(){
    let result=Math.random()
    if(result < .5){
        return 'heads'
    }
    else{
        return 'tails'
    }

}

headsOrTails()

const headsOrTails = _ => Math.random() < .5 ? 'heads' : 'tails'


//console.log( headsOrTails() )
//*Loops*
//Create a function that takes in a number. 
//Console log the result of heads or tails using the previous function x times 
//where x is the number passed into the function. Call the function.

function flip(n){
    for(let i = 1; i<= n;i++){
        let result = headsOrTails()
        console.log(result)
    }

}