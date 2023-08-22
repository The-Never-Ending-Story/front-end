import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const CarouselPreview = ({ world, routeToWorld }) => {
  const { id, img, name, blurb } = world;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalContainerRef = useRef(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleMouseEnter = () => {
    setIsModalOpen(true);
  };

  const handleMouseLeave = (e) => {
    if (!modalContainerRef.current.contains(e.relatedTarget)) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="carousel-preview-container">
      <motion.img
        key={id}
        className="carousel-item"
        src={img.thumbnail}
        alt={`Image ${id}`}
        initial={{ opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.2 }}
        onClick={() => routeToWorld(id)}
        onMouseEnter={handleMouseEnter}
      />

      {isModalOpen && (
        <motion.div
          ref={modalContainerRef}
          className="modal"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          onClick={() => routeToWorld(id)}
          onMouseLeave={handleMouseLeave}
        >
          <p className="modal-name">{name}</p>
          <p>{blurb}</p>
        </motion.div>
      )}
    </div>
  );
};
