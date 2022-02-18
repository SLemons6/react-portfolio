import React, { useState, useRef } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { user_name, user_email, message } = formState;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2c8tckh', 'contact_form', form.current, 'user_yl8KiNmWEBBa9g96nCAaN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

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
        <div className="container-fluid justify-content-center">
            <div className="mx-5">
                <h1>Contact Me</h1>
                <form id="contact-form" ref={form} onSubmit={sendEmail}>
                    <div className="form-group row mb-2">
                        <label className="col-form-label col-2" htmlFor="name">Name:</label>
                        <div>
                            <input type="text" className="col-6" name="user_name" defaultValue={user_name} onBlur={handleChange} />
                        </div>
                    </div>
                    <div className="form-group row mb-2">
                        <label className="form-label col-2" htmlFor="email">Email address:</label>
                        <div>
                            <input type="email" className="col-6" name="user_email" defaultValue={user_email} onBlur={handleChange} />
                        </div>
                    </div>
                    <div className="form-group row mb-2">
                        <label className="form-label col-2" htmlFor="message">Message:</label>
                        <div>
                            <textarea name="message" className="col-6" rows="5" defaultValue={message} onBlur={handleChange} />
                        </div>
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button className="form-button mb-2" data-testid="button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;