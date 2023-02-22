import "./ManagePage.css"
import { getUser } from '../../utilities/users-services';
import { useState, useEffect } from 'react'
import * as participantsAPI from '../../utilities/participants-api'

export default function ManagePage() {
    const [participants, setParticipants] = useState([])
    const [copy, setCopy] = useState([])
    let valueHolder = [];
    const currentUser = getUser()
    let participantList;
    let userListOfAttendees = [];
    const messageContainer = document.querySelector('#message-container')
    
    //READ THE PARTICIPANTS
    useEffect(function () {
        async function getAllParticipants() {
            const participants = await participantsAPI.showParticipants()
            setParticipants(participants)
            setCopy(participants)
        }
        getAllParticipants()
    }, [])
    //HANDLES THE DELETION
    async function handleDeleteParticipant(id) {
        await participantsAPI.removeParticipant(id)
        async function getAllParticipants() {
            const participants = await participantsAPI.showParticipants()
            setParticipants(participants)
            messageContainer.innerHTML = 'Registrar Deleted'
        }
        getAllParticipants()
    }
    //HANDLES EDIT/UPDATE
    async function handleEditParticipant(id, name, location) {
        const updatedParticipant = { name, location }

        await participantsAPI.updateParticipant(id, updatedParticipant)
        async function getAllParticipants() {
            const participants = await participantsAPI.showParticipants()
            setParticipants(participants)
            setCopy(participants)
            messageContainer.innerHTML = 'Registrar Updated'
        }
        getAllParticipants()
    }
    //HANDLES ANY CHANGES MADE TO INPUT FIELD
    function handleInputChange(event, id) {
        const updatedParticipants = participants.participants.map(p => {
            if (p._id === id) {
                return { ...p, [event.target.name]: event.target.value }
            }
            return p
        })
        setParticipants({ participants: updatedParticipants })
    }
    //CREATES AN ARRAY TO MAP THE PARTICIPANTS
    if (participants.length !== 0 && participants.participants !== undefined) {
        participants.participants.forEach(function (participant) {
            if (participant.owner === currentUser._id) {
                userListOfAttendees.push(participant)
            }
        })
    }
    //STORES A COPY OF THE PREVIOUS STATE BEFORE EDIT/UPDATE
    function getStoredValue(participantId, value) {
        copy.participants.forEach(function (person) {
            if (person._id === participantId) {
                valueHolder = [];
                valueHolder.push(person)
            }
        })
        if (value === 'name') {
            return valueHolder.map((tmp, index) => (
            <span key={index} className='current-field-value'>{tmp.name}</span>))
        }
        else if (value === 'location') {
            return valueHolder.map((tmp, index) => (
            <span key={index} className='current-field-value'>{tmp.location}</span>))
        }
    }
    //MAPS EVERYTHING TO INTERFACE
    participantList = userListOfAttendees.map((participant, index) => (
        <div className='user-attendees' key={index}>
            <div className='name-container'>
                <label className='manage-labels'><span className='current-field-desc'>Name: </span>{getStoredValue(participant._id, 'name')}</label>
            </div>
            <div className='location-container'>
                <label className='manage-labels'><span className='current-field-desc'>Location: </span>{getStoredValue(participant._id, 'location')}</label>
            </div>
            <div className='input-container'>
                <input
                    className='name-input'
                    placeholder='Name'
                    name='name'
                    value={participant.name || ''}
                    onChange={(event) => handleInputChange(event, participant._id)}></input>
            </div>
            <div className='input-container'>
                <input
                    className='location-input'
                    placeholder='Location'
                    name='location'
                    value={participant.location || ''}
                    onChange={(event) => handleInputChange(event, participant._id)}></input>
            </div>
            <div className="button-container">
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
            
        </div>
    ))

    return (
        <div className="manage-page">
            <h3 id="message-container">&nbsp;</h3>
            <div className="user-attendee-list">{participantList}</div>
        </div>
    )
}
