import React, {useState} from 'react'
import { MainPreview } from './MainPreview'
import { motion } from 'framer-motion';
import './MainPreview.css'

export const MainCarousel = ({worlds, routeToWorld}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const MainPreviews = worlds.map(world =>
                        <MainPreview 
                          routeToWorld={routeToWorld}
                          world={world}
                      />)

  const handleNext = () => {
    setCurrentIndex(Math.min(currentIndex + 1, worlds.length - 1));
  };

  const handlePrev = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };


  return (
    <div className='main-carousel'>
      { MainPreviews[currentIndex] }
      <div className='main-preview-button-container'>
      
        { currentIndex !== 0 ? <motion.button 
                                      className='carousel-btn' 
                                      onClick={handlePrev}
                                      whileHover={{ scale: 1.1 }}
                                    >◀</motion.button> 
                                  : null }
                                    
        { currentIndex !== worlds.length - 1 ? <motion.button
                                                  className='carousel-btn' 
                                                  onClick={handleNext}
                                                >▶</motion.button> 
                                              : null }
      </div>
    </div>
  )
}
