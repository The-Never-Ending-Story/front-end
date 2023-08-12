import React, {useState} from 'react'
import { CarouselPreview } from './CarouselPreview'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import './CarouselPreview.css'
import { motion } from 'framer-motion';

export const Carousel = () => {
  const displayedWorlds = useSelector((state) => state.root.discoveredWorlds);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleImages = displayedWorlds.slice(currentIndex, currentIndex + 4);

  const handleNext = () => {
    setCurrentIndex(Math.min(currentIndex + 1, displayedWorlds.length - 4));
  };

  const handlePrev = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  return (
      <div className='carousel'>
        {visibleImages.map((image, index) => (
          <motion.img
            key={index}
            className="carousel-item"
            src={image.img.thumbnail}
            alt={`Image ${index + currentIndex}`}
            whileTap={{ scale: 1.1 }} // Apply animation on tap/click
          />
        ))}
        <button className='prev-button carousel-btn' onClick={handlePrev}>◀</button>
        <button className='next-button carousel-btn'  onClick={handleNext}>▶</button>
      </div>
  )
}
