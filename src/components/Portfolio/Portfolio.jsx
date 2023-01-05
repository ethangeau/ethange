import React from "react";
import { Grid } from "@mui/material";
import { portfolioItem } from "../../constants";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <>
      <h1 id="portfolio" className="text-3xl pt-4 mt-10">
        Portfolio
      </h1>
      <h3 className="text-xl py-6">Projects Using MERN Stack</h3>
      <div className=" flex flex-wrap justify-evenly">
        {portfolioItem.map((item) => (
          <PortfolioItem key={item.id} project={item} />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
