import { useState, useEffect } from 'react'
import * as participantsAPI from '../../utilities/participants-api'

export default function ManagePage() {
    const [participants, setParticipants] = useState([])

    useEffect(function(){
    async function getAllParticipants(){
        const participants = await participantsAPI.showParticipants()
        setParticipants(participants)
    }
    getAllParticipants()
    },[])

    const eachParticipant = participants.map((participant) => (
		<div key={participant._id}> 
        <div>{participant.name}</div>
        <div>{participant.location}</div>
        </div>
	))

    return (
    <div>
        <h2>Manage Registration</h2>
        {eachParticipant}
    </div>
    )
}