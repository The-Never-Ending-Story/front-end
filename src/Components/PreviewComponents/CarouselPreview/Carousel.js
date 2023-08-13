import React, {useState} from 'react';
import { CarouselPreview } from './CarouselPreview';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import './CarouselPreview.css';
import { motion } from 'framer-motion';


export const Carousel = ({worlds, routeToWorld}) => {
  // const displayedWorlds = useSelector((state) => state.root.discoveredWorlds).slice(19, 30);
  const [currentIndex, setCurrentIndex] = useState(0);

  // change this to arrays of filter()ed arrays
  const visibleImages = worlds.slice(currentIndex, currentIndex + 7);

  const handleNext = () => {
    setCurrentIndex(Math.min(currentIndex + 1, worlds.length - 7));
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
                                    whileHover={{ scale: 1.1 }}
                                  >◀</motion.button> 
                                : null }
                                  
          { currentIndex !== worlds.length - 7 ? <motion.button
                                                    className='next-button carousel-btn' 
                                                    onClick={handleNext}
                                                  >▶</motion.button> 
                                                : null }
        </div>
      </div>
  )
};
