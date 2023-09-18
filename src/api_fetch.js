const loadNowPlaying = () => {
    axios
      .get('http://your-azuracast-site.example.com/api/nowplaying/koska_radio')
      .then((response) => {
        console.log('Now Playing Data:', response.data); // Add this line for debugging
        setNowPlayingData(response.data.now_playing.song);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  