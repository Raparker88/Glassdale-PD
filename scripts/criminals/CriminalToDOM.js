import { useCriminals, getCriminals} from "./CriminalDataProvider.js"
import { criminalHTMLRepresentations } from "./CriminalHTML.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { useOfficers } from "../officers/OfficerDataProvider.js"

const contentElement = document.querySelector (".criminalsContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeChosen", (event) => {
    // getting id of selected crime
    const crimeSelected = event.detail.crimeThatWasChosen
    // finding crime object with id from above
    const crimeArray = useConvictions()
    const foundCrimeObject = crimeArray.find((crime) => {
        return parseInt(crimeSelected) === crime.id
    })
    // filtering criminals to show those who committed crime
    const allCriminals = useCriminals()
    const filteredCriminals = allCriminals.filter (criminal => {
        return foundCrimeObject.name === criminal.conviction
    })
    render(filteredCriminals)
    
})

eventHub.addEventListener("officerChosen", (event) => {
    // id of selected officer
    const officerSelected = event.detail.officerThatWasChosen
    // finding officer object containing id from officerSelected
    const officerArray = useOfficers()
    const foundOfficerObject = officerArray.find((officer) => {
        return parseInt(officerSelected) === officer.id
    })
    //filter criminals to find those arrested by selected officer
    const allCriminals = useCriminals()
    const filteredCriminals = allCriminals.filter (criminal => {
        return foundOfficerObject.name === criminal.arrestingOfficer
    })
    render(filteredCriminals)
})

eventHub.addEventListener("showCriminals", (event) => {
    listCriminalsToDOM()
})

const render = (criminalArray) => {
    
    let criminalHTML = ""
    criminalArray.forEach(criminal => {
        criminalHTML += criminalHTMLRepresentations(criminal)
    })
    
    contentElement.innerHTML = `
        <h2>Criminals</h2>
        <section class="allCriminals">
            ${criminalHTML}
        </section>
        `
}
    
    
export const listCriminalsToDOM = () => {
        
    getCriminals().then(() => {
        const criminalList = useCriminals()
        render (criminalList)
    })
}