import './HeroImageSlider.css'
import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { LoadingIcon } from '../LoadingIcon/LoadingIcon';
import { Error } from '../Error/Error';

export const HeroImageSlider = () => {
  const slideIds = [26, 87, 188, 19, 93, 28, 84, 32, 137, 76, 103, 100]
  const slides = useSelector((state) => state.root.discoveredWorlds.filter((world) => {
    return slideIds.includes(world.id)    
  })
)
  
  const [currentSlide, setCurrentSlide] = useState(0)
  const error = useSelector((state) => state.root.error);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(currentSlide === 11) {
        setCurrentSlide(0)
      } else {
        setCurrentSlide(currentSlide + 1)
      }
    }, 5000)
    return ()=> clearTimeout(timer)
  }, [currentSlide])
  
  if (slides.length === 0) {
    return <LoadingIcon />
  } else if (error) {
    return <Error />
  } else if (slides.length > 0) {
    return (
      <div className='slider-container' >
        {slides.map((slide, i) => {
          return (
            <div 
              className='slider-div'
              key={i}
              style={{
                backgroundImage: `url(${slide.img.landscape})`,
                opacity: currentSlide === i ? 1 : 0
              }}
            />
          )
        })}

      </div>
      )
    }
  }
