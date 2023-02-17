import { checkToken } from '../../utilities/users-services'

export default function EventPage() {


    async function handleCheckToken() {
        checkToken()
    }
    return (
        <>
            <img src='' alt='Logo here'/>
            <h2>Maaaain Events</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat augue, auctor vitae tristique non, aliquam non metus. Praesent non varius neque. Nullam tincidunt rhoncus hendrerit. Nullam vel pellentesque ligula, sed scelerisque lacus. Quisque porttitor scelerisque eros sit amet tincidunt. Curabitur laoreet tellus neque, quis semper ante placerat dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis varius lectus, sit amet interdum metus.</p>
            <h3>Atendee List</h3>
            <ul>
                <li>participant</li>
                <li>participant</li>
                <li>participant</li>
                <li>participant</li>
                <li>participant</li>
            </ul>
        </>
    )
}