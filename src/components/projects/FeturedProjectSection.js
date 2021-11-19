import React from "react";
import FeaturedProjectCard from "../cards/FeaturedProjectCard";
import SectionHeader from "../header/SectionHeader";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const FeturedProjectSection = () => {
  return (
    <section className="container container__small mb-4">
      <SectionHeader title="Featured" />
      <FeaturedProjectCard />
    </section>
  );
};

export default FeturedProjectSection;
