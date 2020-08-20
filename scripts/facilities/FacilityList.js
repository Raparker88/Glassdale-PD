import { useFacilities } from "./FacilitiesProvider.js"
import { useCriminalFacilities } from "./CriminalFacilityProvider.js"
import { useCriminals } from "../criminals/CriminalDataProvider.js"
import { facilityHTML } from "./Facility.js"



const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

let facilities = []
let criminals = []
let criminalFacilities = []


eventHub.addEventListener("showFacilities", () => {
    facilities = useFacilities()
    criminals = useCriminals()
    criminalFacilities = useCriminalFacilities()
    render()
})

const render = () => {
    const HTML = facilities.map(facility => {
        let facilityRelationships = criminalFacilities.filter(cf => cf.facilityId === facility.id)
        let foundCriminals = facilityRelationships.map(fr => criminals.find(c => c.id === fr.criminalId))
        return facilityHTML(facility, foundCriminals)
    }).join('')
    contentTarget.innerHTML =  `
    <h2>Facilities</h2>
    <section class="allCriminals">
        ${HTML}
    </section>
    `
}