import React from 'react';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import Modern from '../../../images/modernEdu.png';
import Chicken from '../../../images/chicken.png';
import Healthy from '../../../images/healthyGrocery.png';

const projectData = [
    {
        name: 'Modern Edu BD',
        Technologies: "HTML, CSS, ReactJS, Bootstrap, Firebase, NodeJS, MongoDB",
        description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: '21 March, 2021',
        image: Modern
    },
    {
        name: 'Modern Edu BD',
        Technologies: "HTML, CSS, ReactJS, Bootstrap, Firebase, NodeJS, MongoDB",
        description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: '21 March, 2021',
        image: Healthy
    },
    {
        name: 'Modern Edu BD',
        Technologies: "HTML, CSS, ReactJS, Bootstrap, Firebase, NodeJS, MongoDB",
        description: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        date: '21 March, 2021',
        image: Chicken
    }

]

const MyProjects = () => {
    return (
        <div>
            <h4 className="text-center mb-5">MY RECENT PROJECTS</h4>
            <div className="d-flex justify-content-center container">
                <div className="row">
                    {
                        projectData.map(project => <ProjectDetails project={project} ></ProjectDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProjects;