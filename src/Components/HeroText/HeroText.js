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
        delay: .25,
        duration: 4,
      }
    }
  };

  const fadeInMoveRightSlower = {
    hidden: { opacity: 0, left: '0rem'},
    visible: {
      opacity: 1,
      left: '5rem', 
      transition: {
        delay: 1.5,
        duration: 3,
      }
    }
  };
  
  return (
    <motion.div className='intro-box'>
      <motion.div className='intro-text'
        variants={fadeInMoveRight}
        initial='hidden'
        animate='visible'>
        <span className='introducing'>
          INTRODUCING
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

      <motion.span className='tag-text'
        variants={fadeInMoveRightSlower}
        initial='hidden'
        animate='visible'
      >
        Powered by ChatGPT and MidJourney AI
      </motion.span>
    </motion.div>
  );
};
