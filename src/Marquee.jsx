import React, { useState, useEffect } from "react";
import axios from "axios";

function Marquee() {
  const [streamInfo, setStreamInfo] = useState({
    title: "Loading...",
    artist: "",
  });

  const fetchStreamData = async () => {
    try {
      const response = await axios.get(
        "https://radio.koskaradio.net/api/nowplaying/1",
        {
          params: { t: Date.now() }, // To bypass cache
        },
      );

      if (
        response.data &&
        response.data.now_playing &&
        response.data.now_playing.song
      ) {
        const { title, artist } = response.data.now_playing.song;
        setStreamInfo({ title, artist });
      } else {
        console.warn("Unexpected response structure:", response.data);
        setStreamInfo({ title: "Failed to fetch title", artist: "" });
      }
    } catch (error) {
      console.error("Error fetching stream data:", error);
      setStreamInfo({ title: "Failed to fetch title", artist: "" });
    }
  };

  useEffect(() => {
    const refreshInterval = setInterval(fetchStreamData, 5000);

    // Fetch the stream data initially
    fetchStreamData();

    return () => {
      clearInterval(refreshInterval); // Clear the interval when the component unmounts
    };
  }, []);

  return (
    <div className="marquee">
      <div className="flashing-dot"></div>
      <span>
        {streamInfo.artist ? `${streamInfo.artist} - ` : ""}
        {streamInfo.title}
      </span>
    </div>
  );
}

export default Marquee;
