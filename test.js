var deData = data()

// console.log(deData)

let favorieteKleur = []

for (answer of deData.data){
    favorieteKleur.push(answer.lievelingskleur)
}

// if(favorieteKleur.includes("0", "", "/")) {
//  return null
// }
// let nul = {"0" : null, "" : null, "/" : null}
// favorieteKleur.replace(/0/g, null).replace(/""/g, null).replace(/"/")

let nonUsableAnswers = ["/", "", "0"]

let newArray = favorieteKleur.filter(f => !nonUsableAnswers.includes(f))

// zat hier te strugglen omdat ik geen aangepaste array krijg, ging toen de les opnieuw kijken en kwam erachter dat een functie iets 1 keer maar returned

// function test(shizzle) {
//     for(answer of shizzle) {
//     if (!answer.includes('#')) {
//         return `#${answer}`
//     }
// }
// }

//moet het dus storen in een nieuwe array

function test(Answer) {
    let newArrayAnswer = []
    for(answer of Answer) {
    if (!answer.includes('#')) {
        newArrayAnswer.push(`#${answer}`)
    } else if (answer.includes('#')){
        newArrayAnswer.push(answer)
    }
}
return endArray
}

//Brian ging me helpen om dit een stuk makkelijker te maken met behulp van map, zie zelf de logica wel in!

const eindArray = newArray.map(answer => {
    if(!answer.includes('#')){
    return `#${answer}`
    }
    return answer
})


// let dindmek = "yo fakka"
// function testing(test) {
//     if(test.includes("yo fakka")){
//         return true
//     } else {
//         return false
//     }
// }
console.log(test(newArray))
