import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaStop } from 'react-icons/fa';

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [metadata, setMetadata] = useState('CURRENTLY OFF-AIR');
    const audioPlayer = useRef();

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
    }

    useEffect(() => {
        if (isPlaying) {
            // Replace this with the actual endpoint to fetch metadata
            fetch('http://172.232.62.146:8000/radio.mp3')
                .then(response => response.json())
                .then(data => {
                    // Adjust this according to the actual structure of the response
                    setMetadata(data.now_playing.song.title || 'Unknown Stream');
                })
                .catch(error => {
                    console.error("There was an error fetching the metadata:", error);
                    setMetadata('Error fetching data');
                });
        }
    }, [isPlaying]);

    return (
        <div className="player-wrapper">
            <audio ref={audioPlayer} src="http://172.232.62.146:8000/radio.mp3" preload="metadata"></audio>
            <button className="play-btn" onClick={togglePlayPause}>
                { isPlaying ? <FaStop /> : <FaPlay /> }
            </button>
            <div className="marquee">
                { metadata }
            </div>
        </div>
    )
}

export default Player;
