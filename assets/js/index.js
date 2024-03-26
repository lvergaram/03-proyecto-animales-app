import { Leon, Lobo, Aguila, Oso, Serpiente } from "./classes/animal.js";
import { getSelectOption } from "./lib/domManipulation.js";

const animalGrid = document.getElementById("animal")
const animalImagePreview = document.getElementById("preview")

const animalImageSources = {
    'Leon':'./assets/imgs/Leon.png',
    'Lobo':'./assets/imgs/Lobo.jpg',
    'Oso':'./assets/imgs/Oso.jpg',
    'Serpiente':'./assets/imgs/Serpiente.jpg',
    'Aguila':'./assets/imgs/Aguila.png'
} 

animalGrid.onchange = renderAnimalImagePreview


function renderAnimalImagePreview(e){
    const animalSelected = e.target.value
    const animalSelectedImageSrc = animalImageSources[animalSelected]
    console.log( "animal "+animalSelectedImageSrc ) 
    if(animalSelected){
        animalImagePreview.style.backgroundImage = `url(${animalSelectedImageSrc})` 
    } 
}


