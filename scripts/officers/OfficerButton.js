const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".buttons")


export const addOfficerButton = () => {
    contentElement.innerHTML += `
        <button id="officerButton">Show Officers</button>`
}

eventHub.addEventListener("click", (event) => {
    if(event.target.id === "officerButton"){
        const customEvent = new CustomEvent("showOfficers")
        eventHub.dispatchEvent(customEvent)
    }
})