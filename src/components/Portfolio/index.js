import React from 'react';
import Project from '.components/Project';
import projectList from './projectInfo.json';

const Portfolio = () => {

    return (
        <div>
            {projectList.map((projects) => {
                return (
                    <Project
                    name={projects.name}
                    imageSrc={projects.imageSrc}
                    imageAlt={projects.imageAlt}
                    link={project.link}
                    />
                );
            })}
        </div>
    );
};

export default Portfolio;