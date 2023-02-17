import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import AuthPage from '../AuthPage/AuthPage'
import AddParticipants from '../AddParticipants/AddParticipants'
import EventPage from '../EventPage/EventPage'

import { getUser } from '../../utilities/users-services'

function App() {
	const [user, setUser] = useState(getUser())

	return (
		<main className="App">
			{user ? (
				<>
					<NavBar user={user} setUser={setUser}/>
					<Routes>
						<Route path="/orders/new" element={<AddParticipants />} />
						<Route path="/orders" element={<EventPage />} />
                        <Route path="/" element=""/>
					</Routes>
				</>
			) : (
				<AuthPage setUser={setUser} user={user} />
			)}
		</main>
	)
}

export default App

