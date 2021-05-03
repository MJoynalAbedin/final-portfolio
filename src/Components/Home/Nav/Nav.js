import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="navbar fixed-top bg-of-nav navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand logo-style" href="/home">Joynal Abedin</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link ml-3 nav-li-style" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-3 nav-li-style" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-3 nav-li-style" to="/about">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-3 nav-li-style" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;