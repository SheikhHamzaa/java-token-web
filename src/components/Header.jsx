import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo_header from "../assets/logo-header.png"
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
const Header = () => {
    const[activeItem,setActiveItem] = useState("home");
    const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState("");

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
const clickHandle=()=>{
  document
        .getElementById("contact-sec")
        ?.scrollIntoView({ block: "start", behavior: "smooth" });
}
    useEffect(()=>{
        if(searchParams.get("scrollTo")){
            document.getElementById(searchParams.get("scrollTo"))
            ?.scrollIntoView?.({block:'start',behavior:'smooth'})
        }
         document.getElementById(name)
      ?.scrollIntoView?.({ block: "start", behavior: "smooth" });

    setName("");
    },[searchParams.get("scrollTo"),name])
  return (
    <>
    <header>
        <div className='left'>
           <a href="/">
           <img src={logo_header} alt="" />
           </a>
        </div>

        <div className='right'>
            <ul>
                <Link to='/'>
                    <li onClick={()=> setActiveItem("home")} 
                    className={activeItem === "home"? 'active' :''}>Home</li>
                </Link>

                <Link to={'/?scrollTo=tokenomics'}>
                    <li  onClick={()=> setActiveItem("tokenomics")} 
                    className={activeItem === "tokenomics"? 'active' :''}>Tokenomics</li>
                </Link>

                <Link to={'/?scrollTo=features'}>
                    <li onClick={()=> setActiveItem("features")} 
                    className={activeItem === "features"? 'active' :''}>Features</li>
                </Link>

                <Link to={'/?scrollTo=roadmap'}>
                    <li onClick={()=> setActiveItem("roadmap")} 
                    className={activeItem === "roadmap"? 'active' :''}>Roadmap</li>
                </Link>

                <Link to={'/?scrollTo=faqs'}>
                    <li onClick={()=> setActiveItem("faqs")} 
                    className={activeItem === "faqs"? 'active' :''}>FAQs</li>
                </Link>

                <Link to={'/?scrollTo=ourTeam'}>
                    <li onClick={()=> setActiveItem("ourTeam")} 
                    className={activeItem === "ourTeam"? 'active' :''}>Team</li>
                </Link>
                   
                   
                <button onClick={clickHandle} className='register-now'>Register Now</button>
            </ul>
        </div>


{/* --------------------------------for mobile view */}

        <div className="hamburger-mobile">
          <ul>
            <li className="hamburger" onClick={() => setIsActive(!isActive)}>
              <GiHamburgerMenu color="#fff" />
            </li>
          </ul>
        </div>
        <div
          className={`mobile-nav ${isActive ? "active" : ""}`}
          id="mobile-hambargur"
        >
          <div className="one">
            <div className="one-left">
              <a href="/">
                <img
                  src={logo_header}
                  alt="logo"
                //   style={{ width: "65px", borderRadius: "100%" }}
                />

              </a>
            </div>

            <div
              className={`one-right ${isActive ? "active" : ""}`}
              onClick={() => setIsActive(!isActive)}
            >
              <RxCross2 color="#fff" />
            </div>
          </div>

          <div className="two" id="after-login-mobile">
            <ul>
              <Link
                to="/"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <li>Home</li>
              </Link>
              <Link
                to="/?scrollTo=tokenomics"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <li>Tokenomics</li>
              </Link>

              <Link
                to="/?scrollTo=features"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <li>Features</li>
              </Link>
              <Link
                to="/?scrollTo=roadmap"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <li>Roadmap</li>
              </Link>
              <Link
                to="/?scrollTo=faqs"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <li>FAQs</li>
              </Link>
              <Link
                to="/?scrollTo=ourTeam"
                onClick={() => {
                  setIsActive(false);
                }}
              >
                <li>Team</li>
              </Link>
              <div className="btn-wrapper">
                <button>Register Now</button>
              </div>
            </ul>
          </div>
        </div>
    </header>
    
    
    
    </>
  )
}

export default Header
