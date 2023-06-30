import React from "react";
import { Link, Slide } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div ref={ref}>
      <Slide
        direction="down"
        in={inView}
        mountOnEnter
        unmountOnExit
        timeout={1000}
      >
        <div className="text-center mt-20">
          <h1 className="text-4xl px-4 py-2 font-semibold md:px-6 lg:px-8 font-mono">
            Hey, I am <span className=" text-blue-800">Ethan Ge</span>
          </h1>
          <p className=" text-xl tracking-wider leading-10 px-4 pt-12 pb-2 md:px-12 lg:px-32 font-light">
            Recently graduated Master of IT degree at University of Melbourne
            with specialization in AI, while also working as a part-time
            software engineer.
          </p>
          <p className=" text-xl tracking-wider leading-10 px-4 py-2 md:px-12 lg:px-32 font-light">
            Passionate about software engineering, AI and cloud computing,
            demonstrated by multiple software projects experience and two AWS
            certificates.
          </p>
          <p className="text-2xl px-4 py-8 md:px-6 lg:px-8 font-normal">
            Seeking opportunities for{" "}
            <span className=" text-blue-800">
              <b>software engineer</b>
            </span>
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
    </div>
  );
};

export default About;
