import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import aboutImage from '../../assets/about-image.png'

export const About = ({ discoverNewWorld }) => {
  return (
    
    <section className="about">
      <section className='about-info'>
        <h2 className='about-title'>About</h2>
        <p className="about-text">
          HyperLoom is world building application that allows users to explore magical realms. It uses the power of MidJourney and ChatGPT to create new and exciting worlds, complete with rich lore. Explore barely known worlds, or discover new domains:
        </p>
        <div className="button-container">
          <Link to='/worlds'>
            <button className="about-button">Explore</button>
          </Link>
          <button className="about-button" onClick={() => { discoverNewWorld() }}>Discover</button>
        </div>
      </section>
      <img className='about-image' src={aboutImage} alt='etheral woman, Hyper Looms mascot'/>
    </section>
  )
}
