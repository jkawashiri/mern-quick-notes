import EditNoteForm from "../EditNoteForm/EditNoteForm"
import { useState } from "react"
import './Note.css'

export default function Note({note, editNote, deleteNote}) {
    const [clicked, setClicked] = useState(true)
    const formattedDate = new Date(note.createdAt).toLocaleString()
    async function handleDeleteNote() {
        await deleteNote(note._id)
    }
    function onClick() {
        setClicked(clicked => !clicked)
    }
    return (
        <li className="note">
            { clicked ?
                <>
                    {note.text} - <span className="date">{formattedDate}</span>
                    <button onClick={onClick}>Edit</button>
                    <button onClick={handleDeleteNote}>X</button>
                </>
            :
                <EditNoteForm editNote={editNote} onClick={onClick} note={note.text} noteId={note._id} />
            }
        </li>
    )
}