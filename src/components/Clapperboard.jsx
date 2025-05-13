import React, { useEffect, useState, useRef } from 'react';
import ClapperOpen from '../assets/clapperopen.svg';
import ClapperClosed from '../assets/clapperclosed.svg';
import SplashBros from '../assets/splashbros.png';
import './stylesheets/Clapperboard.scss';

const Clapperboard = ({ intervalMs = 300 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const clapperRef = useRef(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsOpen(prev => !prev);
        }, intervalMs);
        return () => clearInterval(timer);
    }, [intervalMs]);

    return (
        <div className="clapperboard-wrapper" ref={clapperRef} id='clapperboard'>
            {/* Clapper Section */}
            <div className="clapper-section">
                <div className="clapper-image">
                    <img
                        src={isOpen ? ClapperOpen : ClapperClosed}
                        alt="Clapperboard"
                        className="clapper-img"
                    />
                </div>
                <p className="clapper-text">
                    I started taking acting classes my sophomore fall<br />
                    at Berkeley Repertory Theatre.<br />
                    I ended up acting in 5 short films throughout college.
                </p>
            </div>

            {/* Splash Bros Section */}
            <div className="splash-section">
                <img
                    src={SplashBros}
                    alt="Splash Bros"
                    className="splash-img"
                />
                <p className="clapper-text">
                    Since I was in the Bay for 4 years,<br />
                    my favorite NBA team is the Warriors<br />
                    (pre–Klay Thompson trade).<br />
                    My favorite player is Steph Curry.
                </p>
            </div>
        </div>
    );
};

export default Clapperboard;
