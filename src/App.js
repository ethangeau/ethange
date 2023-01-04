import React from "react";
import About from "./components/About";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
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
