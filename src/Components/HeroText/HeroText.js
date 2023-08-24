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

    <div className='intro-box'>
      this is a test
    </div>
    // <motion.div className='intro-box' variants={fadeInMoveRight} initial='hidden' animate='visible'>
    //   <motion.span className='intro-text'>
    //     Welcome to HyperLoom
    //   </motion.span>
    // </motion.div>
  )
}
