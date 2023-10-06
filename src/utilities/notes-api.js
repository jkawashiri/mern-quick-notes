import sendRequest from "./send-request"
const BASE_URL = '/api/notes'

export function getAll() {
    return sendRequest(BASE_URL)
}

export function addItem(note) {
    return sendRequest(BASE_URL, 'POST', note)
}

export function editItem(noteId, updatedNote) {
    return sendRequest(`${BASE_URL}/${noteId}`, 'PUT', updatedNote)
}

export function deleteItem(noteId) {
    return sendRequest(`${BASE_URL}/${noteId}`, 'DELETE')
}
