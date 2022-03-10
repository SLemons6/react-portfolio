import React from 'react';

const Project = props => {
    return (
        <div>
            <div className="card mb-3 text-center">
                <p className="card-header">
                    {props.name}
                </p>
                <div className="card-body">
                    <img className="img-fluid" src={props.imageSrc} alt={props.imageAlt} />
                    <p className="card-text">
                        {props.desc}
                    </p>
                </div>
                <div className="card-footer">
                    <a href={props.link} target="_blank">Link</a>
                </div>
            </div>
        </div>
    );
};

export default Project;
