import React from "react";
import { Grid, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export default function Experience(props) {
  const { title, company, timeRanges, location, description } = props;
  return (
    <>
      <Grid container sx={{ color: "#1976d2" }}>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h5"
            gutterBottom
            align="right"
            sx={{ mt: 6, mr: 4, fontWeight: "bold" }}
          >
            {timeRanges}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ mt: 6, fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            {`${company}, ${location}`}
          </Typography>
          {description.map((item) => (
            <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
              <CircleIcon sx={{ fontSize: "12px", mx: 1 }} />
              {item}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
