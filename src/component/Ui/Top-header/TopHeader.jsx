import React from 'react';
import './TopHeader.css';
import { FaFacebook } from "react-icons/fa";//<FaFacebook />
import { FaTwitter } from "react-icons/fa";//<FaTwitter />
import { RiInstagramFill } from "react-icons/ri";//<RiInstagramFill />
import { IoLogoWhatsapp } from "react-icons/io";//<IoLogoWhatsapp />
import { AiFillYoutube } from "react-icons/ai";//<AiFillYoutube />
import { FaPinterest } from "react-icons/fa6";//<FaPinterest />
import { NavLink } from 'react-router-dom';

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="contact-info">
        <span>
          <i className="fas fa-phone-alt"></i> (+91) 9394117119
        </span>
        <span>
          <i className="fas fa-envelope"></i> svtechsoft@gmail.com
        </span>
        <span>
          GSTIN: 37CAQPA8156F1ZH
        </span>
      </div>
      <div className="social-and-auth">
        <div className="social-icons">
          <i className="fab fa-facebook-f"><FaFacebook /></i>
          <i className="fab fa-twitter"><FaTwitter /></i>
          <i className="fab fa-instagram"><RiInstagramFill /></i>
          <i className="fab fa-youtube"><IoLogoWhatsapp /></i>
          <i className="fab fa-whatsapp"><AiFillYoutube /></i>
          <i className="fab fa-pinterest"><FaPinterest /></i>
        </div>
        <div className="auth-buttons">
          <NavLink to="/login"><button className="login-btn">Login</button></NavLink>
          <NavLink to="/register"><button className="register-btn">Register</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
