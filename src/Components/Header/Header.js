import React from "react";
import { Link, useLocation, useHistory } from 'react-router-dom'
import { getRandomWorldData } from "../../apiCalls";
import { useSelector, useDispatch } from 'react-redux';
import { getDiscoveredWorlds, changeError } from '../rootSlice';
import logo from '../../assets/hl_logo.png'
import './Header.css'

export const Header = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const displayedWorlds = useSelector((state) => state.root.discoveredWorlds)

  const discoverNewWorld = ()=> {
    getRandomWorldData()
    .then(data=> {
      const addOne = [...displayedWorlds, data]
      dispatch(getDiscoveredWorlds(addOne))
      history.push(`/world/${data.id}`)
    }).catch((error)=>{
      dispatch(changeError(error))
    })
  }

  const {pathname} = useLocation();

  return (
    <nav className='header-container'>
      <div className='logo-container'>
        <Link to='/'>
          <img className ='header-logo'src={logo} alt='hyper loom'/>
        </Link>
      </div>
      <div className='buttons-container'>
        {pathname === '/worlds' && (
          <button className="header-button" onClick={discoverNewWorld}>Create</button>
        )}
        {pathname.includes('/world/') && (
          <>
            <Link to='/worlds'>
              <button className="header-button">Explore</button>
            </Link>
            <button className="header-button" onClick={discoverNewWorld}>Create</button>
          </>
        )}
      </div>
    </nav>
  )
}
