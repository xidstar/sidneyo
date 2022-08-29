import React, { useState, useEffect } from 'react';
import { BsChevronDoubleRight } from "react-icons/bs";
import jobsInfo from './jobsInfo';

const Timeline = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    setJobs(jobsInfo);
    setLoading(false);
  }, [])

  if (loading) {
    return (
      <section className="jobs loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  const { company, title, dates, duties, id } = jobs[value];

  return (
    <section id="jobs" className="jobs">
      <div className="pj-info">
        <div className="category"><span>03</span> TIMELINE</div>
      </div>
      <div key={id} className="jobs-wrapper">
        <div className="section-header jobs-header">
          <h3>Work Experience</h3>
        </div>
        <div className="jobs-details">
          <div className="btn-container">
            {jobs.map((job, index) => {
              return (
                <button key={index} className={`company ${index === value && 'active-btn'}`} onClick={() => setValue(index)}>
                  {job.company}
                </button>
              )
            })}
          </div>
          <div className="info">
            <p className="company"><span>Company:</span> {company}</p>
            <p className="title"><span>Role:</span> {title}</p>
            <p className="dates">{dates}</p>
            <ul className="duties">

              {duties.map((duty, index) => {
                return (
                  <li key={index}><BsChevronDoubleRight /> {duty}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="clouds-bg" viewBox="0 0 3720 1145">
        <g fill="#dedfe0">
          <path d="M3720,1145H0V444.9c111.3-30.5,231.3-47.2,356.5-47.2c285.8,0,544.7,86.7,733.3,227.1
                  c170.5-91.4,378.8-145.1,603.8-145.1c342.5,0,646.5,124.5,837,316.9c102.2-71.3,238.8-114.9,388.9-114.9c45,0,88.8,3.9,130.8,11.3
                  c27.9-314.8,295-580,665.1-693L3720,1145z"></path>
        </g>
      </svg>
    </section>
  )
}

export default Timeline;