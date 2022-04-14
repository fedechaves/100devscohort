//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch("https://animechan.vercel.app/api/random")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
    document.querySelector('h1').innerText = data.anime
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
