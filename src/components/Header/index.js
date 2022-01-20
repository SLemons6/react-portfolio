import React from "react";
const Header = () => {
    return (
        <header>
            <nav class="navbar sticky-top d-flex flex-row align-items-center">
                <div class="container">
                    <div class="navbar-brand">
                        <h1>Shayne Lemons</h1>
                    </div>
                    <ul class="d-flex flex-row pt-3">
                        <li class="mx-3">
                            <a href="#about-me">About Me</a>
                        </li>
                        <li class="mx-3">
                            <a href="#my-projects">My Projects</a>
                        </li>
                        <li class="mx-3">
                            <a href="#contact-me">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;