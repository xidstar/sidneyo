// import React from 'react';
import { BsChevronDown } from "react-icons/bs";
import moonlight from './img/moonlight_m.svg';
import cloud1 from './img/cloud1.svg';
import cloud2 from './img/cloud2.svg';
import cloud3 from './img/cloud3.svg';
import cloud4 from './img/cloud4.svg';
import cloud5 from './img/cloud5.svg';

const Landing = () => {
  const animateClouds = (e) => {
    let moveX = ((window.innerWidth / 21) - e.pageX) * 0.05;
    let moveY = ((window.innerHeight / 21) - e.pageY) * 0.05;

    document.querySelector('.cloud1').style.marginLeft = (moveX / -1.5) + 'px';
    document.querySelector('.cloud1').style.marginTop = (moveY / 2) + 'px';
    document.querySelector('.cloud2').style.marginLeft = (moveX / -4) + 'px';
    document.querySelector('.cloud2').style.marginTop = (moveY / 2) + 'px';
    document.querySelector('.cloud3').style.marginLeft = (moveX / 2) + 'px';
    document.querySelector('.cloud3').style.marginTop = (moveY / -2) + 'px';
    document.querySelector('.cloud4').style.marginLeft = (moveX / 2) + 'px';
    document.querySelector('.cloud4').style.marginTop = (moveY / -1) + 'px';
    document.querySelector('.cloud5').style.marginLeft = (moveX / -2) + 'px';
    document.querySelector('.cloud5').style.marginTop = (moveY / .8) + 'px';
    document.querySelector('.moon-light').style.marginLeft = (moveX / .9) + 'px';
    document.querySelector('.moon-light').style.marginTop = (moveY / 2) + 'px';
  }
  return (
    <article id="home" onMouseMove={animateClouds}>
      <div className="text-left">
        <div className="text-container">
          <h1>SIDNEY <br /> OLUOCH</h1>
          <div className="border-lines">
            <span></span>
            <span></span>
          </div>
          <p>front-end developer / <br /> design enthusiast</p>
        </div>
      </div>

      <div className="moon text-right">
        <h2>PORTFOLIO</h2>
        <img className="moon-light" src={moonlight} alt="" />
        <img className="cloud cloud1" src={cloud1} alt="" />
        <img className="cloud cloud2" src={cloud2} alt="" />
        <img className="cloud cloud3" src={cloud3} alt="" />
        <img className="cloud cloud4" src={cloud4} alt="" />
        <img className="cloud cloud5" src={cloud5} alt="" />
      </div>

      <BsChevronDown className="arrow-down" />
    </article>
  )
}

export default Landing;
