import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import ContactForm from "./ContactForm";

function LetsTalk() {
  
  return (
    <section id="letsTalk" className="letsTalk">
      <div className="pj-info">
        <div className="category"><span>02</span> GET IN TOUCH</div>
      </div>
      <div className="container">
        <h3>Ready for your next project?</h3>
        <span className="talk">
          <p>Let's Talk</p>
        </span>
        
        <ContactForm />
      </div>
      <div className="back-btn-wrap">
        <HiOutlineArrowLeft />
        <a className="back" href="/">Back</a>
      </div>
    </section>
  )
}

export default LetsTalk;