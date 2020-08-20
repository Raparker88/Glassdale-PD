const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".buttons")


export const addFacilitiesButton = () => {
    contentElement.innerHTML += `
        <button id="facilitiesButton">Show Facilities</button>`
}

eventHub.addEventListener("click", (event) => {
    if(event.target.id === "facilitiesButton"){
        const customEvent = new CustomEvent("showFacilities")
        eventHub.dispatchEvent(customEvent)
    }
})