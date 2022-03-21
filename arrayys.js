//Create an array of movie titles. 
//Loop through the array and add each element to 
//the h2.
let movies = ["rocky", "coach carter", "interstellar"]

for (i=0; i<movies.length; i++){
    document.querySelector('h2').innerText += movies[i]

}
//Create an array of numbers. 
//Loop through the array and three to each 
//number and replace the old number.
let numbers = [1,2,3,4,5]

numbers.forEach((item,i) => {
    numbers[i] = item + 3
})

//Find the average of all the numbers from question three
let sum = 0
for (let i=0; i<numbers.length; i++){
    sum += numbers[i]
}
console.log(sum/numbers.length)