import React from "react";
import { navItems } from "../constants";

const NavBar = () => {
  return (
    <div className="flex justify-between p-2">
      <h1>NavBar</h1>
      <ul className="flex justify-center">
        {navItems.map((item) => (
          <li className=" px-2">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
