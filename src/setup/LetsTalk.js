import React from "react";
import { HiOutlineArrowLeft, HiChevronRight } from "react-icons/hi";
import { BsBoxArrowInUpRight } from "react-icons/bs";



function LetsTalk() {
  
  return (
    <section id="letsTalk" className="letsTalk">
      <div className="pj-info">
        <div className="category"><span>03</span> GET IN TOUCH</div>
      </div>
      <div className="container">
        <h3>Ready for your next project?</h3>
        <div className="talk">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sidneyo254@gmail.com" target="_blank">
            <span>Let's Talk<BsBoxArrowInUpRight/></span>
            <span>Let's Talk<BsBoxArrowInUpRight/></span>
          </a>
        </div>
      </div>
      <div className="back-btn-wrap">
        <HiOutlineArrowLeft />
        <a className="back" href="/">Back</a>
      </div>
    </section>
   
  )
}

export default LetsTalk;