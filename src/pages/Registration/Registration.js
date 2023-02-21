import { useNavigate } from 'react-router-dom'
import * as participantsAPI from '../../utilities/participants-api'
import './Registration.css'
import { Map, Info } from '../components/Map/Map'

export default function Registration({ participant, setParticipant }) {
    const navigate = useNavigate()

    //ADD A PARTICIPANT
    async function handleAddParticipant(event) {
        event.preventDefault()
        const participantData = { participant: participant }
        const participantToAdd = await participantsAPI.addParticipant(
            participantData
        )
        setParticipant(participantToAdd)
        navigate('/events')
    }
    //handles the change in the form to ADD
    function handleInputChange(event) {
        const addNewParticipant = {
            ...participant,
            [event.target.name]: event.target.value,
        }
        setParticipant(addNewParticipant)
    }

    return (
        <div className='wrap-div'>
        <div className='register-page'>
        <div className='flex-item'><Info />
                <div className="register-form-container">

                    <div className="register-header">Enter your Info below to Join Us!</div>
                    <form className="register-form" onSubmit={handleAddParticipant}>
                        <div>
                        <input
                            placeholder="Name"
                            name="name"
                            value={participant.name || ''}
                            onChange={handleInputChange}
                        />
                        <input
                            placeholder="Location"
                            name="location"
                            value={participant.location || ''}
                            onChange={handleInputChange}
                        />
                        </div>
                        <button className="register-button" type="submit">
                            Register
                        </button>
                    </form>
                </div>
            </div>
            <div className='flex-item'><Map /></div>
        </div>
        </div>
    )
}