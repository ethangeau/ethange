import React from "react";
import { Link, Slide } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <div className="text-center mt-20">
        <h1 className="text-4xl px-4 py-2 font-semibold md:px-6 lg:px-8 font-mono">
          Hey, I am <span className=" text-blue-800">Ethan Ge</span>
        </h1>
        <p className=" text-lg tracking-wider leading-8 px-4 pt-12 pb-2 md:px-12 lg:px-32 font-light">
          Motivated and diligent final semester Master of IT student at the
          University of Melbourne, demonstrated by excellent academic
          achievements and multiple awards.
        </p>
        <p className=" text-lg tracking-wider leading-8 px-4 py-2 md:px-12 lg:px-32 font-light">
          Strong communication, teamwork and professional skills, evidenced by
          current work at{" "}
          <Link
            href="https://strivehealth.org.au/"
            target="_blank"
            color="inherit"
          >
            Strive Student Health Initiative
          </Link>
          , and a previous internship at{" "}
          <Link
            href="https://www.directory.gov.au/portfolios/treasury/data-standards-body"
            target="_blank"
            color="inherit"
          >
            Data Standards Body
          </Link>
          .
        </p>
        <p className=" text-lg tracking-wider leading-8 px-4 py-2 md:px-12 lg:px-32 font-light">
          Proficient in web development using MERN stack and cloud computing
          platforms, shown by completing several web applications, and obtaining
          AWS Certified Cloud Practitioner.
        </p>
        <p className="text-lg px-4 py-8 md:px-6 lg:px-8 font-normal">
          Looking for graduate or junior opportunities for software engineer
        </p>
        <Link
          href="https://www.linkedin.com/in/ethange/"
          target="_blank"
          color="inherit"
          sx={{ p: 2 }}
        >
          <LinkedInIcon fontSize="large" color="primary" />
        </Link>
        <Link
          href="https://github.com/ethangeau"
          target="_blank"
          color="inherit"
          sx={{ p: 2 }}
        >
          <GitHubIcon fontSize="large" />
        </Link>
      </div>
    </Slide>
  );
};

export default About;
