import React from 'react'
import { TiLocation } from "react-icons/ti";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import gradientContact from "../assets/gradientContact.png"
const Contact = () => {
    const MapStyle = {
        width: "100%",
        height: 300,
      };
  return (
    <div className="contact-sec" id="contact-sec">
      <div className="box">
        <div className="gradientContact">
          <img src={gradientContact} alt="gradientContact" />
        </div>
        <div className="left">
          <h2>Register Yourself</h2>
          <form >
            <div className="wrapper-input">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />
           
              <input
                name="message"
                type="text"
                id="message"
                required
                placeholder="Wallet Address"
              />
        
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>

        
        <div className="right">
          <div className="iframeMapContainer">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1222073449103!2d106.77590781537452!3d-6.2476228629146675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f11b12c11ab7%3A0xcd48f5c775249316!2sHumanity%20First%20Indonesia!5e0!3m2!1sid!2sid!4v1605684563677!5m2!1sid!2sid"
              width={MapStyle.width}
              height={MapStyle.height}
              style={{ border: 0, borderRadius: 12 }}
              allowFullScreen=""
            //   aria-hidden="false"
            //   tabIndex="0"
              title="Java Times Token"
            />
          </div>
          <div className="one">
           <TiLocation style={{color:"red",fontSize:"30px"}}/>
            <p>Mexico</p>
          </div>
          <div className="one">
            <BiPhoneCall style={{color:"red",fontSize:"30px"}}/>
            <a
              href="tel:52(871) 6884425"
            >
              <p>+52(871) 6884425</p>
            </a>
          </div>
          <div className="one">
           <MdOutlineEmail style={{color:"red",fontSize:"30px"}}/>
            <a href="mailto:info@javatimescaffe.com">
              <p>info@javatimescaffe.com</p>
            </a>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Contact
