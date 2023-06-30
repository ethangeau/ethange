import React from "react";
import { Slide } from "@mui/material";
import { portfolioItem } from "../../constants";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={1000}>
      <div id="portfolio" className="mt-20">
        <h1 className="text-3xl pt-4 font-serif">Portfolio</h1>
        <h3 className="text-lg text-center px-4 py-6 leading-8 tracking-wide md:px-24 font-light">
          Several projects were developed using the MERN stack (MongoDB,
          Express, React, and Node.js) and integrated with the Google Map API
          and OpenWeather API. These projects were deployed on Amazon Web
          Services (AWS) EC2 and Azure Virtual Machine using docker containers.
        </h3>
        <div className=" flex flex-wrap justify-evenly">
          {portfolioItem.map((item) => (
            <PortfolioItem key={item.id} project={item} />
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default Portfolio;
