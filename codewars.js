// //Arrays

// //Create and array of numbers. Sum all of the numbers. Alert the sum.
// let arr = [3,5,5]



// alert(arr.reduce((acc,c) => acc + c, 0))

// //Create a function that takes in an array of numbers
// //Return a new array of numbers that is every original number squared

// let newArr = arr => arr.map(num => num**2)

// //Create a function that takes string
// //Print the reverse of that string to the console

// let unoReverse = str => console.log(str.split('').reverse().join(''))

//Create a function that takes in a string
//Alert if the string is a palindrome or not
//const palindromeCheck = str => alert( str === str.split('').reverse().join('') )

//palindromeCheck('racecar')


//let filter_list = l => l.filter(str => typeof str != 'string')

//console.log(filter_list([1,2,'a','b']))

// const isIsogram = str => str.split("").length() === str.split("").from(new Set(str.split("")).length()) ? true : false

// console.log(isIsogram("federico"))

// alert(str.split("federico").length())

// const isIsogram = str => !str.match(/(.).*\1/i);

// alert(isIsogram("feda"))

let str = "tereret"
let newStr = console.log(str.match(/(.).*\1/i))