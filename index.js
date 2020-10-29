// Alle variabelen importen van de file variables.js
import {api, areadesc, laadPunten, parkeerPlaatsen, maxInrijHoogte} from '/variables.js'
const api = 'https://opendata.rdw.nl/resource/9c54-cmfx.json'
const areadesc = 'areadesc'
const laadPunten = 'aantal_laad_punten'
const parkeerPlaatsen = 'aantal_parkeer_plaatsen'
const maxInrijHoogte = 'maximale_inrij_hoogte'

//Gebruik functie getData() en zet daarin de api endpoint, vervolgens de functie filteredData gebruikt om alleen de data te krijgen die ik wil
getData(api)
    .then(data => {
    const areadescArray = filteredData(data, areadesc)
    const laadpuntenArray = filteredData(data, laadPunten)
    const parkeerPlaatsenArray = filteredData(data, parkeerPlaatsen)
    const maxInrijHoogteArray = filteredData(data, maxInrijHoogte)
    console.log('area descriptie', areadescArray, 'laad punten', laadpuntenArray, 'parkeer plaatsen', parkeerPlaatsenArray, 'max inrij hoogte', maxInrijHoogteArray)
    
    }
)


// async function die de api endpoint (die de parameter url is) fetched en daarna de response converteerd naar json die opgeslagen wordt in de variabel data
async function getData(url) {
const response = await fetch(url);
const data = await response.json();
return data;
}

// functie die twee parameters in krijgt dataArray en de column hiervan, vervolgens maak ik een nieuwe array met behulp van de .map() method die de functie doorstaan
function filteredData (dataArray, column) {
    return dataArray.map(result => result[column])
}

