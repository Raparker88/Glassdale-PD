import { listOfficersToDOM } from "./officers/OfficerToDOM.js"
import { listCriminalsToDOM } from "./criminals/CriminalToDOM.js"
import { convictionSelect } from "./convictions/ConvictionSelect.js"
import { officerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { noteList } from "./notes/NoteList.js"
import "./criminals/AssociateAlibi.js"
import { witnessButton } from "./witnesses/WitnessButton.js"
import "./witnesses/WitnessList.js"
import "./criminals/ShowCriminalsButton.js"

listOfficersToDOM()
listCriminalsToDOM()
convictionSelect()
officerSelect()
NoteForm()
noteList()
witnessButton()