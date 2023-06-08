import React from "react";
import Navbar from "../components/Navbar";
import "../css/aboutus.css";
import Footer from "../components/Footer";
function AboutUs() {
  return (
    <>
      <Navbar />

      <div className="aboutStart">
        <h3 className="about">About Us</h3>
        <h1 className="first-heading">Our Partners</h1>
      </div>

 {/* first div */}
      <div className="secondDiv">
          <div className="imgSection">
          <img className="img" alt=" iamge" src="../charging.png" />
          </div>

        <div className=" TextSection">
          <h1 className="div2-heading">
            Our <span className="greenText">Story</span>
          </h1>
          <p className="div2-desc">
            Charzit is a charging station platform with the best electric
            vehicle charging experience. As a charging station platform, we
            guarantee access to top-quality technology at wallet-friendly prices
            so you can focus on enjoying driving your electric car without
            worrying about charging costs. At Chargeit, we are dedicated to
            preserving the environment. Our charging stations are strategically
            located for your convenience, making charging your electric vehicle
            easy. Moreover, our products are of the highest quality with
            exceptional customer service - make Chargeit your best charging
            station platform for all electric vehicle charging needs today.
          </p>
        </div>
      </div>


 {/* second div */}
      <div className="secondDiv">
        <div className="TextSection">
          <h1 className="div3-heading">
            Meet the <span className="greenText">Team</span>
          </h1>
          <p className="div2-desc">
            At Chargeit, we are proud to have an incredibly talented and
            passionate team dedicated to providing our customers with the best
            electric vehicle charging experience. Our team consists of experts
            in technology, engineering, customer service, and sustainability
            experts - ensuring you always receive top-quality service.
          </p>
        </div>

        <div className="imgSection">
          <img className="img31" alt="" src="../team1.png" />
          <img className="img32" alt="" src="../team2.png" />
          
        </div>
      </div>

{/* saurabh section */}
      <div className="secondDiv">
        <div className="imgSection">
          <img className="img" alt="" src="../founder2.jpg" />
        </div>

        <div className="text-area">
          <h3 className="div3-heading">
            Meet the <span className="greenText">Co-Founder</span>
          </h3>
          <h1>Mr. Saurabh Gawade</h1>
          <h4 className="cofounder">Co-Founder</h4>
          <p className="div2-desc">
            Saurabh Gawade is a highly accomplished professional with a diverse
            engineering, business, and EV industry background. He holds a
            Master's degree in Business Marketing, a Bachelor's degree in
            Engineering. Saurabh's rich experience in the electric vehicle (EV)
            industry includes working at Okinawa, a well-known two-wheeler EV
            brand, and serving in key roles at Customized Energy Solutions and
            Emerson Process Management. As a result of his extensive experience,
            Saurabh has gained a deep understanding of the EV industry, which he
            brings to his role at Charzit. With his wealth of knowledge and
            expertise, Saurabh is a valuable asset to the Charzit team.
          </p>
        </div>
      </div>

      <div className="secondDiv">
         <div className="text-area">
         
          <h1>Raj Kalkute</h1>
          <h4 className="cofounder">Co-Founder</h4>
          <p className="div2-desc">
            Saurabh Gawade is a highly accomplished professional with a diverse
            engineering, business, and EV industry background. He holds a
            Master's degree in Business Marketing, a Bachelor's degree in
            Engineering. Saurabh's rich experience in the electric vehicle (EV)
            industry includes working at Okinawa, a well-known two-wheeler EV
            brand, and serving in key roles at Customized Energy Solutions and
            Emerson Process Management. As a result of his extensive experience,
            Saurabh has gained a deep understanding of the EV industry, which he
            brings to his role at Charzit. With his wealth of knowledge and
            expertise, Saurabh is a valuable asset to the Charzit team.
          </p>
        </div>
        <div className="img-area">
          <img className="img" alt="" src="../raj.jpg" />
        </div>
      </div> 


     <Footer/>

     

     
    </>
  );
}

export default AboutUs;
