document.addEventListener('DOMContentLoaded', function() {
    fetchImage()
    loadBreedOptions()
    function fetchImage() {
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
        fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(function(response) {
            return response.json();
        }).then(function(json) { 
            renderImage(json.message)
    });
    }
    
    function renderImage(json) {
        const div = document.getElementById("dog-image-container");
        json.forEach(image => {
            const img = document.createElement("img");
            img.src = image
            div.appendChild(img)
        });
    }
    
    function loadBreedOptions() {
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'
        fetch(breedUrl)
            .then(res => res.json())
            .then(results => {
    
                breeds = Object.keys(results.message);
                updateBreedList(breeds);
                addBreedSelectListener();
            });
    }
    
    function updateBreedList(breeds) {
        let ul = document.getElementById('dog-breeds');
        removeChildren(ul);
        breeds.forEach(breed => addBreed(breed));
    }
    
    function removeChildren(element) {
        let child = element.lastElementChild;
        while (child) {
            element.removeChild(child);
            child = element.lastElementChild;
        }
    }
    
    function selectBreedsStartingWith(letter) {
        updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
    }
    
    function addBreedSelectListener() {
        let breedDropdown = document.getElementById('breed-dropdown');
        breedDropdown.addEventListener('change', function (event) {
            selectBreedsStartingWith(event.target.value);
        });
    }
    
    function addBreed(breed) {
        let ul = document.getElementById('dog-breeds');
        let li = document.createElement('li');
        li.innerText = breed;
        li.style.cursor = 'pointer';
        ul.appendChild(li);
        li.addEventListener('click', updateColor);
    }
    
    function updateColor(event) {
        event.target.style.color = 'palevioletred';
    } 

    console.log('%c HI', 'color: firebrick')
} )
