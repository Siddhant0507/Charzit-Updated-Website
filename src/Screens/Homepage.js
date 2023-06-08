import React from 'react';
import Navbar from '../components/Navbar';
import Ipad from '../components/Ipad';
import Cards from '../components/Cards';
import Review from '../components/Review';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import "../css/Home.css";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function Homepage() {
 
  return (
    <>
    
    <div className='start'>
       <Navbar/>
        <div className='firstContainer'>
        <h3 className="subheading-div1">
            Experience limitless charging possibilities with Charzit
          </h3>
          <h1 className="home-heading">
            <span>EV Charging</span>
            <span className="greenText"> Solutions </span>
            <span>Where you like it </span>
          </h1>
          <p className="desc-div1">
            Our electric vehicle charging solutions are adaptable and efficient
            , allowing businesses to fulfill the rising demand for clean energy
            transportation while lowering their CO2 footprint.
          </p>
          <h2 className="desc-div1">Download Now</h2>
          <a href="/" target="_blank">
            <div className="btn-div">
              <FaGooglePlay className="btn" />
            </div>
          </a>

          <a href="/" target="_blank">
            <div className="btn-div">
              <FaApple className="btn" />
            </div>
          </a>
          </div>
    </div>


{/* second div */}
    <div className='secondDiv div2'>
         <div className="imgSection">
          <img className="img" src="../charger2.png" alt="car-img" />
        </div>
        <div className="TextSection">
          <h1 className="div2-heading">
            Power up your <span className="greenText">journey with </span>{" "}
            charging stations.
          </h1>
          <p className="div2-desc">
            Charzit is a company that provides charging infrastructure for
            electric vehicles, including two-wheelers, three-wheelers, and
            four-wheelers. We install, operate, and maintain charging stations
            for public, commercial, and residential use. Charzit partners with
            property owners, municipalities, or businesses to install charging
            stations in various locations such as public parking lots, shopping
            centers, or along highways. Their main goal is to ensure that
            electric vehicle drivers have access to reliable and convenient
            charging stations
          </p>
        </div>
    </div>

    <div className="secondDiv div2">
        <div className="TextSection">
          <h1 className="div3-heading">
            Enable the <span className="greenText">Growth of Nature</span> with
            Direct Benefits
          </h1>
          <p className="div2-desc">
            Charzit offers an eco-friendly driving experience that helps you
            save money on fuel costs and contributes to a cleaner environment .
            By choosing an electric car, you can drive towards a more
            sustainable future and play your part in creating a better tomorrow.
          </p>
        </div>
        <div className="imgSection">
          {/* <IoLogoGooglePlaystore/> */}
          <img className="img31 img3" src="../div31.png" alt="img" />
          <img className="img32 img3" src="../div32.png" alt="img" />
        </div>
      </div>


   {/* Number Animation */}

      <div className="number-animation">
        <div>
          <h1>150+</h1>
          <h3>charging Stations</h3>
        </div>

        <div>
          <h1>500+</h1>
          <h3>Active User</h3>
        </div>

        <div>
          <h1>1500+</h1>
          <h3>Charging Sections</h3>
        </div>
      </div>

      <Ipad/>

      <Cards/>
      <Review/>
      <Faq/>
      <Footer/>



     
    </>
  )
}

export default Homepage