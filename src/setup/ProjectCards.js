import React from 'react';
import projectsInfo from './ProjectsInfo';
import Clouds from './clouds';

const ProjectCards = () => {
  return (
    <section id="pjs" className="pjs">
      <div className="pj-info">
        <div className="category"><span>02</span> PROJECTS</div>
      </div>
      <div className="section-header">
        <h3>Sample Projects</h3>
      </div>
      <div className="pj-container">
        {projectsInfo.map((pj, id) => {
          // const newID = new Date().getTime().toString();
          const { name, img, details, url, index } = pj;
          return (
            <a key={id} href={url} className="pj-card" target={url === '/' ? '' : '_blank'}>
              <div key={index} className={`${name} col-card`}>
                <img src={img} alt="" />
                <div className="bottom">
                  <div className="connections">
                    <div className="connection facebook">
                      <div className="icon"></div>
                    </div>
                    <div className="connection twitter">
                      <div className="icon"></div>
                    </div>
                    <div className="connection behance">
                      <div className="icon"></div>
                    </div>
                  </div>
                  <div className="info">
                    <div className="name">{name}</div>
                    <div className="job">{details}</div>
                  </div>
                </div>
                <div className="card-blur"></div>
              </div>
            </a>
          )
        })}
      </div>
      <a href="https://github.com/xidstar" target="_blank" className="more-pjs" aria-label="See more projects">See more</a>
      <Clouds />
    </section>
  )
}


export default ProjectCards;

