import { useState, useEffect } from "react"
import AddNoteForm from "../../components/AddNoteForm/AddNoteForm"
import Note from "../../components/Note/Note"
import * as notesAPI from '../../utilities/notes-api'

export default function Notes({user}) {
    const [notes, setNotes] = useState([])
    useEffect(function() {
        async function getNotes() {
            const notes = await notesAPI.getAll()
            setNotes(notes)
        }
        getNotes()
    }, [])
    async function addNote(note) {
        const newNote = await notesAPI.addItem(note)
        setNotes([...notes, newNote])
    }
    const userNotes = notes.filter((note) => note.user === user._id)
    return (
        <>
          <AddNoteForm user={user} addNote={addNote} />
          { userNotes.length > 0 ?
            <div>
                {userNotes.map((note, idx) => (
                    <Note note={note} key={idx} />
                ))}
            </div>
            :
            <h1>No Notes Yet!</h1>
          }
        </>
    )
}