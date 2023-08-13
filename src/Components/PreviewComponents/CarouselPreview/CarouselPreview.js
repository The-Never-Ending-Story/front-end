import React, {useState} from 'react';
import { motion } from 'framer-motion';

export const CarouselPreview = ({world, routeToWorld}) => {
  const { id, img, name } = world;
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, scale: 1}}
        whileHover={{ scale: 1.2, transition: { delay: 0.4 }}} 
        onClick={() => routeToWorld(id)}
        onMouseEnter={handleOpenModal}
        onMouseLeave={handleCloseModal}
      />

      {isModalOpen && (
        <motion.div
          transition= {{ delay: 0.5 }}
          className="modal"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
        >
          <p>{name}</p>
        </motion.div>
      )}
    </div>
  )
};
