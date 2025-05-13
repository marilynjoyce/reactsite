import React from 'react';
import './stylesheets/Intro.scss';
import actingVideo from '../assets/acting.mov';
import elPrimo from '../assets/elprimo.webp';
import cal from '../assets/cal.png';
import meta from '../assets/meta.png';
import selfie from '../assets/selfie.png';

const Intro = () => {
    const isMobile = (window.innerWidth <= 768);
    return (
        <div className='master-container' id="about">
            <div className='intro-container'>
                <div className='intro-text'>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
                        <h3>
                            I am a...
                        </h3>
                    </div>
                    <div className='facts'>
                        <div className='fact-item'>
                            <p className='fact'>
                                <b>berkeley'25</b> new grad who studied <b>computer science </b>and <b>economics.</b>
                            </p>
                            <img src={cal} className='fact-image' style={{ width: '8em', height: 'auto' }} />
                        </div>

                        <div className='fact-item'>
                            <p className='fact'>
                                <b>software engineer at Meta</b> experienced in <b>full stack, infrastucture systems, </b>and <b>developer tooling </b>across mobile & web.
                            </p>
                            <img src={meta} className='fact-image' style={{ width: '8em', height: 'auto', marginTop: '-2em' }} />
                        </div>
                        <div className='fact-item'>
                            <p className='fact'>
                                <b>beauty content creator</b> who also loves to <b>act</b> in short films.
                            </p>
                            {isMobile ? (<img src={selfie} style={{ width: '8em', height: 'auto' }} />) : (<video autoPlay muted loop id="video" style={{
                                width: '100%',
                                maxWidth: '250px',
                                height: 'auto',
                                borderRadius: '1em',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                                marginTop: '2em'
                            }}>
                                <source src={actingVideo} type="video/mp4" />
                            </video>)}
                        </div>

                        <div className='fact-item'>
                            <p className='fact'>
                                <b>Jacky and El Primo</b> main on Brawl Stars.
                            </p>
                            <img src={elPrimo} alt='developer' style={{ width: '6em', height: 'auto' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Intro;