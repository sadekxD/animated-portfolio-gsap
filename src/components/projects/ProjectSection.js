import React from "react";
import ProjectCard from "../cards/ProjectCard";
import SectionHeader from "../header/SectionHeader";

const ProjectSection = () => {
  return (
    <div className="container">
      <SectionHeader title="Other" subheading />
      <div className="project__list">
        {[
          "https://source.unsplash.com/random/1",
          "https://source.unsplash.com/random/2",
          "https://source.unsplash.com/random/3",
        ].map((item, i) => (
          <ProjectCard key={i} image_url={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
