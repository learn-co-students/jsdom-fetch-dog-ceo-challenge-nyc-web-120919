document.addEventListener('DOMContentLoaded',() => 
{
    startUp()
    activateButton()
})

console.log('%c HI', 'color: firebrick')
function startUp(){
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then((response) => { return response.json() })
    .then((urls) => { // console.log(response) = > urls 
        urls.message.forEach((url) => { // pausebreak on googlechrome, urls has message & inside it has urls
            callDogs(url)
        })
    })
}
function callDogs(imgUrl) {
    const dogContainer = document.getElementById("dog-image-container")
    
    let imgDog = document.createElement('img')
    imgDog.src = imgUrl
    // console.log(imgDog)
    // console.log(dogContainer)
    dogContainer.appendChild(imgDog)
    
    breedGetter()
    
}
function breedGetter(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => {
        return response.json()
        
    })
    .then((urls) => { 
        Object.keys(urls.message).forEach((name) => {
            callBreed(name)
        })
    })
}

function activateButton(){
    option = document.getElementById('breed-dropdown')
    option.addEventListener('change', filterByBreedLetter)
}

function filterByBreedLetter(){
    console.log(event)
    dogBreed = document.getElementById('dog-breeds')
    console.log(dogBreed)
    
    const filteredNames = Array.from(dogBreed.getElementsByTagName('li')).filter(function(word) {
        return word.innerText[0] === `${event.srcElement.value}`;
    })
    console.dir(filteredNames)
    dogBreed.innerHTML = "";
    filteredNames.forEach((li) => {
        dogBreed.appendChild(li)
    })
}

function callBreed(name){
    const dogBreed = document.getElementById("dog-breeds")
    const li = document.createElement('li')
    li.innerHTML = name
    li.addEventListener("click", styling)
    dogBreed.appendChild(li)
}

function styling(){
    event.target.style.color = 'red'
    console.log(event)
}
