import React from "react";
import {
  NavBar,
  Home,
  Experiences,
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
      <Experiences />
      <Portfolio />
      <ContactMe />
      <Footer />
    </>
  );
}
