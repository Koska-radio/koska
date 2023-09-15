import React from 'react';
import catface from './images/koska.JPG';
import './style.css';
import PlayButton from './PlayButton';
import Marquee from './Marquee';
import Spline from './Spline';

function App() {
  return (
    <>
      <div id="content">
        <div className="left-section">
          <div id="header-container">
            <h1 className="footer-header">KOSKA RADIO</h1>
            <PlayButton />
          </div>

          <div className="live-stream">
            <Marquee />
            <Marquee />
          </div>

          <div className="residents">
  <h2>YOURS TRULY,</h2>
  <ul>
    <li>TBA....</li>
    <li>TBA..........</li>
    <li>TBA..................</li>
    <li>TBA...........................</li>
    <li>TBA.....................................</li>
  </ul>
</div>
        </div>

        <div className="right-section">
          <img src={catface} alt="Koska Logo" className="koska-logo" />

          <div className="contact-section">
            <h2>CONTACT</h2>
            <p><a href="mailto:info@koskaradio.net">info@koskaradio.net</a></p>
            <p><a href="https://www.instagram.com/koska_radio/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
            <p><a href="https://on.soundcloud.com/LG9iX" target="_blank" rel="noopener noreferrer">Soundcloud</a></p>
          </div>
        </div>
      </div>

      <div className="spline-container">
        <Spline scene="https://prod.spline.design/eVg9U18rRHkBV69n/scene.splinecode" />
      </div>
    </>
  );
}

export default App;
