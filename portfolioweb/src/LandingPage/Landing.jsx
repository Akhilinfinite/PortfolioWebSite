import React, { Component } from "react";
import "./Landing.css";
import Nav from "../Components/NavComponent/Nav";
import HeroSection from "../Components/HeroSection/HeroSection";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import Experience from "../Components/Experience/Experience";

export default class Landing extends Component {
  render() {
    return (
      <div className="MainLandingC">
        <div className="NavBarL">
          <Nav />
        </div>
        <div className="Herosection">
          <HeroSection />
        </div>
        <div className="AboutUs">
          <About />
        </div>
        <div className="Skills">
          <Skills />
        </div>
        <div className="ExperienceL">
          <Experience />
        </div>
        <div className="icon">
        </div>
      </div>
    );
  }
}
