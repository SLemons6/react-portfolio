import React from 'react';

const Project = props => {
    return (
        <div className="container-fluid">
            <div className="card mb-3 text-center">
                <p className="card-header">
                    {props.name}
                </p>
                <div className="card-body">
                    <img className="img-fluid" src={props.imgSource} alt={props.imgAlt} />
                </div>
                <div className="card-footer">
                <a href={props.link}>GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default Project;
