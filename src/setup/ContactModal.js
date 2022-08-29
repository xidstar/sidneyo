import React from 'react';
import { useGlobalContext } from './context'
import { TiTimes, TiSocialInstagram, TiSocialGithub, TiSocialLinkedin } from "react-icons/ti";
import { FaRegEnvelope } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import ContactForm from './ContactForm';

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
      <div className="modal-container">
        <div className="modal-content">
          <button className="close" onClick={closeModal}><TiTimes /></button>
          <div className="mail">
            <ContactForm />
            <span></span>
            <div className="social">
            <a href="https://www.linkedin.com/in/sidney-oluoch" target="_blank"><TiSocialLinkedin /></a>
            <a href="https://github.com/xidstar" target="_blank"><TiSocialGithub /></a>
            <a href="https://www.instagram.com/xidstar/" target="_blank"><TiSocialInstagram /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sidneyo254@gmail.com" target="_blank"><FaRegEnvelope /></a>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Modal;