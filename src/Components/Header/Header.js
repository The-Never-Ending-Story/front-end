import React from "react";
import { Link, useLocation, useHistory } from 'react-router-dom'
import { getRandomWorldData } from "../../apiCalls";
import { useSelector, useDispatch } from 'react-redux';
import { getDiscoveredWorlds, changeError } from '../rootSlice';
import './Header.css';
import { motion} from "framer-motion";

export const Header = () => {
  const dispatch = useDispatch(),
        history = useHistory(),
        displayedWorlds = useSelector((state) => state.root.discoveredWorlds);

  const discoverNewWorld = ()=> {
    getRandomWorldData()
    .then(data=> {
      const addOne = [...displayedWorlds, data]
      dispatch(getDiscoveredWorlds(addOne))
      history.push(`/world/${data.id}`)
    }).catch((error)=>{
      dispatch(changeError(error))
    });
  };

  const {pathname} = useLocation();

  return (
    <motion.nav className='header-container'
      initial={{ opacity: 0 }}
      whileInView={{opacity: 1}}
      transition={{
        delay: pathname.includes('/world') ? .5 : 4,
        type: 'tween',
        duration: pathname.includes('/world') ? 1 : 3}}
    >
      <Link to='/' className="title-box">
        <h1 className="title">HyperLoom</h1>
      </Link>
      <div className='buttons-container'>
        {pathname === '/worlds' && (
          <button className="header-button" onClick={discoverNewWorld}>Discover
          </button>
        )}
        {pathname.includes('/world/') && (
          <>
            <Link to='/worlds'>
              <button className="header-button">Explore</button>
            </Link>
            <button className="header-button" onClick={discoverNewWorld}>Discover
            </button>
          </>
        )}
      </div>
    </motion.nav>
  );
};
