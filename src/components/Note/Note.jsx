export default function Note({note, deleteNote}) {
    const formattedDate = new Date(note.createdAt).toLocaleString()
    async function handleDeleteNote() {
        await deleteNote(note._id)
    }
    return (
        <div>
            {note.text} - {formattedDate} 
            <button onClick={handleDeleteNote}>X</button>
        </div>
    )
}