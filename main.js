//--- Easy
//create a variable and assign it a number
let firstNumber = 9

//minus 10 from that number
firstNumber -= 10
//print that number to the console
console.log(firstNumber)
//--- Medium
//create a variable that holds a value from the input
let secondNumber = document.querySelector('#danceDanceRevolution').value
//add 25 to that number
secondNumber += 20
//alert that number
alert(secondNumber)
//--- Hard
//create a variable that holds the h1
const thirdNumber = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
thirdNumber.addEventListener('click', sum)

function sum(){
    console.log(firstNumber+ Number(secondNumber) )
}