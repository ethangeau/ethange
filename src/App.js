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
    <div className="px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80">
      <NavBar />
      <About />
      <Experience />
      <Portfolio />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
