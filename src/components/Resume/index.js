import React from "react";

const Resume = () => {
    return (
        <div className="mx-5">
            <div>
                <a href='resume.pdf' download>
                    <h2 className="resume-link text-center">Download My Resume!</h2>
                </a>    
            </div>
            <div>
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
        </div>
    );
};

export default Resume;