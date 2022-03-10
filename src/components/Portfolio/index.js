import React from 'react';
import Project from '../../components/Project';
import projectList from './projectInfo.json';

const Portfolio = () => {

    return (
        <div className="container-fluid d-inline-flex flex-row flex-wrap align-items-center justify-content-evenly">
            {projectList.map((projects) => {
                return (
                    <div className="col-5 m-1">
                            <Project
                                name={projects.name}
                                key={projects.name}
                                imageSrc={projects.imageSrc}
                                imageAlt={projects.imageAlt}
                                desc={projects.desc}
                                link={projects.link}
                            />
                    </div>
                );
            })}
        </div>
    );
};

export default Portfolio;