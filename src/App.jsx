import React, { useState } from 'react';

import PhotoHoop from './components/PhotoHoop'
import Typewriter from 'typewriter-effect';
import Introduction from './components/Introduction'
import Clapperboard from './components/Clapperboard';
import Basketball from './assets/basketball.svg'
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import grad from './assets/grad.png';
import { useMediaQuery } from 'react-responsive';
import profile from './assets/grad.JPG';
import './App.css';

function App() {
  const [scrolled, setScroll] = useState(false);

  window.onscroll = function () {
    scrollRotate();

    // If user scrolls a bit down
    if (window.scrollY >= window.innerHeight / 15) {
      setScroll(true);
    }
    else {
      setScroll(false);
    }
  };

  function scrollRotate() {
    let image = document.getElementById("basketball-ball");
    image.style.transform = "rotate(" + window.pageYOffset / 4 + "deg)";
  }
  const isMobilePortrait = useMediaQuery({ query: '(max-width: 768px) and (orientation: portrait)' });

  let rimTop;
  if (isMobilePortrait) {
    rimTop = '104em';
  } else {
    rimTop = '57em';
  }
  let rimTop2;

  if (isMobilePortrait) {
    rimTop2 = '238em';
  } else {
    rimTop2 = '104em';
  }

  let rimTop3;
  if (isMobilePortrait) {
    rimTop3 = '311em';
  } else {
    rimTop3 = '146em';
  }

  return (
    <div className='App'>
      <div className='App-header' id='home'>
        <Navbar />
        <div className={scrolled ? '' : 'scroll-down'} />
        {!isMobilePortrait && (
          <div style={{ position: 'absolute', left: 100, top: '3em', padding: '10px' }}>
            <img src={profile} width={300} />
          </div>
        )}
        <div className='basketball-container'>
          <img
            src={Basketball}
            id='basketball-ball'
            alt='basketball'
          />
        </div>
        <div className="name-top">
          <h1>Marilyn Yu</h1>
        </div>
        <div className='name-container'>
          {scrolled ?
            null
            :
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(50)
                  .typeString('Hey, my name is Marilyn, 余欣茵, mare.')
                  .start();
              }}
            />
          }
        </div>
        <PhotoHoop rimTop={rimTop} />
        <Introduction />
        <Clapperboard />
        <Experience />
        <PhotoHoop
          rimTop={rimTop2}
        />
        <div className='dog'><img src={grad} width={isMobilePortrait ? 340 : 450} /> </div>
        <PhotoHoop rimTop={rimTop3} />
        <div className='typewriter-last'>
          <Typewriter
            key={Date.now()} // Forces remount every time it's shown
            onInit={(typewriter) => {
              typewriter
                .changeDelay(50)
                .typeString('Thank you for your time!')
                .start();
            }}
          />
        </div>
        <Footer />
      </div>
    </div >
  );
}

export default App;