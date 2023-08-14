import React from 'react';
import { motion } from 'framer-motion';

export const GridPreview = ({world, routeToWorld}) => {
  const { id, img, name, blurb } = world;
  
  return (
    <motion.div className='grid-preview-container' key ={id}>
      <motion.img 
        className="grid-preview-image"
        src={img.thumbnail}
        initial={{ opacity: 0, scale: 0.7}}
        whileInView={{ opacity: 1, scale: 1}}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.2 }}
        onClick={() => routeToWorld(id)}
      />
      <div className='grid-preview-modal'></div>
    </motion.div>
  )
};
