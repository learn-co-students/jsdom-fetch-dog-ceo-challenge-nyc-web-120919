
let BREEDS = [];

document.addEventListener("DOMContentLoaded", function() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((response) => {
        return response.json()
        })
        .then((myJson) => {
            showDogImages(myJson)
        })

    function showDogImages(data){
        const dogImageContainer = document.getElementById("dog-image-container")
        data["message"].forEach((dogImage) => {
            let image = document.createElement("img")
            image.src = dogImage
            dogImageContainer.append(image)
        })
    }

    fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => {
        return response.json()
        })
        .then((myJson) => {
            
            BREEDS = Object.keys(myJson["message"])
            
            renderBreeds(BREEDS)
        })

    function renderBreeds(data){
        const dogBreeds = document.getElementById("dog-breeds")
        dogBreeds.innerText = ""
        data.forEach((dogBreed) => {
            let li = document.createElement("li")
            li.innerText = dogBreed 
            
            li.addEventListener("click", (event) =>{
                event.target.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
            })
            dogBreeds.append(li)
        })
    }
        
    function addBreeds(data){
        const dogBreeds = document.getElementById("dog-breeds")
        data.forEach((dogBreed) => {
            let li = document.createElement("li")
            li.innerText = dogBreed 
          
            li.addEventListener("click", (event) =>{
                event.target.style.color = '#'+Math.floor(Math.random()*16777215).toString(16);
            })
            dogBreeds.append(li)
        })
    }
    const breedDropdown = document.getElementById("breed-dropdown")
    breedDropdown.addEventListener("change", (event) => {
        let dogBreeds = document.getElementById("dog-breeds")
        console.log(dogBreeds)
        let selection = event.target.value
        const dogBreedLis = dogBreeds.children
        Array.from(dogBreedLis).forEach(dogBreed =>{
            if (dogBreed.innerText[0] == selection){
                dogBreed.style.display = "list-item"
            } else {
                dogBreed.style.display = "none"
            }

        })
        // let dogBreedObjects = dogBreedLis.filter((dogBreed) =>{
        //     return dogBreed[0] == selection
        // })
        // console.log(dogBreedObjects)
        // renderBreeds(dogBreedObjects)
    })

  })


//   <select id="breed-dropdown" name="select-breed">
//       <option value="a">a</option>
//       <option value="b">b</option>
//       <option value="c">c</option>
//       <option value="d">d</option>
//     </select>