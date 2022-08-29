import React from 'react'
import AboutLanding from './AboutLanding';
import AboutMe from './about-me'
import Skillset from './skillset'
import Cards from './cards-experience';
import Timeline from './Timeline'
import Footer from './footer'

function About() {
  return (
    <section className="subpage about">
      <AboutLanding />
      <AboutMe />
      <Cards />
      <Timeline />
      <Skillset />
      <Footer />
    </section>
  )
}

export default About;