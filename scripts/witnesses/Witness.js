export const witnessHTMLRepresentations = (witnessObj) => {
    return `
        <div class="witness__cards">
            <h3>${witnessObj.name}</h3>
            <p>Statements: ${witnessObj.statements}</p>
        </div>`
}