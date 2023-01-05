import React from "react";
import { experienceItem } from "../../constants";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
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
  );
};

export default Experience;
