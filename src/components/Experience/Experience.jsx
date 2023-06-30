import React from "react";
import { useState } from "react";
import { experienceItem } from "../../constants";
import ExperienceItem from "./ExperienceItem";
import { Slide } from "@mui/material";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <div ref={ref}>
      <Slide
        direction="left"
        in={inView}
        mountOnEnter
        unmountOnExit
        timeout={2000}
      >
        <div id="experience" className=" mt-20">
          <h1 className="text-3xl pt-4 font-serif">Experience</h1>
          <div>
            {experienceItem.map((item) => (
              <ExperienceItem
                key={item.id}
                title={item.title}
                company={item.company}
                timeRanges={item.timeRanges}
                location={item.location}
                website={item.website}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Experience;
