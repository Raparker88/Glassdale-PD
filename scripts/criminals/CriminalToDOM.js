import { useCriminals, getCriminals} from "./CriminalDataProvider.js"
import { criminalHTMLRepresentations } from "./CriminalHTML.js"

const contentElement = document.querySelector (".criminalsContainer")

export const listCriminalsToDOM = () => {
    
    getCriminals().then(() => {
        const criminalList = useCriminals()

        let criminalHTML = ""
        criminalList.forEach(criminal => {
            criminalHTML += criminalHTMLRepresentations(criminal)
        })
        
        contentElement.innerHTML = `
            <h2>Criminals</h2>
            <section class="allCriminals">
                ${criminalHTML}
            </section>
            `
    })
    

    
}