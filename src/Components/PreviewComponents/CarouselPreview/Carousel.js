import React, {useState, useEffect} from 'react';
import { CarouselPreview } from './CarouselPreview';
import './CarouselPreview.css';
import { motion } from 'framer-motion';

export const Carousel = ({filteredWorlds, routeToWorld, category}) => {
  const [currentIndex, setCurrentIndex] = useState(0),
        [windowWidth, setWindowWidth] = useState(window.innerWidth),
        [numberToDisplay, setDisplay] = useState(0),
        [worlds, setWorlds] = useState(filteredWorlds),
        visibleImages = worlds ? worlds.slice(currentIndex, currentIndex + numberToDisplay) : [] ;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    if (windowWidth < 600) {
      setDisplay(1);
    } else if (windowWidth < 720) {
      setDisplay(2)
    } else if (windowWidth < 1100) {
      setDisplay(3);
    } else if (windowWidth < 1350) {
      setDisplay(4);
    } else if (windowWidth < 1650) {
      setDisplay(4);
    } else {
      setDisplay(5);
    };

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);


  const handleNext = () => {
    setCurrentIndex(Math.min(currentIndex + 1, worlds.length - numberToDisplay));
  };

  const handlePrev = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  return (
      <div className='carousel-wrapper'>
        <h2 className='genre'>{category}</h2>
        <div className='carousel'>

          { visibleImages.map(world => (
            <CarouselPreview world ={world} routeToWorld={routeToWorld} key={world.id}/>
          ))}

          { currentIndex !== 0 ? <motion.button 
                                    className='prev-button carousel-btn' 
                                    onClick={handlePrev}
                                    // whileHover={{ scale: 1.1 }}
                                  >◀</motion.button> 
                                : null }
                                  
          { currentIndex !== worlds.length - 6 ? <motion.button
                                                    className='next-button carousel-btn' 
                                                    onClick={handleNext}
                                                  >▶</motion.button> 
                                                : null }
        </div>
      </div>
  )
};
