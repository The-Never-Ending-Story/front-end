import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const CarouselPreview = ({ world, routeToWorld }) => {
  const { id, img, name, blurb } = world;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMouseInside, setIsMouseInside] = useState(false);
  const modalContainerRef = useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsMouseInside(true);
      setIsModalOpen(true);
    };

    const handleMouseLeave = () => {
      setIsMouseInside(false);
    };

    modalContainerRef.current.addEventListener('mouseenter', handleMouseEnter);
    modalContainerRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
    };

  }, [isModalOpen]);

  return (
    <div 
      className="carousel-preview-container"
      ref={modalContainerRef} 
    >
      <motion.img
        key={id}
        className="carousel-item"
        src={img.thumbnail}
        alt={blurb}
        initial={{ opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.15 }}
        onClick={() => routeToWorld(id)}
      />
      {isModalOpen && isMouseInside && (
        <motion.div
          className="modal"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          onClick={() => routeToWorld(id)}
        >
          <p className="modal-name">{name}</p>
          <p className='modal-blurb'>{blurb}</p>
        </motion.div>
      )}
    </div>
  );
};
