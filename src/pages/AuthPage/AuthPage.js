import "./AuthPage.css"
import SignUpForm from '../components/SignUpForm/SignUpForm'
import LoginForm from '../components/LoginForm/LoginForm'
import { useState } from 'react'
import friedClayLogo from '../assets/fried-clay.png'

export default function AuthPage({ user, setUser }) {
	const [signUpModal, setSignUpModal] = useState('')
	return (
		<div className='auth-container'>
			<div className='header-container'>
				<div className='logo'>
					<img className='image' src={friedClayLogo}></img>
				</div>
			</div>
			<div className='login-container'>
				<div className='sign-in-form'>
					<h2 className="login-header">Fried Clay 200k 2023 Event</h2>
					<div className="h-divider"></div>
					<SignUpForm setUser={setUser} user={user}
						signUpModal={signUpModal} setSignUpModal={setSignUpModal} />
					<LoginForm setUser={setUser}
						signUpModal={signUpModal} setSignUpModal={setSignUpModal} />
				</div>
			</div>
		</div>
	)
}
