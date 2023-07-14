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
      Explore barely known worlds, or discover new domains:
      </p>
      <div className="button-container">
        <Link to='/worlds'>
        <button className="menu-button">Explore</button>
        </Link>
        <Link to='/world/2'>
        <button className="menu-button">Discover</button>
        </Link>
      </div>
    </section>
    </main>
  )
}