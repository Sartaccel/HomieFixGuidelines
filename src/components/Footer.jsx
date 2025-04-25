import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return (
        <footer className="bg-secondary text-light py-4 mt-5">
            <div className="container text-center">
                <p className="mb-2">© 2025 HomieFix. All rights reserved.</p>

                <div className="d-flex justify-content-center gap-3">
                    <a 
                        href="https://www.linkedin.com/company/homiefixindia/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-light fs-5"
                    >
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a 
                        href="https://www.instagram.com/homiefix.in" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-light fs-5"
                    >
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
