import sendRequest from './users-api'
const BASE_URL = '/api/participants'

export function getAll() {
    return sendRequest(BASE_URL)
}

export function addParticipant(data){
    return sendRequest(`${BASE_URL}` + '/', 'POST', data)
}

export function updateParticipant(participantId){
    return sendRequest(`${BASE_URL}/${participantId}`, 'PATCH')
}

export function removeParticipant(participantId){
    return sendRequest(`${BASE_URL}/${participantId}`, 'DELETE')
}
