import React from "react";
import { Grid, Typography } from "@mui/material";
import { experiences } from "../constants";
import Experience from "./Experience";

export default function Experiences() {
  return (
    <>
      <hr style={{ marginTop: 100 }} />
      <Typography
        id="experience"
        variant="h4"
        gutterBottom
        sx={{ ml: 5, mt: 12, color: "#0014FF" }}
      >
        Experience
      </Typography>
      <Grid container>
        {experiences.map((item) => (
          <Experience
            key={item.id}
            title={item.title}
            company={item.company}
            timeRanges={item.timeRanges}
            location={item.location}
            description={item.description}
          />
        ))}
      </Grid>
    </>
  );
}
