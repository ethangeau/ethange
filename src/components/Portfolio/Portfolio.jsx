import React from "react";
import { Grid } from "@mui/material";
import { portfolioItem } from "../../constants";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div id="portfolio" className="mt-10">
      <h1 className="text-3xl pt-4">Portfolio</h1>
      <h3 className="text-xl py-6">Projects Using MERN Stack</h3>
      <div className=" flex flex-wrap justify-evenly">
        {portfolioItem.map((item) => (
          <PortfolioItem key={item.id} project={item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
