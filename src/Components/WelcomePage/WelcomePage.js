import React, {useEffect} from "react";
import { Link, useHistory } from 'react-router-dom'
import { getRandomWorldData } from "../../apiCalls";
import { useSelector, useDispatch } from 'react-redux';
import { getDiscoveredWorlds } from '../rootSlice';
import './WelcomePage.css'

export const WelcomePage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const displayedWorlds = useSelector((state) => state.root.discoveredWorlds)

  const discoverNewWorld = ()=> {
    getRandomWorldData()
    .then(data=> {
      const addOne = [...displayedWorlds, data]
      dispatch(getDiscoveredWorlds(addOne))
      // console.log(data.id)
      history.push(`/world/${data.id}`)
    }).catch((error)=>{
      console.log('This line replaced by error handling')
    })
  }

  useEffect(()=> {
    console.log('useEffect:', displayedWorlds)
  }, [displayedWorlds])

  return (
    <main className="welcome-page">
      <section className="welcome-menu">
        <div className="initial-text">
          Introducing HyperLoom
        </div>
        <p className="intro-text">
          HyperLoom uses the power of MidJourney and ChatGPT to create new and exciting worlds, complete with rich lore. 

          Explore barely known worlds, or discover new domains:
        </p>
        <div className="button-container">
          <Link to='/worlds'>
            <button className="menu-button">Explore</button>
          </Link>
          <button className="menu-button" onClick={()=> {discoverNewWorld()}}>Discover</button>
        </div>
      </section>
    </main>
  )
}