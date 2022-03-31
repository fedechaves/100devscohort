// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
const phrase = "is this a question?"

alert(phrase.endsWith('?'))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let webdev = 'jr. dev'

// if(webdev === 'jr. dev'){
//     webdev = "software engineer"
// }
// console.log(webdev)
console.log(str.replaceAll('jr. dev', 'software engineering'))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rps(){
    if(Math.random() < 0.33){
        return "rock"
    }
    else if (Math.random() < 0.66 ){
        return "paper"
    }
    else{
        return "scissors"
    }
}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkwin(playerChoice){
    let botChoice = rps()
    if ((playerChoice === 'rock' && botChoice === 'scissors') ||
        (playerChoice === 'paper'&& botChoice === 'rock') ||
        (playerChoice === 'scissors'&& botChoice === 'paper')){
            console.log('you win')
        }
    else if (playerChoice === botChoice){
        console.log('you tied')
    }
    else {
        console.log('you loser')
    }
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function play(arr){
    arr.forEach(choice => checkwin(choice)  );
}

play( ['rock', 'paper'])