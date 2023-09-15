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
      // Make an API request to fetch current song and marquee metadata
      fetch('http://your-azuracast-site.example.com/api/nowplaying/koska_radio')
        .then(response => response.json())
        .then(data => {
          const artist = data.now_playing.song.artist || 'Unknown Artist';
          const title = data.now_playing.song.title || 'Unknown Title';
          const newMetadata = `${title} - ${artist}`;
          setMetadata(newMetadata);
        })
        .catch(error => {
          console.error("Error fetching now playing data:", error);
        });
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
