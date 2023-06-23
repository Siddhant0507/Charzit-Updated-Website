import React from "react";
import "../css/ipad.css";

function Ipad() {
  return (
    <>
      <div className="secondDiv ipadMaindiv">
        <div className="imgSection">
          <div className="phoneimg">
            <img className="ipad" src="../iPad.png" alt="img" />
          </div>
        </div>

        <div className="TextSection">
          <img className="logo-img" src="../Charzit1.png" alt="img" />
          <h1 className="ipad-heading">
            <span>Smart App Loded With</span>
            <span className="greenText"> Smart Feature</span>
          </h1>
          <p className="desc">
            The Charge Zone® Smart App is fully loaded with interactive features
            and offers a smarter way to manage your charging needs.
          </p>
    
            <img className="ios-btn" src="../ios.png"  alt="img" onClick={()=>{alert("App is under Development")}} />
          

          
            <img className="ios-btn" src="../android.png" alt="img" onClick={()=>{alert("App is under Development")}} />
          
        </div>
      </div>
    </>
  );
}

export default Ipad;
