import { useOfficers, getOfficers} from "./OfficerDataProvider.js"
import { officerHTMLRepresentations } from "./OfficerHTML.js"

const contentElement = document.querySelector (".officersContainer")

export const listOfficersToDOM = () => {
    
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

