import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formState, setFormState] = useState({ user_name: '', user_email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { user_name, user_email, message } = formState;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2c8tckh', 'contact_form', formState.current, 'user_yl8KiNmWEBBa9g96nCAaN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        // const handleSubmit = (e) => {
        //     e.preventDefault();
        //     if (!errorMessage) {
        //         console.log('Submit Form', formState);
        //     }
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
                <form id="contact-form" onSubmit={sendEmail}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="user_name">Name:</label>
                        <div className="col-10">
                            <input type="text" name="user_name" defaultValue={user_name} onBlur={handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="user_email">Email address:</label>
                        <div className="col-10">
                            <input type="email" name="user_email" defaultValue={user_email} onBlur={handleChange} />
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