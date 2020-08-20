import { useCriminals, getCriminals} from "./CriminalDataProvider.js"
import { criminalHTMLRepresentations } from "./CriminalHTML.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { useOfficers } from "../officers/OfficerDataProvider.js"

const contentElement = document.querySelector (".criminalsContainer")
const eventHub = document.querySelector(".container")

let criminals = []
let foundCriminals = {
    officer: "0",
    crime: "0"
}

const filterCriminals = () => {

criminals = useCriminals()

    if(foundCriminals.crime != "0"){
        const crimeArray = useConvictions()
        const foundCrimeObject = crimeArray.find((crime) => parseInt(foundCriminals.crime) === crime.id)
        criminals = criminals.filter (criminal => foundCrimeObject.name === criminal.conviction)

    }if(foundCriminals.officer !="0"){
       
       
        criminals = criminals.filter (criminal => foundCriminals.officer === criminal.arrestingOfficer)

    }

}

eventHub.addEventListener("crimeChosen", (event) => {
 
    foundCriminals.crime = event.detail.crimeThatWasChosen
    filterCriminals()
    render()
    
})

eventHub.addEventListener("officerChosen", (event) => {
   
    foundCriminals.officer = event.detail.officerThatWasChosen
    filterCriminals()
    render()
})

eventHub.addEventListener("showCriminals", (event) => {
    listCriminalsToDOM()
})

const render = () => {
    
    const criminalHTML = criminals.map(criminal => criminalHTMLRepresentations(criminal)).join('')
    
    contentElement.innerHTML = `
        <h2>Criminals</h2>
        <section class="allCriminals">
            ${criminalHTML}
        </section>
        `
}
    
    
export const listCriminalsToDOM = () => {
        
    getCriminals().then(() => {
        criminals = useCriminals()
        render ()
    })
}