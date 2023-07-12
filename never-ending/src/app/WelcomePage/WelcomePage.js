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
    <section className="welcome-menu">
      <div className="initial-text">
        Welcome to the HyperLoom!
      </div>
      <p className="intro-text">
      Explore barely known worlds, or discover new domains:
      </p>
      <div className="button-container">
        <button className="menu-button" onClick={()=> explore()}>Explore</button>
        <button className="menu-button" onClick={()=> discover(1)}>Discover</button>
      </div>
    </section>
    </main>
  )
}