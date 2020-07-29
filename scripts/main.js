import { listOfficersToDOM } from "./officers/OfficerToDOM.js"
import { listCriminalsToDOM } from "./criminals/CriminalToDOM.js"
import { convictionSelect } from "./convictions/ConvictionSelect.js"
import { officerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { noteList } from "./notes/NoteList.js"

listOfficersToDOM()
listCriminalsToDOM()
convictionSelect()
officerSelect()
NoteForm()
noteList()