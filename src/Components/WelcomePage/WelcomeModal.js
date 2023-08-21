import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
// This is a component that is used for the about section, which should be available as a modal window on the homepage. This component should give a brief description of the app within ~5 seconds of the page opening, but can be animated.
const WelcomeModal = ({setAboutModal, aboutModalVisible}) => {
  return (
    <AnimatePresence>
      {aboutModalVisible && (
        <>
        <motion.p>HyperLoom uses the power of MidJourney and ChatGPT to create new and exciting worlds, complete with rich lore.</motion.p>
        <motion.p>Explore barely known worlds, or discover new domains:</motion.p>
        </>
      )}
    </AnimatePresence>
  )
}

export default WelcomeModal;