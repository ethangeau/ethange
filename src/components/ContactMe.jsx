import { Slide } from "@mui/material";
import React from "react";

const ContactMe = () => {
  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={1000}>
      <div id="contact" className="mt-20">
        <h1 className="text-3xl py-4 font-serif">Contact</h1>
        <p className="text-xl tracking-wider leading-10 px-4 py-4 md:px-12 md:py-3 lg:px-20 lg:py-4">
          {" "}
          If you are looking for a talented software engineer, please{" "}
          <a
            href="mailto: yebing@student.unimelb.edu.au"
            target="_blank"
            className=" hover:underline text-blue-800"
          >
            Email Me
          </a>{" "}
          or contact me via{" "}
          <a
            href="https://www.linkedin.com/in/ethange/"
            target="_blank"
            className=" hover:underline text-blue-800"
          >
            Linkedin
          </a>
          .
        </p>
      </div>
    </Slide>
  );
};

export default ContactMe;
