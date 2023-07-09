import React, {useEffect, useState} from "react";
import './WelcomePage.css'

export const WelcomePage = () => {
  return (
    <main>
    <section className="welcome-menu">
      <div className="initial-text">
        Welcome! This is a page to inform you of your options in this upcoming HyperLoom experience:
      </div>
      <p className="intro-text">
        Please select a starting place - either browse worlds that have been discovered thus far, or travel to a new part of this plane!
      </p>
      <button className="menu-button">Explore</button>
      <button className="menu-button">Discover</button>
    </section>
    </main>
  )
}