import React, { useState } from 'react';
import './stylesheets/Navbar.scss';
import resume from '../assets/marilyn_yu_resume.pdf';

const Navbar = () => {
    const [isMinimized, setIsMinimized] = useState(false);

    const toggleNavbar = () => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div className={`navbar-container ${isMinimized ? 'minimized' : ''}`}>
            <button className="toggle-btn" onClick={toggleNavbar}>
                {isMinimized ? '+' : '-'}
            </button>
            <div className={`row ${isMinimized ? 'hidden' : ''}`}>
                <a href="#home" className="button">Home</a>
                <a href="#about" className="button">About</a>
                <a href="#experience" className="button">Experience</a>
                <a href={resume} target="_blank" className="button">Resume</a>
                <a href="#contact" className="button">Contact</a>
            </div>
        </div>
    );
};

export default Navbar;