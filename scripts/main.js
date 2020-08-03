import { listCriminalsToDOM } from "./criminals/CriminalToDOM.js"
import { convictionSelect } from "./convictions/ConvictionSelect.js"
import { officerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { noteList } from "./notes/NoteList.js"
import "./criminals/AssociateAlibi.js"
import { witnessButton } from "./witnesses/WitnessButton.js"
import "./witnesses/WitnessList.js"
import {addCriminalButton} from "./criminals/ShowCriminalsButton.js"
import { addOfficerButton } from "./officers/OfficerButton.js"
import "./officers/OfficerToDOM.js"


listCriminalsToDOM()
convictionSelect()
officerSelect()
NoteForm()
noteList()
witnessButton()
addCriminalButton()
addOfficerButton()