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

    document.querySelector('.cloud1').style.transform = `translate3d(${moveX / 0.5}px, ${moveY / 0.5}px, 0)`;
    document.querySelector('.cloud2').style.transform = `translate3d(${moveX / 1}px, ${moveY / 1}px, 0)`;
    document.querySelector('.cloud3').style.transform = `translate3d(${moveX / 0.7}px, ${moveY / 0.7}px, 0)`;
    document.querySelector('.cloud4').style.transform = `translate3d(${moveX / 0.72}px, ${moveY / 0.72}px, 0)`;
    document.querySelector('.cloud5').style.transform = `translate3d(${moveX / .9}px, ${moveY / .9}px, 0)`;

    document.querySelector('.moon-light').style.marginLeft = (moveX / 0.6) + 'px';
    document.querySelector('.moon-light').style.marginTop = (moveY / 0.6) + 'px';
  }
  return (
    <article id="home" onMouseMove={animateClouds}>
      <div className="text-left">
        <div className="text-container">
          <h1>SIDNEY <br /> OLUOCH</h1>
          <div className="border-lines">
            <span className="animate__animated animate__bounceInLeft"></span>
            <span className="animate__animated animate__bounceInLeft"></span>
          </div>
          <p>Creative Developer / <br /> Passionately Curious...</p>
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

      <BsChevronDown className="arrow-down animate__animated animate__bounce animate__infinite animate__slower" />
    </article>
  )
}

export default Landing;
