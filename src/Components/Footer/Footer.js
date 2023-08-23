import './Footer.css';
import React, { useRef, useEffect, useState } from 'react';


export const Footer = () => {

  const [rect, setRect] = useState(null)
  const teamContainerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if(teamContainerRef.current) {
        const newRect = teamContainerRef.current.getBoundingClientRect()
        setRect(newRect)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='footer-container'>
      <div 
      className='team-container' 
      ref={teamContainerRef}
      style={{
        opacity: rect.top >= 575 ? .10 : 1 
      }}
      >
        <h1>The Team</h1>
        <div className='team-section'>
          <div className='front-end-container'>
            <h2>Frontend:</h2>
            <div className='dev-container'>
              <p>Adam Meza</p>
              <p>LinkedIn</p>
              <p>GitHub</p>
            </div>
            <div className='dev-container'>
              <p>Shane Misra</p>
              <p>LinkedIn</p>
              <p>GitHub</p>
            </div>
            <div className='dev-container'>
              <p>Priscilla Paxton</p>
              <p>LinkedIn</p>
              <p>GitHub</p>
            </div>
            <div className='dev-container'>
              <p>Sharie Trachsel</p>
              <p>LinkedIn</p>
              <p>GitHub</p>
            </div>
          </div>
          <div className='front-end-container'>
            <h2>Backend:</h2>
            <div className='dev-container'>
              <p>Andrew Bowman</p>
              <p>LinkedIn</p>
              <p>GitHub</p>
            </div>
            <div className='dev-container'>
              <p>Sean Cowans</p>
              <p>LinkedIn</p>
              <p>GitHub</p>
            </div>
            <div className='dev-container'>
              <p>Branden Ge</p>
              <p>LinkedIn</p>
              <p>GitHub</p>
            </div>
            <div className='dev-container'>
              <p>Sharie Trachsel</p>
              <p>LinkedIn</p>
              <p>GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};