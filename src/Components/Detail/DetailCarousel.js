import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import './Details.css';

export const DetailCarousel = ({content}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [content]);

  const handleNext = () => {
    setCurrentIndex(Math.min(currentIndex + 1, content.length - 1));
  };

  const handlePrev = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  return (
    <>
      {content[currentIndex]}
      { currentIndex !== 0 ? <motion.button 
                                  className='details-prev' 
                                  onClick={handlePrev}
                              >◀</motion.button> 
                            : null }
                                
      { currentIndex !== content.length - 1 ? <motion.button
                                                className='details-next' 
                                                onClick={handleNext}
                                              >▶</motion.button> 
                                            : null }
    </>
  );
};
