import React from 'react'
import "./About.css";

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-desc'>
        <h3>
          Permiteme contarte algo sobre mi
        </h3>
        <p>
          Soy una persona proactiva, autodidacta, en busca de nuevos desafios en el rubro IT, que tiene muchas ganas de aprender por sobre todas las cosas, con capacidad para adaptarse a diferentes situaciones siempre buscando alcanzar el mejor resultado.<br/>
          Me gusta trabajar en equipo aportando mis conocimientos y experiencias y por lo que aprendo de mis colegas y superiores.
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
