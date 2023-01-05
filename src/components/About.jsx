import React from "react";
import { Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl px-4 py-2 font-semibold md:px-6 md:py-3 lg:px-8 lg:py-4">
        Hey, I am <span className=" text-blue-600">Ethan Ge</span>
      </h1>
      <h2 className="text-2xl px-4 py-2 font-semibold md:px-6 md:py-3 lg:px-8 lg:py-4">
        Looking for graduate or junior opportunities for software engineer
      </h2>
      <p className=" text-lg tracking-wider leading-7 px-4 py-2 md:px-8 md:py-3 lg:px-12 lg:py-4">
        Final semester Master of Information Technology degree at the University
        of Melbourne while also working as IT officer at{" "}
        <Link
          href="https://strivehealth.org.au/"
          target="_blank"
          color="inherit"
        >
          Strive Student Health Initiative
        </Link>
        . Completed a four-month internship at{" "}
        <Link
          href="https://www.directory.gov.au/portfolios/treasury/data-standards-body"
          target="_blank"
          color="inherit"
        >
          Data Standards Body
        </Link>
        . Proficient in web development using MERN stack and cloud computing
        platforms, demonstrated by AWS Certified Cloud Practitioner.
      </p>
      <Link
        href="https://github.com/ethangeau"
        target="_blank"
        color="inherit"
        sx={{ px: 2 }}
      >
        <GitHubIcon fontSize="large" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/ethange/"
        target="_blank"
        color="inherit"
        sx={{ px: 2 }}
      >
        <LinkedInIcon fontSize="large" color="primary" />
      </Link>
    </div>
  );
};

export default About;
