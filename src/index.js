window.addEventListener('DOMContentLoaded', function(e){
    console.log('%c HI', 'color: firebrick')
    const div = document.getElementById("dog-image-container")
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const ul = document.getElementById("dog-breeds")

    fetch(imgUrl)
    .then(response => response.json())
    .then(json => addImage(json))

    function addImage(json) {
        const dogsArray = json.message
        dogsArray.forEach(dog => addHtmlDog(dog))
    }

    function addHtmlDog(dog) {
        let image = document.createElement('IMG')
        image.src = dog
        div.appendChild(image)
    }

    fetch(breedUrl)
    .then(response => response.json())
    .then(json => addBreed(json))

    function addBreed(json) {
        const breedsArray = Object.keys(json.message)
        breedsArray.forEach(breed => addHTMLBreed(breed))
    }

    function addHTMLBreed(breed) {
        let li = document.createElement('li')
        li.innerText = breed
        ul.append(li)
    }

    ul.addEventListener('click', function(event) {
        let li = event.target
        li.style.color = 'blue'
    })

    
})