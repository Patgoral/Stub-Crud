import "./AuthPage.css"
import SignUpForm from '../components/SignUpForm/SignUpForm'
import LoginForm from '../components/LoginForm/LoginForm'

export default function AuthPage({ user, setUser }) {
	return (
		<>
			<h2>Welcome to <i>STUBCRUD</i></h2>
			<SignUpForm setUser={setUser} user={user} />
			<LoginForm setUser={setUser} />
		</>
	)
}
