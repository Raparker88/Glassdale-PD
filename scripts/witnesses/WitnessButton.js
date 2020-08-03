const contentElement = document.querySelector(".buttons")
const eventHub = document.querySelector(".container")

export const witnessButton = () => {
    contentElement.innerHTML = `
        <button id="witnessesButton">Show Witnesses</button>`

}

eventHub.addEventListener("click", (event) => {
    if(event.target.id === "witnessesButton"){
        const customEvent = new CustomEvent("showWitnesses")
        eventHub.dispatchEvent(customEvent)
    }
})

