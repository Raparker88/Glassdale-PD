const eventHub = document.querySelector(".container")

let notes = []

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}

export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
        .then(getNotes)
        .then(dispatchStateChangeEvent)
        .catch ((error) => {
            console.log(error)
        })
}
export const editNote = (note) => {
    return fetch(`http://localhost:8088/notes/${note.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}

export const useNotes = () => {
    const sortedByDate = notes.sort((currentEntry, nextEntry) => {
        return nextEntry.timeStamp - currentEntry.timeStamp
    })
    return sortedByDate.slice()
}