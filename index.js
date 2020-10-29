import {api, areadesc, laadPunten, parkeerPlaatsen, maxInrijHoogte} from '/variables.js'
// const api = 'https://opendata.rdw.nl/resource/9c54-cmfx.json'
// const areadesc = 'areadesc'
// const laadPunten = 'aantal_laad_punten'
// const parkeerPlaatsen = 'aantal_parkeer_plaatsen'
// const maxInrijHoogte = 'maximale_inrij_hoogte'

getData(api)
    .then(data => {
    // const areadescArray = filteredData(data, areadesc)
    // const laadpuntenArray = filteredData(data, laadPunten)
    // const parkeerPlaatsenArray = filteredData(data, parkeerPlaatsen)
    // const maxInrijHoogteArray = filteredData(data, maxInrijHoogte)
    // console.log('area descriptie', areadescArray, 'laad punten', laadpuntenArray, 'parkeer plaatsen', parkeerPlaatsenArray, 'max inrij hoogte', maxInrijHoogteArray)
    // console.table([areadescArray, laadpuntenArray, parkeerPlaatsenArray, maxInrijHoogteArray])
    
        console.log(data)
        // if (!question.includes('toegankelijk_voor_gehandicapten')){
        //     question.push('toegankelijk_voor_gehandicapten')
        // } return question
    }
    // console.log(improvedDataSet)
    
)



async function getData(url) {
const response = await fetch(url);
const data = await response.json();
return data;
}

function filteredData (dataArray, column) {
    return dataArray.map(result => result[column])
}

// const url = 'https://opendata.rdw.nl/resource/9c54-cmfx.json'
// fetch(url)
//     .then(
//         response => {
//             console.log(response)
//             response.json()
//             .then( data => {
//                 console.log(data)
//             }
//                 )
//         }
//     )