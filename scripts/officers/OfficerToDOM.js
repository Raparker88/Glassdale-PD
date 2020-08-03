import { useOfficers, getOfficers} from "./OfficerDataProvider.js"
import { officerHTMLRepresentations } from "./OfficerHTML.js"

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector (".criminalsContainer")

eventHub.addEventListener("showOfficers", (event) => {
    listOfficersToDOM()
})

const listOfficersToDOM = () => {
    
    getOfficers().then(() => {
        const officerList = useOfficers()
        
        let officerHTML = ""
        officerList.forEach(officer => {
            officerHTML += officerHTMLRepresentations(officer)
        })
        contentElement.innerHTML = `
            <h2>Officers</h2>
            <section class="allOfficers">
                ${officerHTML}
            </section>
            `
        
    })
    
}

