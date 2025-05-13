import React from 'react';

import rimPart from '../assets/hoop.svg'

import './stylesheets/Hoop.scss';

const PhotoHoop = (props) => {
    return (
        <div className='hoop' id='hoop'>
            <img src={rimPart} style={{ top: props.rimTop }} className='photo-rim' alt='hoop' />
        </div>
    )
}
export default PhotoHoop;