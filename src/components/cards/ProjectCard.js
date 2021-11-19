import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/all";
import { BsArrowRight } from "react-icons/bs";

const ProjectCard = ({ image_url }) => {
  const ref = useRef(null);

  useEffect(() => {
    const imageUrl = ref.current.dataset.img;
    const cursor = document.querySelector(".cursor");

    const image = document.createElement("img");
    image.setAttribute("src", imageUrl);
    image.classList.add("cursor__img");

    ref.current.addEventListener("mouseenter", (e) => {
      cursor.classList.add("image__active");
      cursor.appendChild(image);
    });

    ref.current.addEventListener("mouseleave", (e) => {
      cursor.classList.remove("image__active");
      cursor.removeChild(image);
    });
  }, []);

  return (
    <div ref={ref} className="project__card mb-5 pb-2" data-img={image_url}>
      {/* <img className="project__img" src="https://source.unsplash.com/random" /> */}
      <a href="">
        <h2 className="heading mb-1">
          Dashboard{" "}
          <span className="icon__arrow">
            <BsArrowRight />
          </span>
        </h2>
        <h3 className="tags">Freelance, Experiment, Hobby, Contest</h3>
      </a>
    </div>
  );
};

export default ProjectCard;
