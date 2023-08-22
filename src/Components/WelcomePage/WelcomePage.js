import React, {useState} from "react";
import { Link, useHistory } from 'react-router-dom'
import { getRandomWorldData } from "../../apiCalls";
import { useSelector, useDispatch } from 'react-redux';
import { getDiscoveredWorlds, changeError } from '../rootSlice';
import { Error } from '../Error/Error'
import { motion } from 'framer-motion'; 
import './WelcomePage.css'
import { About } from "../About/About";
import {HeroImageSlider} from '../HeroImageSlider/HeroImageSlider'

export const WelcomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const displayedWorlds = useSelector((state) => state.root.discoveredWorlds);
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

  const fadeInRise = {
    hidden: { opacity: 0},
    visible: {
      opacity: 1, 
      transition: {
        delay:.25,
        duration:3,
        staggerChildren: 0.25,
      }
    }
  }

  const revealFromLeft = {
    hidden: {opacity: 0, marginRight:'10rem'},
    visible: {
      opacity: 1,
      marginRight:'3rem',
      transition: {
        delay: .15,
        duration: 3
      }
    }
  }
  if (error) {
    return <Error />;
  };

  return (
    <main className="welcome-page" >
      <HeroImageSlider/>
      <motion.div className='first-box' variants={fadeInRise} initial='hidden' animate='visible'>
        <motion.span className='first-intro-text' >
          Introducing Hyperloom
        </motion.span>
        <div className="button-container">
          <Link to='/worlds'>
            <button className="menu-button">Explore</button>
          </Link>
          <button className = 'menu-button'onClick={()=>setAboutModal(!aboutModalVisible)}>?</button>
          <button className="menu-button" onClick={()=> {discoverNewWorld()}}>Discover</button>
        </div>
      </motion.div>
        {aboutModalVisible && 
        <motion.span 
        className='second-intro-text' 
        variants={revealFromLeft}
        initiate='hidden' 
        animate='visible'>
          Explore new worlds built with ChatGPT and MidJourney, rich with inhabitants, histories, and futures yet unknown...
        </motion.span>
        }
      <section className='welcome-bottom'>
      <About discoverNewWorld={discoverNewWorld}/>
      </section>
    </main>
  )
};