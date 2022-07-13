import React from 'react'
import "./About.css";

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-desc'>
        <h3>
          let me tell you something about me
        </h3>
        <p>
          lorem ipsum fdsadasdasdasdasdas
        </p>
      </div>
      <div className='about-img'>
        <img 
        src="https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333__340.jpg" 
        alt='about'
        />
      </div>
    </div>
  )
}

export default About
