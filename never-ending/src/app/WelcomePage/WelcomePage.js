import React from "react";
import { useHistory } from 'react-router-dom'
import './WelcomePage.css'

export const WelcomePage = () => {
  const history = useHistory();

  const explore = () => {
    history.push('/worlds')
  }
  const discover = (id) => {
    history.push(`/world/${id}`)
  }
  return (
    <main className="welcome-page">
    <div className="slider-thumb"></div>
    <section className="welcome-menu">
      <div className="initial-text">
        Welcome! This is a page to inform you of your options in this upcoming HyperLoom experience:
      </div>
      <p className="intro-text">
        Please select a starting place - either browse worlds that have been discovered thus far, or travel to a new part of this plane!
      </p>
      <div className="button-container">
        <button className="menu-button" onClick={()=> explore()}>Explore</button>
        <button className="menu-button" onClick={()=> discover(1)}>Discover</button>
      </div>
    </section>
    </main>
  )
}