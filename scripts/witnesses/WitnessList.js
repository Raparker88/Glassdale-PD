import { useWitnesses, getWitnesses } from "./WitnessDataProvider.js"
import { witnessHTMLRepresentations } from "./Witness.js" 

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".criminalsContainer")

eventHub.addEventListener("showWitnesses", (event) => {
    getWitnesses()
    .then(useWitnesses)
    .then(render)

})

const render = (witnessArray) => {
    const witnessHTML = witnessArray.map(witnessHTMLRepresentations).join("")
    contentElement.innerHTML = `
        <h2>Witnesses</h2> 
        <section class="allWitnesses">${witnessHTML}</section>`
}
