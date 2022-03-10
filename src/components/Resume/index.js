import React from "react";

const Resume = () => {
    return (
        <div className="mx-5 container" id="resume">
            <div className="mx-auto row">
                <a href='resume.docx' className="col-4 offset-2" download>
                    <button className="resume-link text-center">Download Resume</button>
                </a>
                <a href='https://docs.google.com/document/d/1Sv-3UT1HlnaE0n5YYkiFeTfbRQZe7hZ_prkMiFZ2eLc/edit?usp=sharing' className="col-4 offset-2" target='_blank'>
                    <button className="resume-link text-center">View Resume</button>
                </a>
            </div>
            <div className="row mx-auto">
                <div className="col-6 border-right">
                    <h2>Skills/Proficiencies</h2>
                    <ul className="resumeList">
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Bulma CSS</li>
                        <li>APIs, including Web, Third-Party, and Servide-Side</li>
                        <li>Node</li>
                        <li>Object-Oriented Programming</li>
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>GraphQL</li>
                        <li>Object-Relational Mapping</li>
                        <li>Model-View-Controller</li>
                        <li>NoSQL</li>
                        <li>Mongoose</li>
                        <li>MongoDB</li>
                        <li>Progressive Web Applications</li>
                        <li>React</li>
                        <li>State</li>
                    </ul>
                </div>
                <div id="resume-col-6" className="col-6 text-center">
                    <h2>Experience</h2>
                    <dl className="row">
                        <dt className="col-4 my-auto">
                            May 2020 - October 2020
                        </dt>
                        <dd className="col-8 resume-experience">
                            <h5>Kinetic Operator</h5>
                            <h6>Vigor Industrial</h6>
                            <p>
                                Operated Kinetic K5000 CNC machines to cut stainless steel and carbon steel to produce finished and unfinish parts to be further machined
                                Adjusted speed/feed settings for Kennametal drills for different materials
                                Operated overhead crane, including rigging material to be lifted using chains, lifting clamps, and plate hooks
                                Cleaned and maintained machines, as well as tools required to run the machine
                            </p>
                        </dd>
                    </dl>
                    <dl className="row">
                        <dt className="col-4 my-auto">
                            February 2015 - May 2020
                        </dt>
                        <dd className="col-8 resume-experience">
                            <h5>Kinetic Operator</h5>
                            <h6>Columbia Machine, Inc.</h6>
                            <p>
                                Operated Kinetic 2500 and K5000 CNC machines to drill, mill, tap, countersink, and plasma and flame cut different alloys of carbon steel to produce finished and unfinished parts to be further machined
                                Operated overhead crane, including rigging material to be lifted using chains, lifting clamps, and plate hooks
                                Loaded material to be cut and unloading parts and scrap using overhead cranes and forklift
                                Cleaned and maintained machines, as well as tools required to run the machine

                            </p>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Resume;