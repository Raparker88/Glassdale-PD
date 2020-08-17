import { useNotes, editNote } from "./NoteDataProvider.js"
import { useCriminals } from "../criminals/CriminalDataProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("editNoteClicked", event =>{
    const contentTarget = document.querySelector(".editDialog")
    contentTarget.showModal()

    const id = event.detail.noteId
    const notes = useNotes()
    const chosenNote = notes.find(note => note.id === id)

    const title = document.querySelector("#dialog-title")
    const author = document.querySelector("#dialog-author")
    const content = document.querySelector("#dialog-content")
    const suspect= document.querySelector("#dialog--criminal")
    const noteId = document.querySelector("#noteId")
    const timeStamp = document.querySelector("#noteTime")


    title.value = chosenNote.title
    author.value = chosenNote.author
    content.value = chosenNote.content
    suspect.value = chosenNote.criminalId
    noteId.value = chosenNote.id
    timeStamp.value = chosenNote.timeStamp

})

eventHub.addEventListener("click", event => {
    if (event.target.id === "dialogSaveNote"){
        const title = document.querySelector("#dialog-title")
        const author = document.querySelector("#dialog-author")
        const content = document.querySelector("#dialog-content")
        const suspect= document.querySelector("#dialog--criminal")
        const noteId = document.querySelector("#noteId")
        const timeStamp = document.querySelector("#noteTime")


        const newNote = {
            title: title.value,
            author: author.value,
            content: content.value,
            criminalId: parseInt(suspect.value),
            timeStamp: timeStamp.value,
            id: noteId.value

        }

        editNote(newNote)
        
    }else if (event.target.id === "closeDialog"){
        const theDialog = event.target.parentNode.parentNode
        theDialog.close()
    }
})

export const renderEditDialog = () => {
    const criminals = useCriminals()
    return `
    <dialog class="editDialog">
        <div class="dialogBox">
            <input type="text" id="dialog-title" placeholder="Title">
            <input type="text" id="dialog-author" placeholder="Your Name">
            <select id="dialog--criminal" class="criminalSelect">
                <option value="0">Please select a criminal...</option>
                ${
                criminals.map(criminal => {
                    return `<option value="${ criminal.id }">${ criminal.name }</option>`
                }).join('')
                }
            </select>
            <textarea id="dialog-content" placeholder="Write Note Here"></textarea>
            <input type="hidden" id="noteId" value="">
            <input type="hidden" id="noteTime" value="">
            <button id="closeDialog">Close</button>
            <button id="dialogSaveNote">Save Note</button>
        </div>
    </dialog> 
        `
}