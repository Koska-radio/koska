import React, { useState, useRef, useEffect } from 'react'; 
import catface from './images/koska.JPG';
import './style.css';
import PlayButton from './PlayButton';
import Marquee from './Marquee';
import Spline from './Spline';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [streamUrl, setStreamUrl] = useState('https://example.com/dummy-stream-url'); 
  const audioRef = useRef(null);

  const handlePlayToggle = () => {
    if (!streamUrl) {
      console.warn("No valid stream URL available.");
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const [metadata, setMetadata] = useState('CURRENTLY OFF-AIR');

  useEffect(() => {
    if (isPlaying) {
      fetch('https://your-api-endpoint-to-fetch-metadata.com')
        .then(response => response.json())
        .then(data => {
          setMetadata(data.metadata || 'Unknown Stream');
        })
        .catch(error => {
          console.error("There was an error fetching the metadata:", error);
          setMetadata('Error fetching data');
        });
    }
  }, [isPlaying]);

  return (
    <>
      <div id="content">
          <div className="left-section">
              <div id="header-container">
                  <h1 className="footer-header">KOSKA RADIO</h1>
                  <PlayButton isPlaying={isPlaying} togglePlay={handlePlayToggle} />
              </div>
              
              <div className="live-stream">
                  <Marquee metadata={metadata} />
                  <Marquee metadata={metadata} />
              </div>
              
              <div className="residents">
                  <h2>YOURS TRULY,</h2>
                  <ul>
                      <li><a href="artist.html">TBA... </a></li>
                      <li><a href="#">TBA...</a></li>
                      <li><a href="#">TBA...........</a></li>
                      <li><a href="#">TBA.................</a></li>
                      <li><a href="#">TBA......................................................</a></li>
                  </ul>
              </div>
          </div>
    
          <div className="right-section">
              <img src={catface} alt="Koska Logo" className="koska-logo" />

              <div className="contact-section">
                  <h2>CONTACT</h2>
                  <p><a href="mailto:info@koskaradio.net">info@koskaradio.net</a></p>
                  <p><a href="https://www.instagram.com/koskaradio/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                  <p><a href="https://on.soundcloud.com/LG9iX" target="_blank" rel="noopener noreferrer">Soundcloud</a></p>
          
              </div>
          </div>
          <audio ref={audioRef} src={streamUrl} />
      </div>
      <div className="spline-container">
        <Spline scene="https://prod.spline.design/eVg9U18rRHkBV69n/scene.splinecode" />
      </div>
    </>
  );
}

export default App;
