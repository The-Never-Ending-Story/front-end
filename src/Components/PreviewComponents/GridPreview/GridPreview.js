import React, {useState, useEffect, useRef} from 'react';
import { motion } from 'framer-motion';

export const GridPreview = ({world, routeToWorld}) => {
  const { id, img, name, blurb, magicTechnology } = world;
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
    <div className='grid-preview-container' 
      key={id} 
      ref={modalContainerRef}
    >
      <motion.img 
        className="grid-preview-image"
        src={img.thumbnail}
        alt={blurb}
        initial={{ opacity: 0, scale: 0.7}}
        whileInView={{ opacity: 1, scale: 1}}
        transition={{ duration: 0.5 }}
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
          <p className='modal-stat'>Magic Level: {magicTechnology.magicLvl}</p>
          <p className='modal-stat'>Tech Level: {magicTechnology.techLvl}</p>
        </motion.div>
      )}
    </div>
  );
};
