import React from "react";
import "./style.css";

const ScheduleWidget = () => {
  return (
    <div className="schedule-widget-container">
      <iframe
        src="https://radio.koskaradio.net/public/koska_radio/schedule/embed"
        title="Schedule Widget"
        className="schedule-iframe"
      ></iframe>
    </div>
  );
};

export default ScheduleWidget;
