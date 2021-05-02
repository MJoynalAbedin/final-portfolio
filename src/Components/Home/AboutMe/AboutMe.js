import React from 'react';
import MyPic from '../../../images/myPic.jpg';
import MyServices from '../MyServices/MyServices';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className="mb-5">
            <div className="d-flex justify-content-center">
                <h3 className="mb-3">____ABOUT ME____</h3>
            </div>
            <section className="section-1">
                <div className="container">
                    <div className="row p-5">
                        <div className="col-md-5 myImage">
                            <img className="img-fluid" src={MyPic} alt="" />
                        </div>
                        <div className="col-md-7 align-self-center mt-2">
                            <h2 style={{ marginBottom: '-15px' }}>I'm Joynal Abedin</h2>
                            <p className="text-secondary my-5">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, non! Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, facere?
                            <br /> <br />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, reprehenderit?
                        </p>
                            <a href="https://drive.google.com/uc?export=download&amp;id=17mV2Zklgh1JuwlfYtA_t-e93rG7SW62z" className="btn btn-outline-warning">DOWNLOAD RESUME</a>
                        </div>
                    </div>
                    <div className="text-center">
                        <h4>MY SERVICES</h4>
                        <hr/>
                    </div>
                    <MyServices />
                </div>
            </section>
        </div>
    );
};

export default AboutMe;