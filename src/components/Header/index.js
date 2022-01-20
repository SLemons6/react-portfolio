import React from "react";
const Header = () => {
    return (
        <header>
            <nav className="navbar sticky-top d-flex flex-row align-items-center">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <h1>Shayne Lemons</h1>
                    </div>
                    <ul className="d-flex flex-row pt-3">
                        <li className="mx-3">
                            <a href="/">Home</a>
                        </li>
                        <li className="mx-3">
                            <a href="/portfolio">Portfolio</a>
                        </li>
                        <li className="mx-3">
                            <a href="/resume">Resume</a>
                        </li>
                        <li className="mx-3">
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;