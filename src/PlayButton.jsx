import React from 'react';

function PlayButton({ isPlaying, togglePlay }) {
  return (
    <button className="play-button" onClick={togglePlay}>
      {isPlaying ? '❚❚' : '▶'}
    </button>
  );
}

export default PlayButton;
