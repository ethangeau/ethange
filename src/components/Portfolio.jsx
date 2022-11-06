import React from "react";
import { Grid, Typography } from "@mui/material";
import { projects } from "../constants";
import Project from "./Project";

export default function Portfolio() {
  return (
    <>
      <Typography variant="h3" align="center" sx={{ m: 4 }}>
        Portfolio
      </Typography>
      <Typography variant="h5" align="center" sx={{ m: 4 }}>
        Projects using React, Node, Express, MongoDB, and more.
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
