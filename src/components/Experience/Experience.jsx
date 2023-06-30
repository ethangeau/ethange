import React from "react";
import { experienceItem } from "../../constants";
import ExperienceItem from "./ExperienceItem";
import { Slide } from "@mui/material";

const Experience = () => {
  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={1000}>
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
  );
};

export default Experience;
