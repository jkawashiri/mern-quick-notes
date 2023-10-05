import sendRequest from "./send-request"
const BASE_URL = '/api/notes'

export function getAll() {
    return sendRequest(BASE_URL)
}

export function addItem(note) {
    return sendRequest(BASE_URL, 'POST', note)
}