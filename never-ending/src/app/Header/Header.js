import React from "react";
import { useHistory } from 'react-router-dom'
import './Header'

export const Header = () => {
  const history = useHistory();
  const home = () => {
    console.log('going home!')
    history.push('/')
  }
  return (
    <nav className='header-container' onClick={()=>home()}>
      <h2 className='header-text'>The HyperLoom</h2>
    </nav>
  )
}