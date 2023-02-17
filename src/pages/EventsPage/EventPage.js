import { checkToken } from '../../utilities/users-services'
import { useState, useEffect } from 'react'
import * as participantsAPI from '../../utilities/participants-api'
import placeholder from "../../images/placeholder.jpg"

export default function EventPage() {
    // const [participants, setParticipant] = useState([])

    // async function handleGetParticipant(event) {
    //     event.preventDefault()
    //     const allParticipants = await participantsAPI.getAll()
    //     setParticipant(allParticipants)
    // }
    // useEffect(() => {
    //     handleGetParticipant();
    //     }, []);

    return (
        <>
            <img src={placeholder} alt='Logo here' />
            <h2>Maaaain Events</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat augue, auctor vitae tristique non, aliquam non metus. Praesent non varius neque. Nullam tincidunt rhoncus hendrerit. Nullam vel pellentesque ligula, sed scelerisque lacus. Quisque porttitor scelerisque eros sit amet tincidunt. Curabitur laoreet tellus neque, quis semper ante placerat dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis varius lectus, sit amet interdum metus.</p>
            <h3>Atendee List</h3>
            {/* <ul>
                {participants.map((participant) => (
                    <li key={participant.id}>{participant.name}</li>
                ))}
            </ul> */}
        </>
    )
}