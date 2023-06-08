import React from 'react';
import"../css/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
    const navList=()=>{
        alert("btn clicked")
    }
  return (
    <div className='container'>
        <div className='burger-img'  onClick={() => navList()}>
        <GiHamburgerMenu/>
        </div>
    <div className='logo'>
    <img className="logo-img" src="../Charzit1.png" alt="img" />
    </div>
    <nav className='nav-options'>
        <a href='/' className='nav'>Home</a>
        <a href='/about' className='nav'>About Us</a>
        <a href='/contact' className='nav'>Contact Us </a>
        <a href='/partnerWithUs' className='nav'>Our Products </a>
    </nav>
</div>
  )
}

export default Navbar