import { useCriminals } from"./CriminalDataProvider.js"
import { associateToHTML } from"./Associate.js"

const contentElement = document.querySelector(".associateAlibis")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("alibiClicked", event => {
    const criminalNumber = event.detail.criminalID.split("--")[1]
    const criminals = useCriminals()
    const criminal = criminals.find((criminal) => {
        return criminal.id === parseInt(criminalNumber)
    })
    const criminalName = criminal.name
    const knownAssociates = criminal.known_associates

    render(knownAssociates, criminalName)
})

const render = (associateArray, criminal) => {
    const HTMLString = associateArray.map(associateToHTML).join("")
    contentElement.innerHTML = `
        <h3>${criminal} associates</h3>
        ${HTMLString}`
    
}