// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let drinky = "coca-cola"
drinky = drinky.trim()

console.log(drinky)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multiWords = "some apple are rotten"

multiWords.includes("apple") // first method

console.log(str.search(multiWords))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rps(){
    if(Math.random() > 0.5 && Math.random() < 0.75){
        return "rock"
    }
    else if (Math.random() < 0.5 ){
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
//Create a function that takes an array of choices. 
//Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function play(arr){
    arr.forEach(choice => checkwin(choice)  );
}

play( ['rock', 'paper'])