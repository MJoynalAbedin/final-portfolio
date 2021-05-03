import React from 'react';
import Nav from '../Home/Nav/Nav';
import MyImg from '../../images/myImage.png';
import SkillOfMine from './SkillOfMine/SkillOfMine'

const About = () => {
    return (
        <div className="pb-5" style={{ paddingTop: '100px', backgroundColor: '#292929', fontFamily: 'Georgia'}}>
            <Nav />
            <div style={{ height: '85vh', }} className="d-flex container align-items-center justify-content-center">
                <div class="card bg-dark border-warning" style={{ maxWidth: '38rem' }}>
                    <h3 style={{ color: 'skyblue' }} class="card-header text-center">Junior React JS Developer</h3>
                    <div class="card-body text-warning row d-flex justify-content-center">
                        <img style={{ width: '250px' }} src={MyImg} alt="" className="img-fuid col-md-6" />
                        <div className="col-md-6 mt-2">
                            <h5 class="card-title">I'm Joynal Abedin</h5>
                            <p class="card-text">I'm a student, freelancer, blogger and a Junior ReactJS developer. I live in Chattogram town in Bangladesh. Currently trying to go after my passion 'Coding' and to make a good career with this.</p>
                            <a href="https://drive.google.com/uc?export=download&amp;id=17mV2Zklgh1JuwlfYtA_t-e93rG7SW62z" className="btn btn-outline-warning">DOWNLOAD RESUME</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <SkillOfMine />
            </div>
        </div>
    );
};

export default About;