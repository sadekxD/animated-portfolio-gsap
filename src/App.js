import "./styles/style.scss";
import "locomotive-scroll/src/locomotive-scroll.scss";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import Header from "./components/header/Header";
import OverlayAnim from "./components/animations/OverlayAnim";
import ProjectSection from "./components/projects/ProjectSection";
import AboutSection from "./components/about/AboutSection";
import Footer from "./components/footer/Footer";
import FeturedProjectSection from "./components/projects/FeturedProjectSection";
import CustomCursor from "./components/cursor/CustomCursor";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      <main data-scroll-container>
        <Header />
        <FeturedProjectSection />
        <AboutSection />
        <ProjectSection />
        <Footer />
      </main>
      <OverlayAnim />
    </div>
  );
}

export default App;
