//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch("http://api.citybik.es/v2/networks/velobike-moscow")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
    document.querySelector('h2').innerText = data.network.stations[0].free_bikes
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
