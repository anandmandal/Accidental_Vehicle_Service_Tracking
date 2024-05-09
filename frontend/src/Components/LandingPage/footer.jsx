import React from 'react';
import './LandingPage.css'; // Define your footer styles in Footer.css
import { AiOutlineFacebook } from "react-icons/ai";
import { BsTwitterX } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero vitae nunc fringilla aliquam. Nulla facilisi.</p>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: anand26sept02@gmail.com</p>
          <p>Phone: +91 9708179366</p>
        </div>
        <div className="footer-section">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#"><i className="fab "><AiOutlineFacebook /></i></a>
            <a href="#"><i className="fab"> <BsTwitterX />
</i></a>
            <a href="#"><i className="fab "><FaLinkedinIn />
</i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
