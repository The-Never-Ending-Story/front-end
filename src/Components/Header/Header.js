import React from "react";
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/hl_logo.png'
import './Header.css'

export const Header = () => {
const {pathname} = useLocation();

if (pathname !== '/' && pathname !== '/worlds') {  
  return (
    <nav className='header-container'>
      <Link to='/'>
        <img className ='header-logo'src={logo} alt='hyper loom'/>
      </Link>
      <Link to='/worlds'>
        <button className="header-button">Explore</button>
      </Link>
    </nav>
  )
} else {
  return (
  <nav className='header-container'>
    <Link to='/'>
    <img className ='header-logo'src={logo} alt='hyper loom'/>
    </Link>
  </nav>
  )
}
}