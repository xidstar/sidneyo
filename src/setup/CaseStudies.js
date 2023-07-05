import React from 'react';
import caseStudiesInfo from './CaseStudiesInfo';
import WorkBg from './Work-Bg';
import { HiOutlineArrowRight} from "react-icons/hi";

const CaseStudies = () => {
  
  return (
    <section id="case-studies" className='case-studies'>
      <div className="pj-info">
        <div className="category"><span>01</span> RECENT WORKS</div>
      </div>

      <WorkBg />

      <div class="section-header">
        <h3>Case Studies</h3>
      </div>

      <div className="container case-study-container">
        <ul>
          {caseStudiesInfo.map((pj, id) => {
            const {category, name, url, description, index} = pj;

            return (
              <li key={id}>
                <a href={url} key={index} target="_blank">
                  <HiOutlineArrowRight />
                  <h3>{category}</h3>
                  <h4>{name}</h4>
                  <p>{description}</p>
                </a>
              </li>
            )
          })}
      </ul>
      </div>
    </section>
  )
}

export default CaseStudies;