import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css';
import Typical from 'react-typical'

const Header = () => {
    return (
        <section className="header-section">
            <Nav />
            <main className="container pb-5">
                <div style={{ height: "700px" }} className="d-flex align-items-center">
                    <div className="content">
                        <h2>This is Joynal Abedin Akib</h2>
                        <h1 className="main-text"><Typical
                            steps={['Full Stack Developer', 2000, 'Frontend Developer', 2000, 'Creative Writer', 2000, 'Quick Learner', 2000]}
                            loop={Infinity}
                            wrapper="p"
                        /></h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, repudiandae? Earum quibusdam, laudantium error reprehenderit cupiditate nesciunt deleniti pariatur voluptate.</p>
                    </div>
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L80,202.7C160,213,320,235,480,224C640,213,800,171,960,170.7C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                </div>
            </main>
        </section>
    );
};

export default Header;