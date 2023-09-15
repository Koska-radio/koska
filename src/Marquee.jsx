import React from 'react';

function Marquee({ metadata }) {
  return (
    <div className="marquee">
        <span> {metadata}</span>
        <span className="duplicated"> COMING SOON... {metadata}</span>
    </div>
  );
}

export default Marquee;