import React from 'react'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.css";

const Slider = () => {
  return (
    <div className='carousel-container'>
      <div className='carousel-title'>
        <h2>My Projects</h2>
      </div>

      <Carousel 
        plugins={['infinite', 'arrows', 'centered', {
          resolve : slidesToShowPlugin,
          options: {
            numberOfSlides: 3,
          }
        }]}
        animationSpeed={200}
        offset={10}
        itemWidth={400}
        slides={Slides}
        breakpoints={{
          960: {
            plugins: [ 'infinite', 'centered',
              {
                resolve:slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                  arrows: false,
                  itemWidth: 250
                }
              }
            ]
          }
        }}
      />

    </div>
  )
}

export default Slider
