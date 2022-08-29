import React from 'react';
import { BsChevronDown } from "react-icons/bs";

function ProjectsLanding() {
  return (
    <section className="projects-landing">
      <div className="header-text text-left">
        <h1>My Projects</h1>
        <br />
        <div className="border-lines">
          <span></span>
          <span></span>
        </div>
        <p>Apps/Websites</p>
        <div className="btn-wrap">
          <a className="btn" href="#pjs" aria-label="Explore more projects">Explore</a>
        </div>
      </div>
      <div className="text-right projects">
        <div className="overlay"></div>
      </div>

      <BsChevronDown className="arrow-down" />
    </section>
  )
}

export default ProjectsLanding;