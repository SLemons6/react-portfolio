import React from "react";
const Navigation = () => {
    return (
            <nav className="navbar sticky-top d-flex flex-row align-items-center mb-5">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <h1>Shayne Lemons</h1>
                    </div>
                    <ul className="d-flex flex-row pt-3">
                        <li className="mx-3 fw-bolder">
                            <a href="/">About Me</a>
                        </li>
                        <li className="mx-3 fw-bolder">
                            <a href="/portfolio">Portfolio</a>
                        </li>
                        <li className="mx-3 fw-bolder">
                            <a href="/resume">Resume</a>
                        </li>
                        <li className="mx-3 fw-bolder">
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
    );
};

export default Navigation;