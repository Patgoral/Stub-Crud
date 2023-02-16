import "./AddParticipants.css"

export default function AddParticipants() {
    return(
        <div>
            <h2 className="register-header">Register for event below</h2>
            <form className="register-form">
                <input placeholder="Name">
                </input>
                <input placeholder="Location">
                </input>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}