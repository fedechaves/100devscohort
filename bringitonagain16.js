// *Variables*
// Declare a variable, assign it a value, and alert the value

let aval = 3
alert(aval)

// Create a variable, divide it by 10, and console log the value
let aval1 = 10
console.log(aval1/10)
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multi(n1,n2,n3){
    const mult = n1*n2*n3
    alert(mult)
}
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function cuatro(n1,n2,n3,n4){
    const sum = n1+n2
    console.log(sum - n3 - n4)
}
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. 
//If the value is greater then 25, console log "WE HAVE A WINNNA"
function winna(n1,n2,n3){
    let sum = (100 + n1 - n2)/n3
    if (sum >= 25) {
        console.log('WE HAVE A WINNA!')
    }
}
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". 
//Handle capitilization and if the user does not enter a day of the week alert "Try again!"
function week(day){
    if(day.tolower() === "lunes" || 
       day.tolower() === "martes" ||
       day.tolower() === "miercoles" ||
       day.tolower() === "jueves" ||
       day.tolower() === "viernes") {
           alert('week day :(')
       }
    else if (day.tolower() === "sabado" ||
             day.tolower() === "domingo"){
                 alert('Weekend!!!')            
                }
    else{
        alert('try again!')
    }
}
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function loop(n1){
    for(i=1; i <= n1; i += 3){
        console.log(i)
    }
}
loop(15)