import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src:"https://cdn-icons-png.flaticon.com/64/5968/5968267.png",
    alt:"Html5",
  },
  {
    src:"https://cdn-icons-png.flaticon.com/64/5968/5968242.png",
    alt:"Css3",
  },
  {
    src:"https://cdn-icons-png.flaticon.com/64/5968/5968292.png",
    alt:"JavaScript",
  },
  {
    src:"https://cdn-icons-png.flaticon.com/64/5968/5968672.png",
    alt:"Bootstrap",
  },
  {
    src:"https://cdn-icons-png.flaticon.com/64/718/718064.png",
    alt:"Api",
  },
  {
    src:"https://cdn-icons-png.flaticon.com/64/2748/2748383.png",
    alt:".NET",
  },
  {
    src:"https://cdn-icons-png.flaticon.com/64/6132/6132221.png",
    alt:"C#",
  },
  {
    src:"https://cdn-icons-png.flaticon.com/64/226/226777.png",
    alt:"Java",
  },
  {
    src:"https://cdn-icons-png.flaticon.com/64/5968/5968306.png",
    alt:"SqlServer",
  },
  {
    src:"https://cdn-icons-png.flaticon.com/64/919/919836.png",
    alt:"MySql",
  },
  {
    src:"https://cdn-icons-png.flaticon.com/64/5968/5968342.png",
    alt:"PostgreSql",
  },
  {
    src:"https://cdn-icons-png.flaticon.com/64/733/733553.png",
    alt:"Github",
  },
  {
    src:"https://cdn-icons-png.flaticon.com/64/5968/5968853.png",
    alt:"GitLab",
  },
  {
    src:"https://cdn-icons-png.flaticon.com/64/2620/2620481.png",
    alt:"Scrum",
  },
  {
    src:"https://cdn-icons-png.flaticon.com/64/4727/4727387.png",
    alt:"Kanban",
  }
]

const slides = slidesInfo.map(slide => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt}/>
  </div>
))

export default slides;