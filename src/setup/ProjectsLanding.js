import React from 'react';
import { BsChevronDown } from "react-icons/bs";

function ProjectsLanding() {
  return (
    <section className="projects-landing" id="projectsTop">
      <div className="header-text text-left">
        <h1 className='animate__animated animate__bounceIn'>My Projects</h1>
        <br />
        <div className="border-lines">
          <span></span>
          <span></span>
        </div>
        <p>Apps/Websites...</p>
        {/* <div className="btn-wrap">
          <a className="btn" href="#case-studies" aria-label="Explore projects">Explore</a>
        </div> */}
      </div>
      <div className="text-right projects">
        <div className="overlay"></div>
      </div>

      <BsChevronDown className="arrow-down animate__animated animate__bounce animate__infinite animate__slower" />
    </section>
  )
}

export default ProjectsLanding;