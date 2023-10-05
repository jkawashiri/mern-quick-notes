const Note = require('../../models/note');

module.exports = {
    index,
    create
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