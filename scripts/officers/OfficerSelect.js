// produce a dropdown menu to select from officers. Add event listener to later filter criminals by arresting officer

import { useOfficers, getOfficers } from "./OfficerDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

contentTarget.addEventListener("change", (event) => {
    if(event.target.id === "officerSelect") {
        const customEvent = new CustomEvent("officerChosen", {
            detail: {
                officerThatWasChosen: event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

export const officerSelect = () => {
    // Get all convictions from application state
    getOfficers()
    .then(() => {
        const officers = useOfficers()
        render(officers)
    })

        const render = (officerCollection) => {
            /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
            */
           contentTarget.innerHTML += `
           <select class="dropdown" id="officerSelect">
                <option value="0">Please select an officer...</option>
                ${
                officerCollection.map(officer => {
                    return `<option value = "${officer.name}">${officer.name}</option>`
                    }).join("")
                }
                </select>
            `
            
        }
    }