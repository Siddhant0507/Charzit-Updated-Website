import React from "react";
import "./contact.css";

function Contact() {
    const formSubmit = ()=>{
        alert("form submitted successfully")
    }
  return (
    <>
      <div className="contactContainer">
        <div className="inputFields">
         
          <h3 className="inputText">Name</h3>
          <input className="formInput" type="text" required autoFocus/>

          <h3 className="inputText">Email ID</h3>
          <input className="formInput" type="text" required autoFocus/>

          <h3 className="inputText">Phone Number</h3>
          <input className="formInput" type="text" required autoFocus/>

          <h3 className="inputText">Message</h3>
          <textarea className="formInput" type="text" rows={5} required autoFocus/>

          <button className="submitBtn" onClick={formSubmit}>Submit</button>

        </div>

        <div>
          <h3 className="subHeadings">Call Us </h3>
          <p className="data">
            Contact us by calling on our helpline number for any problem you
            face.
          </p>
          <p className="data"> +91 9175970454</p>

          <h3 className="subHeadings">Visit Us</h3>
          <p className="data">
            CHARZIT PRIVATE LIMITED<br></br> Indira Memories, Next to NEXA
            ShowRoom Sakal Nagar, Pune , Maharashtra , India, 411007
          </p>

          <h3 className="subHeadings">Chat With Us</h3>
          <p className="data">
            Give your important feedback at given gmail to imporve our costomer
            interaction.</p>
          <p className="data">contact@charzit.com</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
