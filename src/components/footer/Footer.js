import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <h2 className="footer__heading">Got any question for me?</h2>
        <h3 className="footer__heading">I am thrilled to answer :)</h3>
        <a href="#" className="btn btn__cta link">
          Say hi!
        </a>
        <div className="social ml-auto">
          <h2 className="social__heading">Let's connect</h2>
          <div className="social__links">
            <a href="#" className="social__link__item">
              <FaLinkedin />
            </a>
            <a href="#" className="social__link__item">
              <FaGithub />
            </a>
            <a href="#" className="social__link__item">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <p className="copyright">Developed by Irfan Sadek</p>
    </div>
  );
};

export default Footer;
