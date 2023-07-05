import React from "react";
import AboutBg from "./About-Bg";
import 'animate.css'

function AboutMe() {
  
  return (
    <section id="aboutMe">
      <div className="pj-info aboutme-p">
        <div className="category"><span>01</span> ABOUT ME</div>
      </div>

      <AboutBg />

      <div className="container">
        <div class="section-header jobs-header">
            <h3>"Hi, I'm Sid!"</h3>
        </div>
        <p>I'm a creative developer with years of experience in building products and appealing web experiences. My gateway to front end development was my love of Art and Design — looking at it, studying it, and then creating it. The science surrounding human perception, communication, and creativity fascinates me to this day.
        <br /><br />
        As a front-end developer & designer, I've helped think tank experts build a web presence and hone their content, giving them an opportunity to connect with their audiences in clearer, more imaginative ways.
        <br /><br />
        I've lead the front end efforts of web projects large and small on topics such as financial services, non-profits and food services. Every new product is an exciting opportunity to mold complex analysis and data into a clear, compelling, and accessible form.
        <br /><br />
        I work closely with developers throughout these projects and collaborate with other members of a multidisciplinary team to produce code, graphics, data visualizations, and videos under a unified vision.</p>
      </div>
    </section>
  )
}

export default AboutMe;