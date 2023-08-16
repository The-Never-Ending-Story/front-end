import React, {useEffect} from "react";
import { Link, useHistory } from 'react-router-dom'
import { getRandomWorldData } from "../../apiCalls";
import { useSelector, useDispatch } from 'react-redux';
import { getDiscoveredWorlds, changeError } from '../rootSlice';
import {Error} from '../Error/Error'
import { animate, motion } from 'framer-motion'; 
import './WelcomePage.css'

export const WelcomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const displayedWorlds = useSelector((state) => state.root.discoveredWorlds);
  const worldPreviews = useSelector((state)=>state.root.worldPreviews)
  const error = useSelector((state) => state.root.error);

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
    console.log(worldPreviews)
  },[worldPreviews])

  const quickFadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay:.25,
        duration:3.75,
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
        duration: 2,
        staggerChildren: .75,
      }
    }
  }

  const animatedTitleText = ['Introducing ', 'Hyperloom']

  if (error) {
    return <Error />;
  };
// animate intro text, welcome menu itself upon arrival, and iterate through a selection of the backgrounds once the api call is made
  return (
    <main className="welcome-page">
      <motion.section className="welcome-menu" variants={quickFadeIn} initial='hidden' animate='visible'>
        <motion.div className="initial-text" variants={quickFadeIn} initial='hidden' animate='visible'>
          <motion.span variants={slowFadeIn} initial='hidden' animate='visible'>{animatedTitleText[0]}</motion.span >
          <motion.span variants={slowFadeIn} initial='hidden' animate='visible'>{animatedTitleText[1]}</motion.span>
        </motion.div>
        <motion.p className="intro-text" variants={slowFadeIn} initial='hidden' animate='visible'>
          {'HyperLoom uses the power of MidJourney and ChatGPT to create new and exciting worlds, complete with rich lore.'}
          {'Explore barely known worlds, or discover new domains:'}
        </motion.p>
        <motion.div className="button-container" variants={slowFadeIn} initial='hidden' animate='visible'>
          <Link to='/worlds'>
            <button className="menu-button">Explore</button>
          </Link>
          <button className="menu-button" onClick={()=> {discoverNewWorld()}}>Discover</button>
        </motion.div>
      </motion.section>
    </main>
  )
};