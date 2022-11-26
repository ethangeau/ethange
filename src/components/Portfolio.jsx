import React from "react";
import { Grid, Typography } from "@mui/material";
import { projects } from "../constants";
import Project from "./Project";

export default function Portfolio() {
  return (
    <>
      <hr style={{ marginTop: 100 }} />
      <Typography
        id="portfolio"
        variant="h4"
        gutterBottom
        sx={{ ml: 5, mt: 12, color: "#0014FF" }}
      >
        Portfolio
      </Typography>
      <Typography
        variant="h5"
        align="center"
        sx={{ m: 6, color: "#1976d2", letterSpacing: 3 }}
      >
        Projects Using <span style={{ fontWeight: "bold" }}>MERN</span> Stack
      </Typography>
      <Grid container justifyContent="space-evenly" spacing={3}>
        {projects.map((project) => (
          <Grid item key={project.id}>
            <Project project={project} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
