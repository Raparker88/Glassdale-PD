
const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".witnessCriminalButton")


eventHub.addEventListener("showWitnesses", (event) => {
    contentElement.innerHTML = `
        <button id="criminalsButton">Show Criminals</button>`
})

eventHub.addEventListener("click", (event) => {
    if(event.target.id === "criminalsButton"){
        const customEvent = new CustomEvent("showCriminals")
        eventHub.dispatchEvent(customEvent)
    }
})