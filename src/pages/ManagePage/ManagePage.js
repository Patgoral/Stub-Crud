import "./ManagePage.css"
import { getUser } from '../../utilities/users-services';
import { useState, useEffect } from 'react';
import * as participantsAPI from '../../utilities/participants-api';

export default function ManagePage() {
    const [participants, setParticipants] = useState([]);
    //const [attendees, setAttendees] = useState([]);
    const currentUser = getUser()
    let participantList;
    let userListOfAttendees = [];
    let updatedList;

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
        }
        getAllParticipants()
    }


    if (participants.length !== 0 && participants.participants !== undefined) {
        participants.participants.forEach(function (participant) {
            if (participant.owner === currentUser._id) {
                userListOfAttendees.push(participant)
            }
        })
    }
    participantList = userListOfAttendees.map((participant) => (
        <div className='list-of-attendees' key={participant._id}>
            <div className='name-label'>
                {participant.name}
                <input placeholder={participant.name}></input>
            </div>
            <div className='location-label'>
                {participant.location}
                <input placeholder={participant.location}></input>
            </div>
            <button className='edit-button'>Edit</button>
            <button className='delete-button' onClick={() => handleDeleteParticipant(participant._id)}>Delete</button>
        </div>
    ))

    return (
        <div>
            <h2>Manage Registration</h2>
            <div>{participantList}</div>
        </div>
    )
}
