import React from "react";
import { Grid } from "@mui/material";
import { projects } from "../constants";
import Project from "./Project";

export default function Portfolio() {
  console.log(projects);
  return (
    <Grid container alignItems="stretch" spacing={3}>
      {projects.map((project) => (
        <Grid item key={project.id} xs={12} sm={6}>
          <Project project={project} />
        </Grid>
      ))}
    </Grid>
  );
}
