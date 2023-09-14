import React from 'react';

function Marquee({ metadata }) {
  return (
    <div className="marquee">
       <Marquee metadata={metadata} />
        <span className="duplicated"> COMING SOON... {metadata}</span>
    </div>
  );
}

export default Marquee;
