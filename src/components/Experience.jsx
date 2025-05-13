import React from 'react';
import exp from '../assets/data/experience.js';
import './stylesheets/Experience.scss';
import ExperienceCard from './ExperienceCard.jsx';
import ExperienceTitle from './ExperienceTitle.jsx';

const Experience = () => {
    const half = Math.ceil(exp.length / 2);
    const firstRow = exp.slice(0, half);
    const secondRow = exp.slice(half);

    return (
        <div className="experience-container" id='experience'>
            <div className="left-column">
                {firstRow.map((item, index) => (
                    <ExperienceCard
                        key={index}
                        {...item}
                    />
                ))}
            </div>
            <ExperienceTitle />
            <div className="right-column">
                {secondRow.map((item, index) => (
                    <ExperienceCard
                        key={index + half}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
};

export default Experience;