import {sendRequest, sendRequestToDelete} from './users-api'

const BASE_URL = 'https://deploytest2.onrender.com/api/participants'

export function showParticipants() {
    return sendRequest(BASE_URL)
}

export function indexParticipants() {
    return sendRequest(`${BASE_URL}/user`, 'POST')
}

export function addParticipant(data){
    return sendRequest(`${BASE_URL}/`, 'POST', data)
}

export function updateParticipant(participantId, participant){
    return sendRequest(`${BASE_URL}/${participantId}`, 'PATCH', {participant})
}

export function removeParticipant(participantId){
    return sendRequestToDelete(`${BASE_URL}/${participantId}`, 'DELETE')
}