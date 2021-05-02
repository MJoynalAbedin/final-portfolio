import React from 'react';
import ModernEdu from '../../../images/modernEdu.png';
import HealthyGrocery from '../../../images/healthyGrocery.png';
import MealDB from '../../../images/chicken.png';
import './FirstTwo.css';

const FirstTwo = () => {
    return (
        <section className="container-fluid tech-edu">
            <div className="row">
                <div className="col-md-6 education-text">
                    <div className="container">
                        <h1>Lorem ipsum dolor</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi nisi vero optio
                            dolorum perferendis officia atque cum beatae iste? praesentium commodi. Praesentium velit quas voluptatibus dolorem totam!</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos nesciunt aliquid qui</p>
                        <a href="https://modernedu-499b6.web.app/" rel="noreferrer" target="_blank" className="btn btn-outline-primary">Live Site</a> <a href="https://github.com/MJoynalAbedin/modernEduBD-client"  rel="noreferrer" target="_blank" className="btn btn-outline-warning mr-1">Client</a>
                        <a href="https://github.com/MJoynalAbedin/modernEduBD-Server"  rel="noreferrer" target="_blank" className="btn btn-outline-danger">Server</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="education">
                        <img src={ModernEdu} alt="" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="tech-img">
                        <img src={HealthyGrocery} alt="" />
                    </div>
                </div>
                <div className="col-md-6 tech-text">
                    <div className="mt-5 container">
                        <h1>Lorem ipsum dolor</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi nisi vero optio
                            dolorum perferendis officia atque cum beatae iste? praesentium commodi. Praesentium velit quas voluptatibus dolorem totam!</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos nesciunt aliquid qui</p>
                        <a href="https://healthy-grocery-ced4f.web.app/" rel="noreferrer" target="_blank" className="btn btn-outline-primary">Live Site</a> <a href="https://github.com/MJoynalAbedin/healthyGroceries-Client"  rel="noreferrer" target="_blank" className="btn btn-outline-warning mr-1">Client</a>
                        <a href="https://github.com/MJoynalAbedin/healthyGroceries-Server"  rel="noreferrer" target="_blank" className="btn btn-outline-danger">Server</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 education-text">
                    <div className="container">
                        <h1>Lorem ipsum dolor</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quasi nisi vero optio
                            dolorum perferendis officia atque cum beatae iste? praesentium commodi. Praesentium velit quas voluptatibus dolorem totam!</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos nesciunt aliquid qui</p>
                        <a href="https://mjoynalabedin.github.io/assignment-five/" rel="noreferrer" target="_blank" className="btn btn-outline-primary">Live Site</a> <a href="https://github.com/MJoynalAbedin/assignment-five"  rel="noreferrer" target="_blank" className="btn btn-outline-warning mr-1">Code</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="education">
                        <img src={MealDB} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FirstTwo;