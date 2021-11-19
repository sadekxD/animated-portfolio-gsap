import React from "react";

const SectionHeader = ({ title, subheading }) => {
  return (
    <h2 className="section__header">
      {title} <span className="outline__text">Projects </span>
      {subheading && (
        <span className="sub__heading">
          (Freelance, Experiment, Hobby, Contest)
        </span>
      )}
    </h2>
  );
};

export default SectionHeader;
