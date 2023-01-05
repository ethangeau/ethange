import React from "react";

import { Link } from "@mui/material";
import { navItem } from "../constants";

const NavBar = () => {
  return (
    <div className="flex justify-between py-10">
      <h1 className="text-xl font-medium">Ethan</h1>
      <ul className="flex justify-center">
        {navItem.map((item) => (
          <li className="px-1 text-xl cursor-pointer md:px-2 lg:px-4 font-medium">
            <Link
              href={`#${item.toLowerCase()}`}
              color="inherit"
              underline="hover"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
