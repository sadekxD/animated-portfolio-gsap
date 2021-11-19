import React, { useEffect } from "react";
import { gsap } from "gsap";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">IR</h1>
        <a href="#" className="link">
          About
        </a>
      </nav>
      <div className="container">
        <h2 className="small__name">John Doe</h2>
        <h2 className="home__intro">
          <div className="line">
            {textOne.split("").map((t) => (
              <span>{t}</span>
            ))}
          </div>
          <div className="line">
            {textTwo.split("").map((t) => (
              <span>{t}</span>
            ))}
          </div>
        </h2>
      </div>
    </header>
  );
};

const smallName = "John Doe";
const textOne = "PASSIONATE";
const textTwo = "FRONTEND DEVELOPER";

export default Header;
