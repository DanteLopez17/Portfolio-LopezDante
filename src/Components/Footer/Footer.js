import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-info'>
        <p>Córdoba - Argentina</p>
      </div>
      <div className='footer-contact'>
        <h3>Contácteme</h3>
        <p>
        y pongamos manos a la obra
        </p>
        <h5>lopezzdante17@gmail.com</h5>
        <h5>(+549) 351 5732005</h5>

      </div>
      <div className='footer-sns'>
        <div className='design-by'>
          Desarrollado por Dante Lopez
        </div>
        <div className='sns-links'>
          <a href='https://www.linkedin.com/in/dante-lopez/' target='_blank'
            rel='noreferrer'>
            <i className='fab fa-linkedin linkedin'></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
