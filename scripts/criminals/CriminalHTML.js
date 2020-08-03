const eventHub = document.querySelector(".container")


export const criminalHTMLRepresentations = (criminalObj) => {
    return `
        <div class="criminal__cards">
            <h3>${criminalObj.name}</h3>
            <p>Age: ${criminalObj.age}</p>
            <p>Crime: ${criminalObj.conviction}</p>
            <p>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
            <p>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
            <button id="associates--${criminalObj.id}" value="alibiButton">Associate Alibis</button>

        </div>
    `
}


eventHub.addEventListener("click", event =>{
    if (event.target.value === "alibiButton") {
        const customEvent = new CustomEvent("alibiClicked", {
            detail: {
                criminalID: event.target.id
            } 
        })
        eventHub.dispatchEvent(customEvent)
    }

})