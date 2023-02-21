import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import AuthPage from '../AuthPage/AuthPage'
import ManagePage from '../ManagePage/ManagePage'
import Registration from '../Registration/Registration'
import EventPage from '../EventPage/EventPage'
import {Map, Info} from '../components/Map/Map'

import { getUser } from '../../utilities/users-services'

function App() {
	const [user, setUser] = useState(getUser())
	const [participant, setParticipant] = useState({
		name: '',
		location: '',
	})

	return (
		<main className="App">
			{user ? (
				<>
					<NavBar user={user} setUser={setUser} />
					<Routes>
						<Route
							path="/events/register"
							element={
								<Registration
									participant={participant}
									setParticipant={setParticipant}
								/>
							}
						/>
						<Route path="/events" element={<EventPage />} />
						<Route path="/manage" element={<ManagePage />} />
						<Route path="test/" element={<Map />} />
						<Route path="/" element={<EventPage />} />
						<Route path="/*" element={<EventPage />} />
					</Routes>
				</>
			) : (
				<AuthPage setUser={setUser} user={user} />
			)}
		</main>
	)
}

export default App
