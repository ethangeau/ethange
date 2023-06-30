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
    <div className="mx-10 md:mx-20 lg:mx-40 xl:mx-60 2xl:mx-80">
      <NavBar />
      <About />
      <Portfolio />
      <Experience />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
