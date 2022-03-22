// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = "pasta"
food = "pizza"
alert(food)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let newVar = "string"
alert(newVar[1]) //alert(newVar.charAt(1)) funciona aswell


// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function take3 (n1, n2, n3){
    alert((n1/n2)*n3)
}
take3(3,4,5)
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function oneNbr(n1){
    console.log(Math.cbrt(n1).toFixed(4))//toFixed() es para achicar el numero que arroja a 4 decimales o los que quieras

}

oneNbr(3)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function summer(month){
    let monthLower = month.toLowerCase()
    if(monthLower == "diciembre" ||
       monthLower == "enero"     ||
       monthLower == "febrero"){
           alert("YAYYY")
       }
    else {
        alert('BOOOO')
    }
}
summer("diciembre")
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function flash(n1){
    for (i=1;i <= n1; i++)
    {
        if(n1 % 5 !== 0){
            console.log(i)
        }
        else {
            alert("please insert a number")
        }
    }
    
}
flash(15)