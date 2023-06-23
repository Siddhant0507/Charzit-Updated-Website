
import React,{useState} from 'react';
import"../css/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

function Navbar() {
  const[ isMobile, setIsMobile]=useState(false)
    
  return (
    <>
    <div className='nav'>
    <img className="logo-img" src="../Charzit1.png" alt="img" />
    <ul className={isMobile?"nav-links-mobile":"nav-links"}
    onClick={()=>setIsMobile(false)}>
      <NavLink to="/" className="home">
        <li>Home</li>
      </NavLink>
      <NavLink to="/About" className="aboutus">
        <li>About Us</li>
      </NavLink>
      <NavLink to="/Contact" className="contact">
        <li>Contact Us</li>
      </NavLink>
      <NavLink to="/PartnerWithUs" className="products">
        <li>Our Products</li>
      </NavLink>
    </ul>
    <div className='mobile-menu-icon' onClick={()=>setIsMobile(!isMobile)}>
       {isMobile?<i><RxCross2/></i>:<i><GiHamburgerMenu/></i>} 
         </div>
    </div>
    </>

  )
}

export default Navbar