import React from "react";
import Slider from "react-slick";
import upcomingEventImage from "../assets/upcoming-event.png";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
const SliderEvents = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>

        <div className="wrapper">
          <img src={upcomingEventImage} alt="" />

          <div className="card">

            <div className="content">
              <h3>Kisiko batana Mat</h3>
              <p>Shilpakala Vedika, HITECH city</p>

              <div className="location-con">
                <MdOutlineLocationOn style={{ color: "red" }} />

                <p>Location</p>
              </div>

              <div className="rupee-con">
              <FaDollarSign color="#C70700"/>
                <p>799 onwards</p>
              </div>
            </div>

          </div>
        </div>

        
        <div className="wrapper">
          <img src={upcomingEventImage} alt="" />

          <div className="card">

            <div className="content">
              <h3>Kisiko batana Mat</h3>
              <p>Shilpakala Vedika, HITECH city</p>
              
              <div className="location-con">
                <MdOutlineLocationOn style={{ color: "red" }} />

                <p>Location</p>
              </div>

              <div className="rupee-con">
              <FaDollarSign color="#C70700"/>
                <p>799 onwards</p>
              </div>
            </div>

          </div>
        </div>

        
        <div className="wrapper">
          <img src={upcomingEventImage} alt="" />

          <div className="card">

            <div className="content">
              <h3>Kisiko batana Mat</h3>
              <p>Shilpakala Vedika, HITECH city</p>
              
              <div className="location-con">
                <MdOutlineLocationOn style={{ color: "red" }} />

                <p>Location</p>
              </div>

              <div className="rupee-con">
              <FaDollarSign color="#C70700"/>
                <p>799 onwards</p>
              </div>
            </div>

          </div>
        </div>

        
        <div className="wrapper">
          <img src={upcomingEventImage} alt="" />

          <div className="card">

            <div className="content">
              <h3>Kisiko batana Mat</h3>
              <p>Shilpakala Vedika, HITECH city</p>
              
              <div className="location-con">
                <MdOutlineLocationOn style={{ color: "red" }} />

                <p>Location</p>
              </div>

              <div className="rupee-con">
              <FaDollarSign color="#C70700"/>
                <p>799 onwards</p>
              </div>
            </div>

          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderEvents;
