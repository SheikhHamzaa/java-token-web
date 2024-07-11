import React from 'react'
import { Link } from 'react-router-dom'
import logoFooter from "../assets/logo-footer.svg"
import bgStar from "../assets/stars.png"
import { Parallax } from 'react-parallax'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
<Parallax
      className="image"
      blur={0}
      bgImage={bgStar}
      strength={800}
      bgImageStyle={{ minHeight: "100vh" }}
    >
      <footer>
        <div className="up">
          

        <div className="down">
          <div className="one-up">
            <div className="left">
              <Link to={"/"}>
                <img src={logoFooter} alt="logoFooter" />
              </Link>
            </div>
            <div className="right">
              <ul>
                <li>Home</li>
                <Link to={"/?scrollTo=tokenomics"}>
                  <li>Tokenomics</li>
                </Link>
                <Link to="/?scrollTo=feature">
                  <li>Features</li>
                </Link>
                <Link to="/?scrollTo=roadmap">
                  <li>Roadmap</li>
                </Link>
                <Link to="/?scrollTo=faqs">
                  <li>FAQs</li>
                </Link>
                <Link to="/?scrollTo=ourTeam">
                  <li>Team</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="one-down">
            <div className="left">
              <div className="social-con">
                <Link
                  to="https://www.facebook.com/JavaTimesCaffe?mibextid=ZbWKwL"
                  target="_blank"
                >
                  <FaFacebookF style={{color:"#fff",opacity:"80%",fontSize:"20px"}}/>
                </Link>
                <Link
                  to="https://www.instagram.com/javatimescaffe/?igshid=NmE0MzVhZDY%3D"
                  target="_blank"
                >
                  <IoLogoInstagram style={{color:"#fff",opacity:"80%",fontSize:"20px"}}/>
                </Link>

                <FaLinkedin style={{color:"#fff",opacity:"80%",fontSize:"20px"}}/>

                <Link
                  to="https://twitter.com/javatimescaffe?t=Q2myIHKv4waNHL3Wev-Q-g&s=09"
                  target="_blank"
                >
                  <FaTwitter style={{color:"#fff",opacity:"80%",fontSize:"20px"}}/>
                </Link>
               
               <SiGmail style={{color:"#fff",opacity:"80%",fontSize:"20px"}}/>
              </div>
            </div>
            <div className="right">
              <p>
                © 2024 Copyright. <span> Java Coffee Token </span>
              </p>
            </div>
          </div>
        </div>
        </div>
      </footer>
    </Parallax>
  )
}

export default Footer
