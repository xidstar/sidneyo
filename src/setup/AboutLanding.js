import React from 'react';
import { BsChevronDown } from "react-icons/bs";

function AboutLanding() {
  return (
    <section className="subpage about-top">
      <div className="header-text text-left">
        <h1>About Me</h1>
        <br />
        <div className="border-lines">
          <span></span>
          <span></span>
        </div>
        <p>"Passionately curious..."</p>
        <div className="btn-wrap">
          <a className="btn" href="#aboutMe" aria-label="Scout Sidney Oluoch">Scout</a>
        </div>
      </div>
      <div className="text-right about">
        <div className="overlay"></div>
      </div>

      <BsChevronDown className="arrow-down" />
    </section>
  )
}

export default AboutLanding;