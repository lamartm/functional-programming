const api = 'https://opendata.rdw.nl/resource/9c54-cmfx.json'
const areadesc = 'areadesc'

getData(api)
    .then(data => {
    const areadescArray = filteredData(data, areadesc)
    console.log(areadescArray)
})



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