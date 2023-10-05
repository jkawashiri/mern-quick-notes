import { useState, useEffect } from "react"
import AddNoteForm from "../../components/AddNoteForm/AddNoteForm"
import Note from "../../components/Note/Note"
import * as notesAPI from '../../utilities/notes-api'

export default function Notes({user}) {
    const [notes, setNotes] = useState([])
    const [clicked, setClicked] = useState(true)
    const [sortedNotes, setSortedNotes] = useState([])

    useEffect(function() {
        async function getNotes() {
            const notes = await notesAPI.getAll()
            setNotes(notes)
        }
        getNotes()
    }, [])

    useEffect(function() {
        const userNotes = notes.filter((note) => note.user === user._id)
        const sorted = clicked 
            ? [...userNotes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) 
            : [...userNotes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        setSortedNotes(sorted)
    }, [notes, clicked])

    async function addNote(note) {
        const newNote = await notesAPI.addItem(note)
        setNotes([...notes, newNote])
    }

    let buttonText = clicked ? '\u2193' : '\u2191'
    function onClick() {
        setClicked(clicked => !clicked )
    }
    return (
        <>
          <AddNoteForm user={user} addNote={addNote} />
          { sortedNotes.length > 0 ?
            <div>
                <button onClick={onClick}>{buttonText}</button>
                {sortedNotes.map((note, idx) => (
                    <Note note={note} key={idx} />
                ))}
            </div>
            :
            <h1>No Notes Yet!</h1>
          }
        </>
    )
}