import React from "react";
import {
  NavBar,
  Home,
  Experience,
  Portfolio,
  Testimonial,
  ContactMe,
  Footer,
} from "./components";

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Experience />
      <Portfolio />
      <Testimonial />
      <ContactMe />
      <Footer />
    </div>
  );
}
