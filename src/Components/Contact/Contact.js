import React from 'react';
import Nav from '../Home/Nav/Nav';
import './Contact.css';
import emailjs from 'emailjs-com';

const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_763ajti', 'template_ympszac', e.target, 'user_gFl4TiEDVk4z4EmYRi4Zu')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
}

const Contact = () => {
    return (
        <section style={{ height: '100vh', fontFamily: "calibri", backgroundColor: '#292929', paddingTop: '80px' }} className="contact">
            <Nav />
            <div className="text-white text-center">
                <h2> <span style={{ color: '#FF5722' }}>CONTACT</span> ME</h2>
                <h5 className="text-warning">I Would Really Like To Hear From You!</h5>
            </div>
            <div className="container">
                <div className="col-md-9 mx-auto">
                    <form onSubmit={sendEmail}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Please Enter Your Name" name="name" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Please Enter Your Email Address" name="email" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="" cols="30" rows="10" placeholder="Describe What Is In Your Mind" name="message" ></textarea>
                        </div>
                        <div className="form-group text-center">
                            <input type="submit" className="btn btn-outline-warning" value=" SEND MESSAGE "></input>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;