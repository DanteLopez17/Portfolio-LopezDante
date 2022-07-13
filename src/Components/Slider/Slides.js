import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src:"https://cdn.pixabay.com/photo/2013/01/29/00/47/google-76517__340.png",
    alt:"Google",
    desc:"Google",
  },
  {
    src:"https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737__340.jpg",
    alt:"Social",
    desc:"Social",
  },
  {
    src:"https://cdn.pixabay.com/photo/2013/01/29/09/09/facebook-76532__340.png",
    alt:"Facebook",
    desc:"Facebook",
  }
]

const slides = slidesInfo.map(slide => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt}/>
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
))

export default slides;