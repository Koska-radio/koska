import React from "react";
import SplineReact from "@splinetool/react-spline";

const Spline = () => {
  // This state will keep track of whether the window width is greater than 1000px
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth > 1000);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 1000);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateMedia);
    // Remove the event listener on cleanup
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      {isDesktop && (
        <SplineReact scene="https://prod.spline.design/eVg9U18rRHkBV69n/scene.splinecode" />
      )}
    </>
  );
};

export default Spline;
