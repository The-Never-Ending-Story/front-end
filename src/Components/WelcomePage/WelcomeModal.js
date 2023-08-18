import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
// This is a component that is used for the about section, which should be available as a modal window on the homepage. This component should give a brief description of the app within ~5 seconds of the page opening, but can be animated.
const WelcomeModal = ({setAboutModal, aboutModalVisible}) => {
  return (
    <AnimatePresence>
      {aboutModalVisible && (
        <>
        <p>HyperLoom uses the power of MidJourney and ChatGPT to create new and exciting worlds, complete with rich lore.</p>
        <p>Explore barely known worlds, or discover new domains:</p>
        </>
      )}
    </AnimatePresence>
  )
}

export default WelcomeModal;