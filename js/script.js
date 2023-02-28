/* -settare un array per definire quali saranno i nomi delle immagini che ci serviranno
   -carichiamo gli elementi relativi a freccie per le foto e contenuto dell'immagine
   -definiamo un indice che ci servirà per orientarci all'interno dell'array
   -creiamo un evento grazie al quale al click della freccia la foto cambierà
   -costruiamo un ciclo per definire in base all'indice come si muoveranno le immagini
*/




const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
const activePictureEl = document.getElementById("carousel-img");
const upArrowEl = document.getElementById("up-arrow");
const downArrowEl = document.getElementById("down-arrow");

let mainIndex = 0;
activePictureEl.src = images[mainIndex];

downArrowEl.addEventListener("click", function() {
    
    mainIndex++;
    activePictureEl.src = images[mainIndex];

   
});
 
upArrowEl.addEventListener("click", function() {
    
    mainIndex--;
    activePictureEl.src = images[mainIndex];
});