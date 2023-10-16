import React from 'react';
import catface from './images/koska.JPG';
import './style.css';
import PlayButton from './PlayButton';
import Spline from './Spline';

function App() {
  return (
    <div className="main-container">
      <div id="content">
        <div className="left-section">
          <PlayButton />
          <div className="spline-container">
            <Spline />
          </div>
        </div>
        <div className="right-section">
          <img src={catface} alt="Koska Logo" className="koska-logo" />
        </div>
      </div>
      <footer>
        <div className="footer-left">
          <h2>About Us</h2>
          <p>
            An online community radio based in Maastricht, dedicated to streaming the less-heard, and the off-kilter.
            We hope to showcase (non-)local sounds, carefully curated by people's taste - boundless of genre. The studio serves as an open space for all people to enjoy music, hang around and have fun. If you think you have 
            something to bring: get in touch.
          </p>
        </div>
        <div className="footer-right">
          <div className="contact-section">
            <h2>CONTACT</h2>
            <p><a href="mailto:info@koskaradio.net">info@koskaradio.net</a></p>
            <p><a href="https://www.instagram.com/koska_radio/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
            <p><a href="https://on.soundcloud.com/LG9iX" target="_blank" rel="noopener noreferrer">Soundcloud</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

