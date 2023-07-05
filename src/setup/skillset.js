import React, { useState } from 'react';
import skillsData from './skillsInfo';
import Resume from './img/Sidney-Oluoch-resume.pdf'
import { HiOutlineArrowLeft } from "react-icons/hi";

function SKillset() {
  const [skills, setSkills] = useState(skillsData);

  return (
    <>
      <section className="skillset">
        <div className="pj-info animate__animated animate__slideInLeft">
          <div className="category"><span>03</span> SKILLSET</div>
        </div>
        <div className="container">
          <div class="section-header jobs-header">
            <h3>Technical Skills</h3>
          </div>
          <div className="row">
            <div className="col">
              <ul>
                {skills.map((skill, index) => {
                  const { logo, name, level } = skill;
                  return (
                    <li key={index} >
                      <div className="logo">
                        <img src={logo} alt=""></img>
                      </div>
                      <div className="progress-text">
                        <div className="logo-title">
                          <h4>{name}</h4>
                          <p>{level}%</p>
                        </div>
                        <div className="bar">
                          <div className="bar-progress" style={{ width: `${level}%` }}></div>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="resume">
            <a className="btn resume" href={Resume} target="_blank">View Resume</a>
            <div className="back-btn-wrap">
              <HiOutlineArrowLeft />
              <a className="back" href="/">Back</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SKillset;