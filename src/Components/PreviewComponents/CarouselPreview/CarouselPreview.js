import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

export const CarouselPreview = ({world, routeToWorld}) => {
  const { id, img, name, blurb} = world,
        [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="carousel-preview-container">
      <motion.img
        key={id}
        className="carousel-item"
        src={img.thumbnail}
        alt={`Image ${id}`}
        initial={{ opacity: 0, scale: 0.7}}
        transition={{ duration: 0.2 }}
        whileInView={{ opacity: 1, scale: 1}}
        whileHover={{ scale: 1.2}} 
        onClick={() => routeToWorld(id)}
        onMouseEnter={handleOpenModal}
        onMouseLeave={handleCloseModal}
      />

      {isModalOpen && (
        <motion.div
          transition= {{ delay: 0.1, type:'just' }}
          className="modal"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
        >
          <p className='modal-name'>{name}</p>
          <p>{blurb}</p>
        </motion.div>
      )}
    </div>
  )
};
