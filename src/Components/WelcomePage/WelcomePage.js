import React, {useEffect, useState} from "react";
import { Link, useHistory } from 'react-router-dom'
import { getRandomWorldData } from "../../apiCalls";
import { useSelector, useDispatch } from 'react-redux';
import { getDiscoveredWorlds, changeError } from '../rootSlice';
import WelcomeModal from './WelcomeModal'
import { Error } from '../Error/Error'
import { motion } from 'framer-motion'; 
import './WelcomePage.css'

export const WelcomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const displayedWorlds = useSelector((state) => state.root.discoveredWorlds);
  const worldPreviews = useSelector((state)=>state.root.worldPreviews)
  const error = useSelector((state) => state.root.error);
  const [aboutModalVisible, setAboutModal] = useState(false)

  const discoverNewWorld = ()=> {
    getRandomWorldData()
    .then(data=> {
      const addOne = [...displayedWorlds, data];
      dispatch(getDiscoveredWorlds(addOne));
      history.push(`/world/${data.id}`);
    }).catch((error)=>{
      dispatch(changeError(error));
    })
  };

  useEffect(()=> {
    // This is probably where we will begin a function that is responsible for rotating the background image on an interval, and giving a button in the background the id#, worldPreviews is based off of a new rootSlice state that is updated at the same time as the full discoveredWorlds array.
    console.log(worldPreviews)
  },[worldPreviews])


  const fadeInRise = {
    hidden: { opacity: 0, marginTop:'30rem' },
    visible: {
      opacity: 1, 
      marginTop:'4rem',
      transition: {
        delay:.25,
        duration:3,
        staggerChildren: 0.25,
      }
    }
  }
  const slowFadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 3,
        duration: 3,
        staggerChildren: 1.75,
      }
    }
  };

  if (error) {
    return <Error />;
  };

  return (
    <main className="welcome-page" >
      <motion.div className='first-box' variants={fadeInRise} initial='hidden' animate='visible'>
        <motion.span className='first-intro-text'>
          Introducing Hyperloom
        </motion.span>
      </motion.div>
      <motion.div className='second-box' variants={slowFadeIn} initial='hidden' animate='visible'>
        <motion.span className='second-intro-text'>
          Explore new worlds built with ChatGPT and MidJourney, rich with inhabitants, histories, and futures yet unknown...
        </motion.span>
      </motion.div>
    </main>
  )
};