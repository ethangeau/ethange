import React from "react";
import { Grid, Typography, Avatar } from "@mui/material";
import avatar from "../static/images/avatar.jpeg";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Home() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={4} align="center">
          <Avatar
            alt="Ethan Ge"
            src={avatar}
            sx={{ width: 150, height: 150 }}
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
          <Typography variant="h4" gutterBottom sx={{ mt: 3 }}>
            A brief introduction of myself
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h4" gutterBottom sx={{ mt: 5, ml: 5 }}>
            Skills
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mt: 5, ml: 5 }}>
            Programming Languages: JavaScript | Python | Java | HTML5 | CSS3 |
            SQL | Shell
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mt: 2, ml: 5 }}>
            Database: MySQL | MongoDB | CouchDB
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mt: 2, ml: 5 }}>
            Frameworks: React | Bootstrap | Express | Django
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mt: 2, ml: 5 }}>
            Developer Tools: Git | Linux | Ansible | Docker | AWS | Postman
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
