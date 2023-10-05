export default function Note({note}) {
    const formattedDate = new Date(note.createdAt).toLocaleString()
    return (
        <div>{note.text} - {formattedDate}</div>
    )
}