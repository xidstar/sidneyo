import React from 'react'
import ProjectsLanding from './ProjectsLanding';
import Footer from './footer'
import CaseStudies from './CaseStudies';
import ProjectCards from './ProjectCards';
import LetsTalk from './LetsTalk';
import Scroll from './SmoothScroll';

function Projects() {
  
  return (
    <section className="subpage projects" >
      <Scroll />
      <ProjectsLanding />
      <CaseStudies />
      <ProjectCards />
      <LetsTalk />
      <Footer />
    </section>
  )
}

export default Projects;