import React, {useState, useEffect} from 'react';
import { CarouselPreview } from './CarouselPreview';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import './CarouselPreview.css';
import { motion } from 'framer-motion';

export const Carousel = ({worlds, routeToWorld}) => {
  // const displayedWorlds = useSelector((state) => state.root.discoveredWorlds).slice(19, 30);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let numberToDisplay;

  if ( windowWidth < 1000) {
    numberToDisplay = 3;
  } else if (windowWidth < 1250) {
    numberToDisplay = 4;
  } else if (windowWidth < 1550) {
    numberToDisplay = 5;
  } else {git 
    numberToDisplay = 6;
  }

  // change this to arrays of filter()ed arrays
  const visibleImages = worlds.slice(currentIndex, currentIndex + numberToDisplay);

  const handleNext = () => {
    setCurrentIndex(Math.min(currentIndex + 1, worlds.length - numberToDisplay));
  };

  const handlePrev = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  return (
      <div className='carousel-wrapper'>
        <h2 className='genre'>Genre</h2>
        <div className='carousel'>

          { visibleImages.map(world => (
            <CarouselPreview world ={world} routeToWorld={routeToWorld}/>
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
