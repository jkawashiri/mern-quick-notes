import { useState } from "react"

export default function EditNoteForm({editNote, onClick, note, noteId}) {
    const [updatedNote, setUpdatedNote] = useState(note)
    function handleForm(evt) {
        setUpdatedNote(evt.target.value)
    }
    async function handleEditNote(evt) {
        evt.preventDefault()
        await editNote(noteId, {text: updatedNote})
    }
    return (
        <form onSubmit={(evt) => {handleEditNote(evt); onClick();}}>
            <textarea name="text" onChange={handleForm} value={updatedNote} />
            <button type="submit">Save</button>
        </form>
    )
}