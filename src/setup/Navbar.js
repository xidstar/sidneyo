import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuRight, CgClose } from "react-icons/cg";
import Logo from './img/so-logo.png';


const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (

    <nav className="top-nav container-fluid">
      <div className="container wrap logo">
        <Link to="/"><img src={Logo}></img></Link>
        <button className="menu-icon" onClick={() => toggleMenu()}>
          {showMenu ? <CgClose /> : <CgMenuRight />}
        </button>
      </div>

      <nav className={`${showMenu ? "global-nav show-menu" : "global-nav"}`}>
        <ul>
          <li><Link to="/" onClick={() => toggleMenu()}>HOME</Link></li>
          <li><Link to="/projects#projectsTop" onClick={() => toggleMenu()}>PROJECTS</Link></li>
          <li><Link to="/about#aboutTop" onClick={() => toggleMenu()}>ABOUT ME</Link></li>
          <li><Link to="/#contact" onClick={() => toggleMenu()}>CONTACT</Link></li>
        </ul>
      </nav>
    </nav>
  )
}

export default Navbar;
