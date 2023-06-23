import React from "react";
import "../css/review.css";

function Review() {
  return (
    <>
      <div>
        <h3 className="faq">Testimonials</h3>
        <h1 className="review-mainheading">Everyone Says the Same Thing</h1>
      </div>

      <div className="review-div">
        <div className="review-text">
          <h1 className="review-heading">
            Our Customer Love
            <span className="greenText"> What we </span>Do
          </h1>
          <p className="review-desc">
          Empowering sustainable transportation with satisfied customers
          </p>
        </div>
        <div className="review-card">
          <div className="review-body">
            <p className="review">
              charzit has been a game-changer for me as an electric vehicle
              owner.I easily locate charging stations while out
              and about, the multiple options available let me pick the most
              cost-effective solution that meets my needs. 
            </p>
            <h4 className="customer-name">Siddhant Kotambe</h4>
          </div>
          <div className="review-body">
            <p className="review">
              charzit charging stations are of the highest quality, providing
              an effortless charging experience. We admire charzit commitment
              to sustainability and are proud to be their partner.
            </p>
            <h4 className="customer-name">Mahesh Kalkute</h4>
          </div>
          <div className="review-body">
            <p className="review">
              charzit platform has been a game-changer. With it, I can quickly
              access and save information related to electric vehicles, while
              the charging history feature helps us monitor energy usage. 
            </p>
            <h4 className="customer-name">Krushna Channe</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
