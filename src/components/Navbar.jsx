import React from 'react';
import logo from '../assets/HomeFix.png';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3 border-bottom">
            <a className="navbar-brand d-flex align-items-center" href="#">
                <img
                    src={logo}
                    alt="Logo"
                    width="40"
                    height="40"
                    className="d-inline-block align-text-top me-2"
                />

                <span className="fw-bold fs-4">HomieFix</span>
            </a>
        </nav>
    );
};

export default Navbar;
