import React from "react";
import { Grid } from "@mui/material";

const ExperienceItem = (props) => {
  const { title, company, timeRanges, location, website, description } = props;
  return (
    <>
      <Grid container>
        <Grid item sm={12} md={4}>
          <h2 className="text-2xl pt-10 px-2 font-sans">{timeRanges}</h2>
        </Grid>
        <Grid item sm={12} md={8}>
          <h2 className="text-2xl pt-10">{title}</h2>
          <h3 className=" text-xl py-4 font-normal">
            <a href={website} target="_blank" className=" hover:underline">
              {company}
            </a>
            {`, ${location}`}
          </h3>
          <ul className="list-inside list-disc">
            {description.map((item, idx) => (
              <li key={idx} className="text-base tracking-wide pb-2 font-light">
                {item}
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </>
  );
};

export default ExperienceItem;
