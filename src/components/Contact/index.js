import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <div className="container-fluid align-items-start">
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="name">Name:</label>
                    <div className="col-10">
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email address:</label>
                    <div className="col-10">
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="message">Message:</label>
                    <div className="col-10">
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className="form-button" data-testid="button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;