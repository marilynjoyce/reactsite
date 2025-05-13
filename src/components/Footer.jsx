import React from 'react';
import { data } from '../assets/data/links'
import './stylesheets/Footer.scss';

const Footer = () => {
    return (
        <div className='footer' id={'contact'}>
            <div className='footer-links'>
                {data.map((sm, i) => (
                    <a href={sm.link} key={i} target="blank">
                        <img className="single-link" src={sm.icon} alt={sm.link} />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Footer;