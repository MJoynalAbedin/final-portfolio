import React from 'react';

const ProjectDetails = ({ project }) => {

    return (
        <div className="col-md-4 d-flex justify-content-center mb-5">
            <div className="card shadow" style={{width: '18rem'}}>
                <img className="card-img-top" alt="" src={project.image} />
                <div class="card-body text-center">
                    <h5 class="card-title text-uppercase">{project.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;