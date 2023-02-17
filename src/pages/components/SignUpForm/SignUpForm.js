import React, { Component } from "react";
import { signUp }  from '../../../utilities/users-services'
import "./SignUpForm.css"

export default class SignUpModal extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: '',
        isOpen: false
    }

    openModal = () => {
        this.setState({ isOpen: true });
    }

    closeModal = () => {
        this.setState({
            name: '',
            email: '',
            password: '',
            confirm: '',
            error: '',
            isOpen: false
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            error: ''
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const formData = { ...this.state }
            delete formData.error
            delete formData.confirm
            const user = await signUp(formData)
            this.props.setUser(user)
            this.closeModal();
        } catch (error) {
            console.error(error)
            this.setState({
                error: 'Sign up failed - try again later'
            })
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;

        return (
            <>
                <button onClick={this.openModal}>Sign Up</button>
                {this.state.isOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={this.closeModal}>❌</span>
                            <SignUpForm
                                name={this.state.name}
                                email={this.state.email}
                                password={this.state.password}
                                confirm={this.state.confirm}
                                error={this.state.error}
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                disable={disable}
                            />
                        </div>
                    </div>
                )}
            </>
        )
    }
}

function SignUpForm(props) {
    return (
        <div className='form-container'>
            <form autoComplete='off' onSubmit={props.handleSubmit}>
                <label>Name</label>
                <input
                    type='text'
                    name='name'
                    value={props.name}
                    onChange={props.handleChange}
                    required
                />
                <label>Email</label>
                <input
                    type='email'
                    name='email'
                    value={props.email}
                    onChange={props.handleChange}
                    required
                />
                <label>Password</label>
                <input
                    type='password'
                    name='password'
                    value={props.password}
                    onChange={props.handleChange}
                    required
                />
                <label>Confirm</label>
                <input
                    type='password'
                    name='confirm'
                    value={props.confirm}
                    onChange={props.handleChange}
                    required
                />
                <button type='submit' disabled={props.disable}>Sign Up</button>
            </form>
            <p className='error-message'>{props.error}</p>
        </div>
    )
}
