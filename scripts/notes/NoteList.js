import { getNotes, useNotes } from "./NoteDataProvider.js"
import { noteToHTML } from "./Note.js"

const eventHub = document.querySelector(".container")

const contentElement = document.querySelector(".noteContainer")

const render = (noteArray) => {
    const HTMLString = noteArray.map(note => {
        return noteToHTML(note)
    }).join('')
    contentElement.innerHTML = `
        <h2>Notes</h2>
        ${HTMLString}
    `

}

export const noteList = (noteArray) => {
    getNotes().then(() => {
    const noteList = useNotes()
    render (noteList)
    eventHub.addEventListener("noteStateChanged", event => {
        getNotes().then(() => {
            const noteList = useNotes()
            render (noteList)
            
        })
    })
    
    })
}
