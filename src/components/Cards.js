import React from "react";
import "../css/cards.css";
import { FaSearch } from "react-icons/fa";
import { IoOptionsOutline } from "react-icons/io5";
import { FaChargingStation } from "react-icons/fa";
import { FiBatteryCharging } from "react-icons/fi";
import { FaSave } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

function Cards() {
  return (
    <>
      <div>
        <h1 className="card-title">
          How do <span className="greenText">we</span> Work ?
        </h1>
        <p className="card-subtitle">
          Our team is dedicated to delivering purpose-driven, state-of-the-art
          solutions that are tailor-made to meet the specific needs of our
          valued customers.
        </p>
      </div>

    <div className="mySwiper">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0:{
            slidesPerView: 1,
            spaceBetween:10,
          } ,
          480:{
            slidesPerView: 2,
            spaceBetween:20,
          } ,
          786:{
            slidesPerView: 3,
            spaceBetween:20,
          } 

        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      
      >
        {/* first */}
        <SwiperSlide><div className="card-body">
            <div className="icons">
              <FaSearch />
            </div>
            <h3 className="card-in">find nearby charge spot </h3>
            <p>
              "Easily locate the nearest EV charging station with our
              user-friendly map feature"
            </p>
          </div></SwiperSlide>

{/* second */}
        <SwiperSlide><div className="card-body">
            <div className="icons">
              <IoOptionsOutline />
            </div>
            <h3 className="card-in">Charging Options</h3>
            <p>"Power up your EV with our flexible charging options" </p>
          </div></SwiperSlide>
{/* third */}
        <SwiperSlide> <div className="card-body">
            <div className="icons">
              <FiBatteryCharging />
            </div>
            <h3 className="card-in">Start Charging</h3>
            <p>"Get your EV charged up with our simple process"</p>
          </div></SwiperSlide>


{/* fourth  */}
        <SwiperSlide>
        <div className="card-body">
            <div className="icons">
              <FaSave />
            </div>
            <h3 className="card-in">Save EV Information</h3>
            <p>"Save your EV information for a seamless charging experience"</p>
          </div></SwiperSlide>
{/* fifth */}
        <SwiperSlide> <div className="card-body">
            <div className="icons">
              <FaHistory />
            </div>
            <h3 className="card-in">Get charging History</h3>
            <p>"Track your EV charging history with ease" </p>
          </div></SwiperSlide>

{/* sixth */}
        <SwiperSlide><div className="card-body">
            <div className="icons">
              <FaChargingStation />
            </div>
            <h3 className="card-in">See charging Station</h3>
            <p>"Book a slot and start charging the car"</p>
          </div></SwiperSlide>
  
      </Swiper>
      </div>

      {/* <div className="card">
        <div className="card-container">
          
          
         
        </div>
        <br></br>
        <br></br>
        <div className="card-container">

          <div className="card-body">
            <div className="icons">
              <FaSave />
            </div>
            <h3 className="card-in">Save EV Information</h3>
            <p>"Save your EV information for a seamless charging experience"</p>
          </div>

          <div className="card-body">
            <div className="icons">
              <FaHistory />
            </div>
            <h3 className="card-in">Get charging History</h3>
            <p>"Track your EV charging history with ease" </p>
          </div>

          <div className="card-body">
            <div className="icons">
              <FaChargingStation />
            </div>
            <h3 className="card-in">See charging Station</h3>
            <p>"Book a slot and start charging the car"</p>
          </div>
          
        </div>
      </div> */}
    </>
  );
}

export default Cards;
