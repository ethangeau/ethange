import React from "react";
import { Grid, Typography, Avatar } from "@mui/material";
import avatar from "../static/images/avatar.jpeg";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Home() {
  return (
    <Grid container>
      <Grid item align="center" id="about">
        <Avatar
          alt="Ethan Ge"
          src={avatar}
          sx={{ width: 150, height: 150, mt: 10 }}
        />
        <div style={{ padding: "20px" }}>
          <a
            href="https://github.com/yebinge"
            target="_blank"
            rel="noreferrer"
            style={{ paddingRight: "20px" }}
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/ethan-g-795aa0217/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="large" color="primary" />
          </a>
        </div>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            mx: 12,
            mt: 8,
            mb: 12,
            color: "primary.main",
            fontFamily: "Helvetica Neue",
            lineHeight: 1.5,
          }}
        >
          I am <span style={{ color: "#0014FF" }}>Ethan Ge</span>, I am
          passionate about developing web applications and striving to create
          innovative products.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <hr />
        <Typography
          id="skills"
          variant="h4"
          gutterBottom
          sx={{ ml: 5, mt: 12, color: "#0014FF" }}
        >
          Skills
        </Typography>
        <div style={{ color: "#1976d2", marginLeft: 120 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ mt: 5, letterSpacing: 2 }}
          >
            <span style={{ fontWeight: "bold" }}>Programming Languages: </span>
            JavaScript | Python | Java | HTML5 | CSS3 | SQL | Shell
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ mt: 5, letterSpacing: 2 }}
          >
            <span style={{ fontWeight: "bold" }}>Database: </span> MySQL |
            MongoDB | CouchDB
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ mt: 5, letterSpacing: 2 }}
          >
            <span style={{ fontWeight: "bold" }}>Frameworks: </span> React |
            Bootstrap | Express | Django
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ mt: 5, letterSpacing: 2 }}
          >
            <span style={{ fontWeight: "bold" }}>Developer Tools: </span> Git |
            Linux | Ansible | Docker | AWS | Postman
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}
