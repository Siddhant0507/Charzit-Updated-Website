import React from "react";
import "../css/footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="row">
          <div className="column">
            <img className="footerLogo" src="../Charzit1.png" alt="img" />
          </div>

          <div className="column">
            <h3>Learn More</h3>
            <NavLink to="/About" className="footerLinks">About Us</NavLink>
            <NavLink to="/Contact" className="footerLinks">Contact Us</NavLink>
            <p>Privacy Policy</p>
          </div>

          <div className="column">
            <h3>Contact Us</h3>
            <p>Email : contact@charzit.com</p>
            <p>Contact No. : 7276136717</p>
          </div>

          <div className="column">
            <h3>Social Media</h3>
            <a href="https://www.linkedin.com/company/charzit/about/" target="_blank" rel="noopener noreferrer">
              <div className="social">
                <BsLinkedin />
              </div>
            </a>
            <a href="https://www.instagram.com/charz_it/"  target="_blank" rel="noopener noreferrer"> <div className="social">
              <BsInstagram />
            </div></a>
           
            <div className="social">
              <BsTwitter />
            </div>
          </div>
        </div>
        <div className="footer-line" ></div>
      </footer>
    </>
  );
}

export default Footer;
