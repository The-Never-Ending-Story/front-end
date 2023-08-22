import './HeroImageSlider.css'
import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { LoadingIcon } from '../LoadingIcon/LoadingIcon';
import { Error } from '../Error/Error';

export const HeroImageSlider = () => {

  const slideIds = [97, 143, 91, 66, 9, 28, 84, 121, 137, 76, 103, 100]
  const slides = useSelector((state) => state.root.discoveredWorlds.filter((world) => {
    return slideIds.includes(world.id)    
  }))
  const [currentSlide, setCurrentSlide] = useState(0)
  const error = useSelector((state) => state.root.error);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(currentSlide === 11) {
        setCurrentSlide(0)
      } else {
        setCurrentSlide(currentSlide+1)
      }
    }, 4000)
    return ()=> clearTimeout(timer)
  }, [currentSlide])
  
  if (slides.length === 0) {
    return <LoadingIcon />
  } else if (error) {
    return <Error />
  } else if (slides.length > 0) {
    const heroImageStyle = {
      backgroundImage: `url(${slides[currentSlide].img.landscape})`
    }
    return (
      <div className='slider-container'>
        <div className='slider-div' style={heroImageStyle}>
        <h1>HYPERLOOM LOGO</h1>
        </div>
      </div>
    )
  }
}