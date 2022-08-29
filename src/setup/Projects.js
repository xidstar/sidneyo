import React from 'react'
import ProjectsLanding from './ProjectsLanding';
import Footer from './footer'
import ProjectCards from './ProjectCards';
import LetsTalk from './LetsTalk';

function Projects() {
  return (
    <section className="subpage projects">
      <ProjectsLanding />
      <ProjectCards />
      <LetsTalk />
      <Footer />
    </section>
  )
}

export default Projects;