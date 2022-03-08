// *Variables*
// Create a variable and console log the value
let fifavar = 900
console.log(fifavar)
// Create a variable, add 10 to it, and alert the value
let fibavar = 9
fibavar += 10
alert(fibavar)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subs(n1,n2,n3,n4){
    let diff = n1-n2-n3-n4
    alert(diff)

}

subs(5,4,5,4)
// Create a function that divides one number by another and returns the remainder
function divi(n1,n2){
    return n1 % n2

}
alert(divi(6,3))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function condit(n1,n2){
    const suma = n1 +n2
    if (suma > 50){
        alert("jumanji!!")
    }

}
console.log(condit(50,5))
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function prod(n1,n2,n3){
    const multiplo = n1*n2*n3
    if (multiplo % 3 == 0){
        alert('Zebra!!')
    }
}
prod(3,4,10)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function printin(word, n1){
    for(i=1; i <= n1; i++){
        console.log(word)
    }
}

printin('stop', 7)