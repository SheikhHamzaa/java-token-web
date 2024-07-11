import React from 'react'
import Slider from 'react-slick';
import team1 from "../assets/team1.jpg"
import team2 from "../assets/team2.jpg"
import team3 from "../assets/team3.jpg"
import team4 from "../assets/team4.jpeg"
const SliderTeam = () => {
   
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
    
      <Slider
        {...settings}
      
      >
        <div className="wrapper">
          <img src={team1} alt="team1" />
          <div className="card">
            <h2>Antonio Leite</h2>
            <h3>CEO & Founder</h3>
            <p>Antonio Leite is a seasoned professional with extensive experience in
            developing and managing complex technology projects across various industries.</p>
          </div>
        </div>
        <div className="wrapper">
          <img src={team2} alt="team2" />
          <div className="card">
            <h2>Andres Leite Casielles</h2>
            <h3>CRM Intern</h3>
            <p>Leite Casielles execute our CRM strategy and activities in the region
            with direct responsibility for campaign management.</p>
          </div>
        </div>
       
        <div className="wrapper">
          <img src={team3}  alt="team3" />
          <div className="card">
            <h2>Paulina Leite</h2>
            <h3>Senior Marketing Executive</h3>
            <p>Paulina Leite Manage Java Times Caffe's communications portfolio,
including but not limited to brand campaigns, events, influencer marketing/referral
programs and more.</p>
          </div>
        </div>
        <div className="wrapper">
          <img src={team4}  alt="team4" />
          <div className="card">
            <h2>Fahad Wahid</h2>
            <h3>Development Project Leader</h3>
            <p>Fahad Wahid work closely with the engineering, design, and
management teams to ensure that projects are delivered on time, within budget, and
to the required quality standards.</p>
          </div>
        </div>
      </Slider>
    </div>
      );
}

export default SliderTeam
