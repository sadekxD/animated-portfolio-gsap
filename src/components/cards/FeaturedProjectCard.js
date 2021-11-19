import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import laptop from "../../media/laptop.jfif";

const FeaturedProjectCard = () => {
  useEffect(() => {}, []);

  return (
    <div className="featured__project-card mb-6" id="target">
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#target"
        className="project__info"
      >
        <h5 className="name">Lorem</h5>
        <a href="#" className="project__link mb-1">
          <h3 className="project__title">
            Build a lading page for UI community
          </h3>
        </a>
        <p className="project__tags">Crypto, Blockchain, LandingPage</p>
      </div>
      <a href="#" className="project__preview-link">
        <img src={laptop} className="project__preview" />
      </a>
    </div>
  );
};

export default FeaturedProjectCard;
