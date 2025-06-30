import React from "react";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import About from "../Component/About";
import Education from "../Component/Education";
import Skills from "../Component/Skills";
import ContactMe from "../Component/ContactMe";
import ProjectCard from "../Component/ProjectCard";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="  max-w-7/8 md:max-w-5/6 mx-auto  ">
        <Hero></Hero>
        <About></About>
        <Education></Education>
        <Skills></Skills>
        <ProjectCard></ProjectCard>
        <ContactMe></ContactMe>
      </div>
    </div>
  );
};

export default MainLayout;
