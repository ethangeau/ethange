import React from "react";
import { Slide } from "@mui/material";
import { portfolioItem } from "../../constants";
import PortfolioItem from "./PortfolioItem";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div ref={ref}>
      <Slide
        direction="right"
        in={inView}
        mountOnEnter
        unmountOnExit
        timeout={2000}
      >
        <div id="portfolio" className="mt-20">
          <h1 className="text-3xl pt-4 font-serif">Portfolio</h1>
          <h3 className="text-lg text-center px-4 py-6 leading-8 tracking-wide md:px-24 font-light">
            Several projects were developed using the MERN stack (MongoDB,
            Express, React, and Node.js) and integrated with the Google Map API
            and OpenWeather API. These projects were deployed on Amazon Web
            Services (AWS) EC2 and Azure Virtual Machine using docker
            containers.
          </h3>
          <div className=" flex flex-wrap justify-evenly">
            {portfolioItem.map((item) => (
              <PortfolioItem key={item.id} project={item} />
            ))}
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Portfolio;
