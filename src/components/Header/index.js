import React from "react";
const Header = () => {
    return (
        <header>
            <nav class="navbar sticky-top d-flex flex-row align-items-center">
                <div class="container-fluid">
                    <div class="navbar-brand">
                        <h1>Shayne Lemons</h1>
                    </div>
                    <ul class="d-flex flex-row pt-3">
                        <li class="mx-3">
                            <a href="/">Home</a>
                        </li>
                        <li class="mx-3">
                            <a href="/works">My Projects</a>
                        </li>
                        <li class="mx-3">
                            <a href="/contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;