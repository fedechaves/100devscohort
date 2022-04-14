//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = `localhost:5000/v1/apod?api_key=DEMO_KEY&date=2014-10-01&concept_tags=True`

document.querySelector('button').addEventListener('click',getPicture)

function getPicture(){
    let fecha = document.querySelector('input').value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=1CfnMM2QIaXU8tfSPFVysc5Fk9BYKoJDvg0KZD00&date=${fecha}&concept_tags=True`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data)
    document.querySelector('img').src = data.url
    document.querySelector('h2').innerText = data.title
    document.querySelector('h3').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}


//}

