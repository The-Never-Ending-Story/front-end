import React from "react";
import { useHistory } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  const history = useHistory();
  const home = () => {
    history.push('/')
  }
  return (
    <header className='header-container' onClick={()=>home()}>
      <h2 className='header-text'>The HyperLoom</h2>
    </header>
  )
}