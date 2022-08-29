import React from 'react';
import { FaRegEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { Link } from 'react-router-dom';
import Logo from './img/so-logo.png';

function Footer() {
  var d = new Date();
  var newYear = d.getFullYear();

  return (
    <footer>
      <div>
        <Link to="/"><img src={Logo}></img></Link>
      </div>
      <div>
        <p>sidneyo, ©{newYear}</p>
      </div>
      <div>
        <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=sidneyo254@gmail.com" target="_blank">
          <FaRegEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/sidney-oluoch" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/xidstar" target="_blank">
          <FaGithub />
        </a>
      </div>
    </footer>
  )
}

export default Footer;