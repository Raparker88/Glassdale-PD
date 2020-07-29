import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const clickSaveNote = () => {
    eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        // Make a new object representation of a note
        const title = document.querySelector("#note-title")
        const author = document.querySelector("#note-author")
        const suspect = document.querySelector("#note-suspect")
        const content = document.querySelector("#note-content")
        
        const newNote = {
            title: title.value,
            author: author.value,
            suspect: suspect.value,
            content: content.value,
            timeStamp: Date.now()
            // Key/value pairs here
        }

        // Change API state and application state
        saveNote(newNote)

        render()

    }
})
}

const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id="note-title" placeholder="Title">
        <input type="text" id="note-author" placeholder="Your Name">
        <input type="text" id="note-suspect" placeholder="Regarding Suspect">
        <textarea id="note-content" placeholder="Write Note Here"></textarea>
            

        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
    clickSaveNote()
}