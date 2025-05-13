import React, { useEffect, useRef, useState } from 'react';
import Typewriter from 'typewriter-effect';
import './stylesheets/Experience.scss';

const ExperienceTitle = () => {
    const [startTyping, setStartTyping] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!titleRef.current) return;

            const rect = titleRef.current.getBoundingClientRect();
            const inView = rect.top < window.innerHeight && rect.bottom > 0;

            setStartTyping(inView); // true when in view, false when out
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // run on initial mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="experience-title-container" ref={titleRef}>
            <div className="card">
                {startTyping && (
                    <Typewriter
                        key={Date.now()} // Forces remount every time it's shown
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(50)
                                .typeString('← Experience →')
                                .start();
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default ExperienceTitle;
