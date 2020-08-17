import {deleteNote} from "./NoteDataProvider.js"
import { renderEditDialog } from "./EditNoteDialog.js"



const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteNote--")){
        const noteId = event.target.id.split("--")[1]
        deleteNote(noteId)
    }
})

eventHub.addEventListener("click", event => {
    if(event.target.id.startsWith("editNote")){
        const noteId = event.target.id.split("--")[1]
        const customEvent = new CustomEvent("editNoteClicked", {
            detail: {
                noteId: parseInt(noteId)
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

export const noteToHTML = (noteObj, criminalObj) => {
    return `
        <h3>${noteObj.title}</h3>
        <p>Regarding: ${criminalObj.name}</p>
        <p>Date: ${new Date(noteObj.timeStamp).toLocaleDateString('en-US')}</p>
        <p>Note: ${noteObj.content}</p>
        <p>Author: ${noteObj.author}</p>
        <button id="editNote--${noteObj.id}">Edit</button>
        <button id="deleteNote--${noteObj.id}">Delete</button>
        
    `
}

