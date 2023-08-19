import React from "react";
import "../Homes.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Contact = () => {
  return (
  
    <>
      <div className="contact" id="contact">
        <div className="container">
            <h2 className="special-heading">Contact</h2>
            <p>We are born to create</p>
            <div className="info">
                <p className="label">Feel free to drop us a line at:</p>
                <a href="mailto:leonagency@mail.com?subject=Contact" className="link"></a>
                <div className="social">
                    Find Us On Social Networks
                    <a href="https://www.youtube.com/" target="_blank"><img src={require('../imgs/youtube.png')} alt="this is image"/></a>
                    <a href="https://www.facebook.com/" target="_blank"><img src={require('../imgs/facebook.png')} alt="this is image"/></a>
                    <a href="https://twitter.com/?lang=en" target="_blank"><img src={require('../imgs/twitter.png')} alt="this is image"/></a>
                </div>
            </div>
        </div>
    </div>
    <div className="footer">
        &copy; 2023 <span>vimeo</span> All Right Reserved
    </div>
    </>
  )};



export default Contact;
