//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch("https://www.artic.edu/iiif/2/129884/full/843,/0/default.jpg")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
    document.querySelector('h1').innerText = data.data.thumbnail.lqip
    document.querySelector('img').src = data.data.thumbnail.lqip
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
