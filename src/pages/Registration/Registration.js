import { useNavigate } from 'react-router-dom'
import * as participantsAPI from '../../utilities/participants-api'
import './Registration.css'
import Map from '../components/Map/Map'

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
		<div className="register-form-container">
        
			<div className="register-header">Register for the Event</div>
			<form className="register-form" onSubmit={handleAddParticipant}>
				<input
					placeholder="Name"
					name="name"
					value={participant.name || ''}
					onChange={handleInputChange}
				></input>
				<input
					placeholder="Location"
					name="location"
					value={participant.location || ''}
					onChange={handleInputChange}
				></input>
				<button className="register-button" type="submit">
					Register
				</button>
			</form>
		</div>
	)
}
{
	/* <Link className='link' to="/events">
                <button type='submit'>Register</button></Link> */
}
