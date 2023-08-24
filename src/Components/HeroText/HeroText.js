import React from 'react'
import { motion } from 'framer-motion'
import './HeroText.css'

export const HeroText = () => {
  
  const fadeInMoveRight = {
    hidden: { opacity: 0, left: '0rem'},
    visible: {
      opacity: 1,
      left: '5rem', 
      transition: {
        delay:.25,
        duration:5,
      }
    }
  };
  
  return (
    <motion.div className='intro-box' variants={fadeInMoveRight} initial='hidden' animate='visible'>
      <motion.div className='intro-text'>
        <span className='introducing'>
          Introducing
        </span> 
        <span className='hero-title'>
          HYPERLOOM
        </span>
      </motion.div>

      <div className="keyframe-arrow">
            <span></span>
            <span></span>
            <span></span>
      </div>
    </motion.div>
  );
};
