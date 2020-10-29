// Variabel aangemaakt om data functie van andere file (studenten dataset) op te roepen
var deData = data()

// Variabel om nieuwe gefilterde array in te stoppen
let favorieteKleur = []

// Loop die in de data functie kijkt naar waardes waarin "lievelingskleur" in staat, al die waardes worden in de favorieteKleur array gezet
for (answer of deData.data){
    favorieteKleur.push(answer.lievelingskleur)
}

//Variabel die alle antwoorden die niet een kleur zijn in heeft
let nonUsableAnswers = ["/", "", "0"]

// Gebruik hier de .filter method om alleen de antwoorden die niet de nonUsableAnswer in hebben, te gebruiken in de favorieteKleur array
let newArray = favorieteKleur.filter(f => !nonUsableAnswers.includes(f))

// Brian ging me helpen om dit een stuk makkelijker te maken met behulp van map, zie zelf de logica wel in! Nog eerst wel alle antwoorden die niet HEX waren 
// gehardcode naar HEX
const eindArray = newArray.map(answer => {
    if(answer.includes('Legergroen')){
        return '#4b5320'
    } 
    if(answer.includes('#97ffbb. #e77a8a')){
        return '#97ffbb'
    } 
    if(answer.includes('Staal.')){
        return '#7b9095'
    } 
    if(answer.includes('grijs')){
        return '#878989'
    } 
    if(answer.includes('zwart')){
        return '#000000'
    } 
    if(answer.includes('rood')){
        return '#000000'
    } 
    if(answer.includes('66. 81, 245')){
        return '#4251F5'
    } 
    if(answer.includes('GEEL')){
        return '#e0d281'
    } 
    if(!answer.includes('#')){
    return `#${answer}`
    }
    return answer
})


console.log(eindArray)
