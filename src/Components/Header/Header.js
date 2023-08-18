import React from "react";
import { Link, useLocation, useHistory } from 'react-router-dom'
import { getRandomWorldData } from "../../apiCalls";
import { useSelector, useDispatch } from 'react-redux';
import { getDiscoveredWorlds, changeError } from '../rootSlice';
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
        <Link to='/'>
          HyperLoom
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
    </nav>
  )
}
