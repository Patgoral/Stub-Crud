import "./ManagePage.css"
import { getUser } from '../../utilities/users-services';
import { useState, useEffect } from 'react';
import * as participantsAPI from '../../utilities/participants-api';

export default function ManagePage() {
  const [participants, setParticipants] = useState([]);
  const currentUser = getUser()
  let participantList;

  useEffect(() => {
    async function getAllParticipants() {
      const participants = await participantsAPI.showParticipants()
      setParticipants(participants)
    }
    getAllParticipants()
  }, [])

  async function handleDeleteParticipant(id) {
    await participantsAPI.removeParticipant(id)
    setParticipants(participants.filter(p => p._id !== id))
  }

  if (participants.length !== 0) {
    participantList = participants.participants.map((participant) => {
      if (participant.owner === currentUser._id) {
        return (
          <div className='list-of-attendees' key={participant._id}>
            <div>{participant.name}</div>
            <div>{participant.location}</div>
            <button onClick={() => handleDeleteParticipant(participant._id)}>
              X
            </button>
          </div>
        )
      }
    })
  }

  return (
    <div>
      <h2>Manage Registration</h2>
      {participantList}
    </div>
  )
}
