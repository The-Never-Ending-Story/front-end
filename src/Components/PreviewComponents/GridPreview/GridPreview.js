import React from 'react';
import { motion } from 'framer-motion';

export const GridPreview = ({world, routeToWorld}) => {
  const { id, imgs, name, blurb } = world;
  
  return (
    <div className='grid-preview-container' key ={id}>
      <motion.img 
        className="grid-preview-image"
        src={imgs.thumbnails[1]}
        initial={{ opacity: 0, scale: 0.7}}
        whileInView={{ opacity: 1, scale: 1}}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.2 }}
        onClick={() => routeToWorld(id)}
      />
      <div className='grid-preview-modal'></div>
    </div>
  );
};
