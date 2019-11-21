import getRandomImage from "./nasa-api";
import el from "./helpers";
// todo vísa í rétta hluti með import

// breytur til þess að halda utan um html element nodes
let title; // titill fyrir mynd á forsíðu
let text; // texti fyrir mynd á forsíðu
let img; // mynd á forsíðu

let image; // object sem inniheldur núverandi mynd á forsíðu.
var json = JSON.parse(apod);
/*
 * Sækir nýja Mynd af handahófi frá Nasa API og birtir hana á forsíðunni
 * ásamt titli og texta.
 */
function getNewImage() {
    getRandomImage();
    img = json.hdurl;
    title = json.title;
    el(img);
}

/*
 * Vistar núverandi mynd í storage.
 */
function saveCurrentImage() {
     window.localStorage("")
}

/*
 * Upphafsstillir forsíðuna. Setur event listeners á takkana, og sækir eina mynd.
 *
 */
export default function init(apod) {
    document.getElementById("new-image-button").addEventListener("click", getNewImage);
    document.getElementById("save-image-button").addEventListener("click", saveCurrentImage);
    getNewImage();
}

/*
 * Fall fyrir favourites.html. Sér um að sækja allar vistuðu myndirnar og birta þær ásamt
 * titlum þeirra.
 */
export function loadFavourites() {

}
