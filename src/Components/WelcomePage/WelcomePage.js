import React, {useEffect} from "react";
import { motion } from 'framer-motion'; 
import { Link, useHistory } from 'react-router-dom'
import { getRandomWorldData } from "../../apiCalls";
import { useSelector, useDispatch } from 'react-redux';
import { getDiscoveredWorlds, changeError } from '../rootSlice';
import {Error} from '../Error/Error'
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

  const sentence = {
    hidden: {opacity:0},
    visible: {
      opacity: 1,
      transition: {
        delay:.25,
        duration:3.75,
        staggerChildren: 0.25,
      }
    }
  }
  const introText ='HyperLoom uses the power of MidJourney and ChatGPT to create new and exciting worlds, complete with rich lore. Explore barely known worlds, or discover new domains:'
  const letter = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        delay: 3.5,
        duration: 3,
      }
    }
  }

  if (error) {
    return <Error />;
  };
// animate intro text, welcome menu itself upon arrival, and iterate through a selection of the backgrounds once the api call is made
  return (
    <main className="welcome-page">
      <motion.section className="welcome-menu" variants={sentence} initial='hidden' animate='visible'>
        <motion.div className="initial-text" variants={sentence} initial='hidden' animate='visible'>
          Introducing HyperLoom
        </motion.div>
        <motion.p className="intro-text" variants={letter} initial='hidden' animate='visible'>
          {introText.split('').map((char, index)=> {
            return (
            <motion.span key={char+'-'+index}>
              {char}
            </motion.span>
            )
          })}
        </motion.p>
        <div className="button-container">
          <Link to='/worlds'>
            <button className="menu-button">Explore</button>
          </Link>
          <button className="menu-button" onClick={()=> {discoverNewWorld()}}>Discover</button>
        </div>
      </motion.section>
    </main>
  )
};