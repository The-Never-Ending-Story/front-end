import React, {useEffect} from "react";
import { Link, useHistory } from 'react-router-dom'
import { getRandomWorldData } from "../../apiCalls";
import { useSelector, useDispatch } from 'react-redux';
import { getDiscoveredWorlds, changeError } from '../rootSlice';
import {Error} from '../Error/Error'
import { motion } from 'framer-motion'; 
import './WelcomePage.css'

// Tasks for this refactor branch: animate intro text, welcome menu itself upon arrival, and iterate through a selection of the backgrounds once the api call is made

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
    // This is probably where we will begin a function that is responsible for rotating the background image on an interval, and giving a button in the background the id#, worldPreviews is based off of a new rootSlice state that is updated at the same time as the full discoveredWorlds array.
    console.log(worldPreviews)
  },[worldPreviews])

  // framer variables, can probably be put into a utility file so other components can use similar animations
  const fadeInRise = {
    hidden: { opacity: 0, marginTop:'30rem' },
    visible: {
      opacity: 1, 
      marginTop:'15rem',
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
  // This doesn't actually render as two separate strings yet, but I think it will be useful soon:
  const animatedTitleText = ['Introducing ', 'Hyperloom']

  if (error) {
    return <Error />;
  };

  return (
    <main className="welcome-page">
      <motion.section className="welcome-menu" variants={fadeInRise} initial='hidden' animate='visible'>
        <motion.div className="initial-text" variants={slowFadeIn} initial='hidden' animate='visible'>
          <motion.span variants={slowFadeIn} initial='hidden' animate='visible'>{animatedTitleText[0]}
          </motion.span>
          <motion.span variants={slowFadeIn} initial='hidden' animate='visible'>{animatedTitleText[1]}
          </motion.span>
        </motion.div>
        <motion.p className="intro-text" variants={slowFadeIn} initial='hidden' animate='visible'>
          HyperLoom uses the power of MidJourney and ChatGPT to create new and exciting worlds, complete with rich lore.
          <br/>
          <br/>
          Explore barely known worlds, or discover new domains:
        </motion.p>
        <motion.div className="button-container" variants={slowFadeIn} initial='hidden' animate='visible'>
          <Link to='/worlds'>
            <button className="menu-button">Explore</button>
          </Link>
          <button className="menu-button" onClick={()=> {discoverNewWorld()}}>
            Discover
          </button>
        </motion.div>
      </motion.section>
    </main>
  )
};