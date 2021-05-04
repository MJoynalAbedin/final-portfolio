import React from 'react';
import Footer from '../Home/Footer/Footer';
import Nav from '../Home/Nav/Nav';
import FirstTwo from './FirstTwo/FirstTwo';

const Projects = () => {
    return (
        <div style={{backgroundColor: '#292929', height: '100%', paddingTop: '80px', paddingBottom: '15px',color: 'white', fontFamily: 'Goergia'}}>
            <Nav />
            <h1 className="text-center my-portfolio">My <span style={{color: '#FF5722'}}> Portfolio </span></h1>
            <FirstTwo />
            <Footer />
        </div>
    );
};

export default Projects;