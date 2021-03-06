import { getNotes, useNotes } from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/CriminalDataProvider.js"
import { noteToHTML } from "./Note.js"
import { renderEditDialog } from "./EditNoteDialog.js"

const eventHub = document.querySelector(".container")

const contentElement = document.querySelector(".noteContainer")

const render = (noteArray, criminalArray) => {
    const HTMLString = noteArray.map(note => {
        let relatedCriminal = criminalArray.find(criminal => criminal.id === note.criminalId)
        return noteToHTML(note, relatedCriminal)
    }).join('')
    contentElement.innerHTML = `
        <h2>Notes</h2>
        ${HTMLString}
        ${renderEditDialog()}
    `

}


eventHub.addEventListener("noteStateChanged", event => {
        const notes = useNotes()
        const criminals = useCriminals()
        render (notes, criminals)
        
})

export const noteList = () => {
    getNotes()
    .then(getCriminals)
    .then(() => {
        const notes = useNotes()
        const criminals =useCriminals()
        render (notes, criminals)
    
    })
}
