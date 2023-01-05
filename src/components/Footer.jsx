import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className=" mt-40 mb-2 text-center">
      <p>&copy; {year} Ethan Ge @ University of Melbourne</p>
    </div>
  );
};

export default Footer;
