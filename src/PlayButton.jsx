import React, { useState, useEffect, useRef } from 'react';
import Marquee from './Marquee';

function PlayButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [metadata, setMetadata] = useState('CURRENTLY OFF-AIR');
  const audioRef = useRef(null);

  const handlePlayToggle = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      // Fetch current song metadata via API and update `metadata` state here
    }
  }, [isPlaying]);

  return (
    <div>
      <button className="play-button" onClick={handlePlayToggle}>
        {isPlaying ? '❚❚' : '▶'}
      </button>
      <audio ref={audioRef} src="http://172.232.62.146:8000/radio.mp3" />
      <Marquee metadata={metadata} />
    </div>
  );
}

export default PlayButton;
