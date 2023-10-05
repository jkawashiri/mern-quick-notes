import './AddNoteForm.css'
import { useState } from 'react'

export default function AddNoteForm({user, addNote}) {
    const [note, setNote] = useState({text: ''})
    function handleForm(evt) {
        const newNote = {...note, [evt.target.name]: evt.target.value}
        setNote(newNote)
    }
    async function handleAddNote(evt) {
        evt.preventDefault()
        await addNote({text: note.text})
        setNote({text: ''})
    }
    return (
        <form className="note-form" onSubmit={handleAddNote}>
            <textarea name="text" onChange={handleForm} value={note.text} />
            <button type="submit">Add Note</button>
        </form>
    )
}