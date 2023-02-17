import { checkToken } from '../../utilities/users-services'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as participantsAPI from '../../utilities/participants-api'
import './EventPage.css'
import logo from './assets/fried-clay.png'

export default function EventPage() {
    const [participants, setParticipants] = useState([])
    let participantList;
    const navigate = useNavigate()

    async function handleCheckToken() {
        checkToken()
        navigate('/manage')
    }

    useEffect(function () {
        async function getAllParticipants() {
            const participants = await participantsAPI.showParticipants()
            setParticipants(participants)
        }
        getAllParticipants()
    }, [])

    if (participants.length !== 0) {
        participantList = participants.participants.map((participant) => (
            <div className='list-of-attendees' key={participant._id}>
                <div>{participant.name}</div>
                <div>{participant.location}</div>
            </div>
        ))
    }



    return (


        <div className='event-page'>
            <h2>Event Page</h2>
            <div className='event-page-container-top'>
                <div className='logo'>
                    <img className='logo-img' src={logo}></img>
                </div>
                <button onClick={handleCheckToken}>Manage Registration</button>
            </div>
            <div className='event-page-container-bottom'>
                <div className='event-desc-container'>
                    <div className='event-desc-header'>Event  Description</div>
                    <div className='event-desc-body'>This is a Very Awesome Event. Please Join Us for an Adventure!</div>
                </div>
                <div className='attendees-container'>
                    <div className='attendees-header'>List of Attendees</div>
                    {participantList}
                </div>
            </div>
        </div>
    )
}
