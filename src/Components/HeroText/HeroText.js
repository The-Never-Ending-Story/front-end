import React from 'react'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom';
import './HeroText.css'

export const HeroText = () => {
  const history = useHistory()

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
      <motion.div
        className='intro-text'
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

      <motion.div
        className="keyframe-arrow"
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1}}
        transition={{delay: 4, type: 'tween', duration: 3}}
        onClick={() => history.push(`/worlds`)}
      >
            <span></span>
            <span></span>
            <span></span>
      </motion.div>

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
