import React from 'react';
import { motion } from 'framer-motion';

export const MainPreview = ({world, routeToWorld}) => {
  const { id, img, name, blurb } = world;

  return (
      <div className='main-preview-container' 
          style={{backgroundImage: `url(${img.landscape})`}}
          alt ={name}
          onClick={() => routeToWorld(id)}
          key={id}
      >
        <motion.p 
          className='main-preview-name'
          initial={{ opacity: 0, scale: 0.7}}
          transition={{ duration: 1.0 }}
          whileInView={{ opacity: 1, scale: 1}}
        >{name}</motion.p>
        <motion.p 
          className='main-preview-blurb'
          initial={{ opacity: 0, scale: 0.7}}
          transition={{ duration: 1.0 }}
          whileInView={{ opacity: 1, scale: 1}}
        >{blurb}</motion.p>
      </div>
  );
};
