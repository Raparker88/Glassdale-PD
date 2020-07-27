import { useCriminals, getCriminals} from "./CriminalDataProvider.js"
import { criminalHTMLRepresentations } from "./CriminalHTML.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"

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