import React, {useState} from 'react'
import { CarouselPreview } from './CarouselPreview'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import './CarouselPreview.css'
import { motion } from 'framer-motion';

export const Carousel = () => {
  const displayedWorlds = useSelector((state) => state.root.discoveredWorlds).slice(19, 30);
  const [currentIndex, setCurrentIndex] = useState(0);

  // change this to arrays of filter()ed arrays
  const visibleImages = displayedWorlds.slice(currentIndex, currentIndex + 6);

  const handleNext = () => {
    setCurrentIndex(Math.min(currentIndex + 1, displayedWorlds.length - 6));
  };

  const handlePrev = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  return (
      <div className='carousel-wrapper'>
        <h2 className='genre'>Genre</h2>
        <div className='carousel'>
          {visibleImages.map((image, index) => (
            <motion.img
              key={index}
              className="carousel-item"
              src={image.img.thumbnail}
              alt={`Image ${currentIndex}`}
              whileHover={{ scale: 1.3 }} // Apply animation on tap/click
            />
          ))}
          { currentIndex !== 0 ? <button className='prev-button carousel-btn' onClick={handlePrev}>◀</button> : null }
          { currentIndex !== displayedWorlds.length - 6 ? <button className='next-button carousel-btn'  onClick={handleNext}>▶</button> : null }
        </div>
      </div>

  )
}
