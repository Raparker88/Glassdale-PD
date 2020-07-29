export const noteToHTML = (noteObj) => {
    return `
        <h3>${noteObj.title}</h3>
        <p>Regarding: ${noteObj.suspect}</p>
        <p>Date: ${new Date(noteObj.timeStamp).toLocaleDateString('en-US')}</p>
        <p>Note: ${noteObj.content}</p>
        <p>Author: ${noteObj.author}</p>
    `
}