import { saveNote } from "./NoteDataProvider.js"
import { getCriminals, useCriminals } from "../criminals/CriminalDataProvider.js"


const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const clickSaveNote = () => {
    eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        // Make a new object representation of a note
        const title = document.querySelector("#note-title")
        const author = document.querySelector("#note-author")
        const content = document.querySelector("#note-content")
        const suspect= document.querySelector("#noteForm--criminal")

        const newNote = {
            title: title.value,
            author: author.value,
            criminalId: parseInt(suspect.value),
            content: content.value,
            timeStamp: Date.now()
            // Key/value pairs here
        }

        if (title.value && author.value && content.value && suspect.value != "0"){
            saveNote(newNote)
            render()
        }else{
            window.alert("Please fill in all fields")
        }


    }
})
}

const render = () => {
    getCriminals()
    .then(() => {
        const criminals = useCriminals()
    
        contentTarget.innerHTML = `
        <input type="text" id="note-title" placeholder="Title">
        <input type="text" id="note-author" placeholder="Your Name">
        <select id="noteForm--criminal" class="criminalSelect">
            <option value="0">Please select a criminal...</option>
            ${
            criminals.map(criminal => {
                return `<option value="${ criminal.id }">${ criminal.name }</option>`
            }).join('')
            }
        </select>
        <textarea id="note-content" placeholder="Write Note Here"></textarea>
        <button id="saveNote">Save Note</button>
        `
    })
}

export const NoteForm = () => {
    render()
    clickSaveNote()
}





