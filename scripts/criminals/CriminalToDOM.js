import { useCriminals, getCriminals} from "./CriminalDataProvider.js"
import { criminalHTMLRepresentations } from "./CriminalHTML.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { getFacilities, useFacilities } from "../facilities/FacilitiesProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facilities/CriminalFacilityProvider.js"

const contentElement = document.querySelector (".criminalsContainer")
const eventHub = document.querySelector(".container")

let criminals = []
let facilities = []
let criminalFacilities = []
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
    filterCriminals()
    render()
})

const render = () => {
    
    const criminalHTML = criminals.map(criminal => {
        let facilityRelationships = criminalFacilities.filter(cf => cf.criminalId === criminal.id)
        let foundFacilities = facilityRelationships.map (fr => facilities.find(f => f.id === fr.facilityId))
        return criminalHTMLRepresentations(criminal, foundFacilities)
    }).join('')

    
    
    contentElement.innerHTML = `
        <h2>Criminals</h2>
        <section class="allCriminals">
            ${criminalHTML}
        </section>
        `
}
    
    
export const listCriminalsToDOM = () => {
        
    getCriminals()
    .then(getFacilities)
    .then(getCriminalFacilities)
    .then(() => {
        facilities = useFacilities()
        criminalFacilities = useCriminalFacilities()
        criminals = useCriminals()
        render ()
    })
}