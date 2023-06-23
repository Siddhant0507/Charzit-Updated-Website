import React,{useEffect} from "react";
import "../css/contact.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
function Contact() {
  useEffect(() => {
    document.title="Contact Us";
  },[]);
  const formSubmit = () => {
    alert("form submitted successfully");
  };
  return (
    <>
    <div className="NavDiv"><Navbar/></div>
    
    <div className="contactMain">
        <h1 className="heading">
          Get in <span className="greenText">Touch</span>
        </h1>
        <h4 className="subheading-div1">send a message</h4>
       </div>


      <div className="contactContainer">
        <div className="inputFields">
          <h3 className="inputText">Name</h3>
          <input className="formInput" type="text" name="userName" min={5} required />

          <h3 className="inputText">Email ID</h3>
          <input className="formInput" type="email" name="userEmail" required  />

          <h3 className="inputText">Phone Number</h3>
          <input className="formInput" type="text" name="userNumber" min={10} required  />

          <h3 className="inputText">Message</h3>
          <input
            className="formInput"
            type="text"
            name="userMessage"
            required
            min={5}
            
          />

          <button className="submitBtn" onClick={formSubmit}>
            Submit
          </button>
        </div>

        <div>
          <div className="infoDiv">
            <h3 className="subHeadings">Call Us </h3>
            <p className="data descContact">
              Contact us by calling on our helpline number for any problem you
              face.
            </p>
            <p className="data"> +91 9175970454</p>
          </div>
          <div className="infoDiv">
            <h3 className="subHeadings">Visit Us</h3>
            <p className="data descContact">
              CHARZIT PRIVATE LIMITED<br></br> Indira Memories, Next to NEXA
              ShowRoom Sakal Nagar, Pune , Maharashtra , India, 411007
            </p>
          </div>
          <div className="infoDiv">
            <h3 className="subHeadings">Chat With Us</h3>
            <p className="data descContact">
              Give your important feedback at given gmail to imporve our
              costomer interaction.
            </p>
            <p className="data">contact@charzit.com</p>
          </div>
          </div>
        
      </div>

      <Footer/>
    </>
  );
}

export default Contact;
