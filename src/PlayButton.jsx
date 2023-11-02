import React, { useState, useRef } from "react";
import Marquee from "./Marquee";

function PlayButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayToggle = () => {
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button className="play-button" onClick={handlePlayToggle}>
        {isPlaying ? "❚❚" : "▶"}
      </button>
      <audio ref={audioRef} src="https://radio.koskaradio.net:8000/radio.mp3" />
      <Marquee />
    </div>
  );
}

export default PlayButton;
