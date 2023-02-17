import {useState, useEffect } from 'react'
import * as participantsAPI from '../../utilities/participants-api'

export default function AddParticipants() {
    const [participant, setParticipant] = useState({
        name: '',
        location: ''
    })
    //ADD A PARTICIPANT
    async function handleAddParticipant(event){
        event.preventDefault()
        const participantData = { participant:participant }
        const participantToAdd = await participantsAPI.addParticipant(participantData)
        setParticipant(participantToAdd)
    }
    //handles the change in the form to ADD
    function handleInputChange(event){
        const addNewParticipant = {...participant, [event.target.name] : event.target.value}
        setParticipant(addNewParticipant)
        console.log(participant)
    }
    return(
        <div>
            <h2 className="register-header">Register for event below</h2>
            <form className="register-form" onSubmit={handleAddParticipant}>
                <input placeholder='Name' 
                name ='name'
                value={participant.name || ''}
                onChange={handleInputChange}>
                </input>
                <input placeholder='Location'
                name ='location'
                value={participant.location || ''}
                onChange={handleInputChange}>
                </input>
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}