import React from "react";
import { useHistory } from 'react-router-dom'
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

  if (error) {
    return <Error />;
  };
  
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
  }

  return (
    <main className="welcome-page" >
      <HeroImageSlider/>
      <motion.div className='intro-box' variants={fadeInMoveRight} initial='hidden' animate='visible'>
        <motion.span className='intro-text'>
          Welcome to HyperLoom
        </motion.span>
      </motion.div>
      <section className='welcome-bottom'>
      <About discoverNewWorld={discoverNewWorld}/>
      </section>
    </main>
  )
};