import React from 'react';

const Contact = () => {
    return (
        <section id="contact-me">
        <div class="container-fluid py-4">
            <div class="row">
                <div class="col-2 sidebar">
                    <h2 class="text-end pt-4">Contact Me</h2>
                </div>
                <div class=" col-10 content pt-4 align-items-center">
                    <ul class="d-flex flex-row justify-content-evenly">
                        <li>
                            <span>
                                <i class="fas fa-envelope"></i>
                            </span>
                            <a href="mailto: lemonsshayne6@gmail.com">lemonsshayne6@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Contact;