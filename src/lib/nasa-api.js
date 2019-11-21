
/**
 * Sækir Myndir frá nasa API. Til þess að sjá dæmi um json svari sjá apod.json
 */
import {randomNumber} from "./helpers";
// API lykill til að fá aðgang að nasa gögnum.
const API_KEY = 'g88ECLOgt32aZso7MDQigWADBbk3TKm5Y45Ad4V9';
// Slóð að sækja myndir frá. Dæmi um heila slóð https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-10
const URL = 'https://api.nasa.gov/planetary/apod';


/**
 * Sækir mynd af handahófi frá APOD API hjá nasa
 *
 * @returns {Promise} sem mun innihalda upplýsingar um mynd/myndband hjá nasa.
 */
 export default async function getRandomImage() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '-' + dd + '-' + yyyy;
    fetch(`${URL}?${API_KEY}&date=${today}`)
    .then((result) => {
    if (!result.ok) {
      throw new Error('Non 200 status');
    }
    return apod.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
}
