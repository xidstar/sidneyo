import React from 'react'
import AboutLanding from './AboutLanding';
import AboutMe from './about-me'
import Skillset from './skillset'
import Cards from './cards-experience';
import Timeline from './Timeline'
import Footer from './footer';
import Scroll from './SmoothScroll';

function About() { 
  return (
    <section id="my-scrollbar" className="subpage about">
      <Scroll />
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