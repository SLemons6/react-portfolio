import React, { useState, useRef } from 'react';
import { validateEmail } from '../../utils/helpers';
import emailjs, { send } from '@emailjs/browser';
import { Modal, Button } from 'react-bootstrap';

const Contact = () => {

    const form = useRef();
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { user_name, user_email, message } = formState;

    const handleChange = (e) => {
        if (e.target.name === 'user_email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                if (e.target.name === 'user_name')
                    setErrorMessage('Your name is required.');
                else if (e.target.name === 'message') {
                    setErrorMessage('A message is required.');
                }
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!errorMessage) {

            emailjs.sendForm('service_2c8tckh', 'contact_form', form.current, 'user_yl8KiNmWEBBa9g96nCAaN')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });

        }
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => {
        if (!errorMessage) {
            setShow(true)
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="mx-5 col-6">
                    <h1>Contact Me</h1>
                    <form id="contact-form" ref={form} onSubmit={sendEmail}>
                        <div className="form-group row mb-2">
                            <label className="col-form-label col-4" htmlFor="name">Name:</label>
                            <div>
                                <input type="text" className="col-12" name="user_name" defaultValue={user_name} onBlur={handleChange} />
                            </div>
                        </div>
                        <div className="form-group row mb-2">
                            <label className="form-label col-4" htmlFor="email">Email address:</label>
                            <div>
                                <input type="email" className="col-12" name="user_email" defaultValue={user_email} onBlur={handleChange} />
                            </div>
                        </div>
                        <div className="form-group row mb-2">
                            <label className="form-label col-2" htmlFor="message">Message:</label>
                            <div>
                                <textarea name="message" className="col-12" rows="5" defaultValue={message} onBlur={handleChange} />
                            </div>
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <button className="form-button mb-3 col-12" data-testid="button" type="submit" onClick={handleShow}>
                            Submit
                        </button>
                    </form>
                </div>
                <div className="col-5 m-auto">
                    <div className="row">
                        <i class=" col-1 bi bi-telephone-fill"></i>
                        <p className="col-8 icon-p">360-213-8473</p>
                    </div>
                    <div className="row">
                        <i class="col-1 bi bi-envelope-fill"></i>
                        <p className="col-8 icon-p">lemonsshayne6@gmail.com</p>
                    </div>
                </div>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                size="lg"
                centered
                keyboard={false}
            >
                <Modal.Body className="text-center">
                    Thank you for contacting me, I will email you back as soon as possible.
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}

export default Contact;