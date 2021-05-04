import React from 'react';
import MyPic from '../../../images/myPic.jpg';
import MyServices from '../MyServices/MyServices';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div style={{ fontFamily: 'Georgia' }} className="mb-5">
            <div className="d-flex justify-content-center">
                <h3 className="mb-3">____ABOUT ME____</h3>
            </div>
            <section className="section-1 pb-5">
                <div className="container-fluid">
                    <div className="row p-5">
                        <div className="col-md-5 myImage">
                            <img className="img-fluid" src={MyPic} alt="" />
                        </div>
                        <div className="col-md-7 align-self-center mt-2">
                            <h2 style={{ marginBottom: '-20px' }}>I'm <span style={{ color: '#FF5722' }}>Joynal Abedin</span></h2>
                            <p className="text-secondary my-5">
                                As you've already known what I am inn brief, but Maybe I should describe myself a little bit more. Starting with my background, I live at Chattogram town in Bangladesh. I am a learner rather being a student and that makes me learn something new everyday.
                            <br />
                            I was passionate about coding since I had watched 'Iron Man' movie and I have got directly involved in this a year ago. I am almost an expert in Basic HTML, CSS and a framework, Bootstrap. And I'm comfortable with React JS, Firebase, Node JS, MongoDB etc as I have completed more than 6 projects with them. You can see each and every of my skills in my resume.
                        </p>
                            <a href="https://drive.google.com/uc?export=download&amp;id=17mV2Zklgh1JuwlfYtA_t-e93rG7SW62z" className="btn btn-outline-warning">DOWNLOAD RESUME</a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h4>MY <span style={{ color: '#FF5722' }}>SERVICES</span></h4>
                        <hr />
                    </div>
                    <MyServices />
                </div>
            </section>
        </div>
    );
};

export default AboutMe;