import React, { useState, useRef } from "react";
import Marquee from "./Marquee";
import "./style.css";

function PlayButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef(null);

  const handlePlayToggle = () => {
    setIsLoading(true); // Indicate that loading is in progress
    if (!isPlaying) {
      // The lines here reload the element when pressed again.
      audioRef.current.load();
      audioRef.current
        .play()
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error attempting to play", error);
          setIsLoading(false);
        });
    } else {
      audioRef.current.pause();
      setIsLoading(false);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button className="play-button" onClick={handlePlayToggle}>
        {isLoading ? (
          <div className="loading-circle"></div>
        ) : isPlaying ? (
          "❚❚"
        ) : (
          "▶"
        )}
      </button>
      <audio
        ref={audioRef}
        src="http://172.232.62.146:8000/radio.mp3"
        preload="auto"
      />
      <Marquee />
    </div>
  );
}

export default PlayButton;
