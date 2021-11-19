import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    let links = document.querySelectorAll(".link");

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
    });

    window.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        duration: 1,
        x: e.clientX,
        y: e.clientY,
        ease: "power3.out",
      });
    });

    links.forEach((item) => {
      item.addEventListener("mouseenter", (e) => {
        cursor.classList.add("cursor__link");
        gsap.to(cursor, 0.4, {
          scale: 3,
        });
      });

      item.addEventListener("mouseleave", (e) => {
        cursor.classList.remove("cursor__link");
        gsap.to(cursor, 0.4, {
          scale: 1,
        });
      });
    });
  }, []);
  return <div ref={cursorRef} className="cursor"></div>;
};

export default CustomCursor;
