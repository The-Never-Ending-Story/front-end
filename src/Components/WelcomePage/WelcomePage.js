import React from "react";
import { Link } from 'react-router-dom'
import './WelcomePage.css'

export const WelcomePage = () => {

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
          <Link to='/world/2'>
          <button className="menu-button">Create</button>
          </Link>
        </div>
      </section>
    </main>
  )
}