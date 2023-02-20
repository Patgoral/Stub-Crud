import "./ManagePage.css"
import { getUser } from '../../utilities/users-services';
import { useState, useEffect } from 'react'
import * as participantsAPI from '../../utilities/participants-api'



export default function ManagePage() {
    const [participants, setParticipants] = useState([])
    const currentUser = getUser()
    let participantList;
    let userListOfAttendees = [];
    let updatedList;
    const messageContainer = document.querySelector('#message-container')

    useEffect(function () {
        async function getAllParticipants() {
            const participants = await participantsAPI.showParticipants()
            setParticipants(participants)
        }
        getAllParticipants()
    }, [])

    async function handleDeleteParticipant(id) {
        await participantsAPI.removeParticipant(id)
        updatedList = participants.participants.filter(p => p._id !== id)
        async function getAllParticipants() {
            const participants = await participantsAPI.showParticipants()
            setParticipants(participants)
            messageContainer.innerHTML = 'Registration Deleted'
        }
        getAllParticipants()
    }

    async function handleEditParticipant(id, name, location) {
        const updatedParticipant = { name, location }

        await participantsAPI.updateParticipant(id, updatedParticipant)
        async function getAllParticipants() {
            const participants = await participantsAPI.showParticipants()
            setParticipants(participants)
            messageContainer.innerHTML = 'Registration Updated'

        }
        getAllParticipants()
    }

    function handleInputChange(event, id) {
        const updatedParticipants = participants.participants.map(p => {
            if (p._id === id) {
                return { ...p, [event.target.name]: event.target.value }
            }
            return p
        })
        setParticipants({ participants: updatedParticipants })
    }

    if (participants.length !== 0 && participants.participants !== undefined) {
        participants.participants.forEach(function (participant) {
            if (participant.owner === currentUser._id) {
                userListOfAttendees.push(participant)
            }
        })
    }

    participantList = userListOfAttendees.map((participant) => (
        <>
            <div className='user-attendees' key={participant._id}>
                <div className='name-label'>
                    {participant.name}
                    <input
                        placeholder='name'
                        name='name'
                        value={participant.name || ''}
                        onChange={(event) => handleInputChange(event, participant._id)}></input>
                </div>
                <div className='location-label'>
                    {participant.location}
                    <input
                        placeholder='location'
                        name='location'
                        value={participant.location || ''}
                        onChange={(event) => handleInputChange(event, participant._id)}></input>
                </div>
                <button className='edit-button'
                    onClick={() => handleEditParticipant(
                        participant._id,
                        participant.name,
                        participant.location
                    )}>Edit</button>
                <button className='delete-button'
                    onClick={() => handleDeleteParticipant(participant._id)}>
                    Delete
                </button>
            </div>
            <hr />
        </>
    ))

    return (
        <div className="ManagePage">
            <h2>Manage Registration</h2>
            <h3 id="message-container"></h3>
            <hr />
            <div className="user-attendee-list">{participantList}</div>
        </div>
    )
}
