import React,{useEffect}from 'react'
import Navbar from '../components/Navbar';
import '../css/partnerWithUs.css'

function PartnerWithUs() {
  useEffect(() => {
    document.title="Our Products";
  },[]);
  return (
    <>
    <div className='NavDiv'><Navbar/></div>
    <h1 className='us-title'>Development Under Progresss ....</h1>   
    </>
  )
}

export default PartnerWithUs