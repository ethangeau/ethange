import React from "react";
import { Typography } from "@mui/material";

export default function ContactMe() {
  return (
    <>
      <hr style={{ marginTop: 100 }} />
      <Typography
        id="contact-me"
        variant="h4"
        gutterBottom
        sx={{ ml: 5, mt: 12, color: "#0014FF" }}
      >
        Contact Me
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          mx: 20,
          my: 10,
          color: "#1976d2",
          letterSpacing: 1.5,
          lineHeight: 2,
        }}
      >
        If you are looking for a software engineer, please{" "}
        <a href="mailto: geyebin0701@gmail.com">Email Me</a> or contact me via{" "}
        <a href="https://www.linkedin.com/in/ethange/">Linkedin</a> and{" "}
        <a href="https://github.com/yebinge">Github</a>.
      </Typography>
    </>
  );
}
