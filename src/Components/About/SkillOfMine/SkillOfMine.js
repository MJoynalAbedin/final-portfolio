import React from 'react';
import './SkillOfMine.css'

const SkillOfMine = () => {
    return (

        <div style={{fontFamily:'Georgia'}} className="container">
            <h1 style={{ color: 'white'}} className="text-center mb-5">My <span style={{color: '#FF5722'}}>Skills</span></h1>
            <div className="row">
                <div className="col-md-4">
                    <h5 className="text-center text-info">EXPERTISE</h5>
                    <p className="d-flex justify-content-center">
                        <div className="expertise">HTML</div>
                        <div className="expertise">CSS</div>
                        <div className="expertise">Bootstrap</div>
                    </p>
                </div>
                <div className="col-md-4">
                    <h5 className="text-center text-warning ">COMFORTABLE WITH</h5>
                    <div className="row d-flex justify-content-center">
                        <div className="comfortable col-3">JavaScript</div>
                        <div className="comfortable col-3">ES6</div>
                        <div className="comfortable col-3">React JS</div> <br/>
                        <div className="comfortable col-3">Material UI</div>
                        <div className="comfortable col-3">React Bootstrap</div>
                        <div className="comfortable col-3">Firebase</div>
                        <div className="comfortable col-3">Node JS</div> <br/>
                        <div className="comfortable col-3">Express JS</div>
                        <div className="comfortable col-3">MongoDB</div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h5 className="text-center text-danger">FAMILIAR WITH</h5>
                    <div className="row d-flex justify-content-center">
                        <div className="familiar col-3">Redux</div>
                        <div className="familiar col-3">React Native</div>
                        <div className="familiar col-3">Stripe</div>
                        <div className="familiar col-3">TypeScript</div>
                        <div className="familiar col-3">EcmaScript </div>
                        <div className="familiar col-3">Next JS</div>
                        <div className="familiar col-3">Vue JS</div>
                    </div>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-md-4">
                    <div class="card bg-dark border-info mb-3" style={{ maxWidth: '18rem'}}>
                        <h5 class="card-header text-center text-info">EXPERTISE</h5>
                        <div class="card-body">
                            <p class="card-text"><div className="expertise">HTML</div><div className="expertise">CSS</div><div className="expertise">Bootstrap</div></p>
                            <p style={{color: 'skyblue'}} >I can make amazing looking and Responsive Frontend Design with HTML, CSS and Bootstrap</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card bg-dark border-warning mb-3" style={{ maxWidth: '18rem'}}>
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <p class="card-text"><div className="comfortable">JavaScript</div><div className="comfortable">ES6</div><div className="comfortable">React JS</div><div className="comfortable">Material UI</div><div className="comfortable">React Bootstrap</div><div className="comfortable">Firebase</div><div className="comfortable">Node JS</div><div className="comfortable">Express JS</div><div className="comfortable">MongoDB</div></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card bg-dark border-danger mb-3" style={{ maxWidth: '18rem'}}>
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Info card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default SkillOfMine;