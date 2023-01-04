import React from "react";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <About />
      <Experience />
      <Portfolio />
      <Skills />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
