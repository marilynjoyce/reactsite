import React, { useState } from 'react';

const ExperienceCard = ({ icon, info, color, role, date, textColor }) => {
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div
            onClick={handleClick}
            style={{
                backgroundColor: color,
                width: '200px',
                aspectRatio: '1 / 1',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: expanded ? 'flex-start' : 'center',
                padding: '16px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                textAlign: 'center'
            }}
        >
            {!expanded ? (
                <img
                    src={icon}
                    alt="Company logo"
                    style={{ maxWidth: '80%', maxHeight: '80%' }}
                />
            ) : (
                <>
                    <h3 style={{ margin: '0.5rem 0', fontSize: '1rem', color: textColor }}>{role}</h3>
                    <p style={{ margin: '0.25rem 0', fontWeight: 'bold', color: textColor }}>{date}</p>
                    <p style={{ margin: '0.25rem 0', fontSize: '0.85rem', overflowY: 'auto', color: textColor }}>{info}</p>
                </>
            )}
        </div>
    );
};

export default ExperienceCard;
