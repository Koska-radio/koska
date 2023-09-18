import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Marquee() {
  const [nowPlayingData, setNowPlayingData] = useState({
    title: 'Unknown Title',
    artist: 'Unknown Artist',
  });

  const loadNowPlaying = () => {
    axios
      .get('http://your-azuracast-site.example.com/api/nowplaying/koska_radio')
      .then((response) => {
        setNowPlayingData(response.data.now_playing.song);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    loadNowPlaying();
    const intervalId = setInterval(loadNowPlaying, 15000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <marquee>
      {nowPlayingData.title} - {nowPlayingData.artist}
    </marquee>
  );
}

export default Marquee;
