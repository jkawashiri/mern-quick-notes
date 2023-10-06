const Note = require('../../models/note');

module.exports = {
    index,
    create,
    update,
    delete: deleteNote
}

async function index(req, res,) {
    const notes = await Note.find()
    res.json(notes)
}

async function create(req, res) {
    try {
        const {text} = req.body
        console.log(req.body)
        const userId = req.user._id
        const newNote = new Note({text, user: userId})
        await newNote.save()
        res.status(201).json(newNote)
    } catch (err) {
        res.status(500).json({error: err.message})
        console.error(err)
    }
}

async function update(req, res) {
    const noteId = req.params.id
    const updatedNoteData = req.body
    const updatedNote = await Note.findByIdAndUpdate(noteId, updatedNoteData, {new: true})
    res.json(updatedNote)
}

async function deleteNote(req, res) {
    await Note.findByIdAndRemove(req.params.id)
    res.json({message: "Note deleted successfully"})
}