import React from 'react';
import Header from './Header/Header';
import AboutMe from './AboutMe/AboutMe';
import MyProjects from './MyProjects/MyProjects';
import LetsMake from './LetsMake/LetsMake';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <AboutMe />
            <MyProjects />
            <LetsMake />
            <Footer />
        </div>
    );
};

export default Home;