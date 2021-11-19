import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const OverlayAnim = () => {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (overlayRef !== null) {
      let el = overlayRef.current;

      gsap.to(".layer-1", {
        x: "100vw",
        duration: 2,
        delay: 0.5,
        ease: "slow(0.7, 0.7, false)",
      });
      gsap.to(".layer-2", {
        x: "-100vw",
        duration: 2,
        delay: 0.5,
        ease: "slow(0.7, 0.7, false)",
      });

      gsap.to(el, {
        opacity: 0,
        delay: 2.2,
      });
    }
  }, [overlayRef]);

  return (
    <div>
      <div ref={overlayRef} className="overlay">
        <div className="layer layer-1"></div>
        <div className="layer layer-2"></div>
        <div className="overlay__text">Thanks for waiting :)</div>
      </div>
    </div>
  );
};

export default OverlayAnim;
