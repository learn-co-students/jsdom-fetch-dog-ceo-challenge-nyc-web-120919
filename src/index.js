const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let allBreeds;

function fetchImages() {
    fetch(imgUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(imagesJSON) {
            images = imagesJSON['message'];
            let div = document.getElementById('dog-image-container');
            images.forEach(function(image) {
                const img = document.createElement('img');
                img.className = 'dogs';
                img.src = image;
            
                div.appendChild(img);
            });
    });
}

function fetchBreeds() {
    fetch(breedUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(breedsJSON){
        //console.log(breedsJSON)
        allBreeds = Object.keys(breedsJSON['message']);
        // this returned a hash so we used Object.keys to retrieve the keys
        let ul = document.getElementById('dog-breeds');
        allBreeds.forEach(function(breed) {
            const li = document.createElement('li');
            li.innerHTML = breed
            ul.appendChild(li);
        });
    });
}

function addUlListener() {
    let ul = document.getElementById('dog-breeds');
    ul.addEventListener('click', function(event) {
        //console.log(event.target)
        event.target.style.color="red"
    })
}

function selectListener() {
    let select = document.getElementById('breed-dropdown');
    select.addEventListener('change', function(event) {
       // console.log(select.value)
        
        let ul = document.getElementById('dog-breeds');
        ul.innerHTML="";

        let filteredBreeds = allBreeds.filter(function(breed) {
            return select.value === breed[0]
                //  ^ from line 50, we are retrieving from the breed dropdown 
                // and taking the 'value' which is the letter
                // we are comparing to see if user selected 
                // any letter which is the first index of [0]
        });
        filteredBreeds.forEach(function(breed) {
            // taking the filtered breed list
            const li = document.createElement('li');
            //create a new li to append it to the ul
            li.innerHTML = breed
            ul.appendChild(li);
        });
    })
}



window.addEventListener("DOMContentLoaded", function() {
    fetchImages();
    fetchBreeds();
    addUlListener();
    selectListener();
});



//challenge 3
//create event listener for when breeds are all rendered in ul
// create event listener on click on dog breeds, font color changes on an li

//challenge 4
// once all dog breeds are loaded, create a filter with a particular letter using dropdown
//filter method on li?