import React from "react";
import {
  NavBar,
  Home,
  Experience,
  Portfolio,
  ContactMe,
  Footer,
} from "./components";
import "./App.css";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Experience />
      <Portfolio />
      <ContactMe />
      <Footer />
    </>
  );
}
