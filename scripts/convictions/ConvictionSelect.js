/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions, getConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

contentTarget.addEventListener("change", (event) => {
    if(event.target.id === "crimeSelect") {
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

export const convictionSelect = () => {
    // Get all convictions from application state
    getConvictions()
    .then(() => {
        const convictions = useConvictions()
        render(convictions)
    })

        const render = (convictionsCollection) => {
            /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
            */
           contentTarget.innerHTML = `
           <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
                convictionsCollection.map(conviction => {
                    return `<option value = "${conviction.id}">${conviction.name}</option>`
                    }).join("")
                }
                </select>
            `
            
        }
    }
    