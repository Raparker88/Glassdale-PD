import {deleteNote} from "./NoteDataProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteNote--")){
        const noteId = event.target.id.split("--")[1]
        deleteNote(noteId)
    }
})

export const noteToHTML = (noteObj, criminalObj) => {
    return `
        <h3>${noteObj.title}</h3>
        <p>Regarding: ${criminalObj.name}</p>
        <p>Date: ${new Date(noteObj.timeStamp).toLocaleDateString('en-US')}</p>
        <p>Note: ${noteObj.content}</p>
        <p>Author: ${noteObj.author}</p>
        <button id="deleteNote--${noteObj.id}">Delete</button>
    `
}

