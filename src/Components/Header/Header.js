import React from "react";
import { Link } from 'react-router-dom'
import logo from '../../assets/hl_logo.png'
import single from '../../assets/single.png'
import saved from '../../assets/saved.png'
import './Header.css'

export const Header = () => {

  return (
    <nav className='header-container'>
      <Link to='/worlds'>
      <img className ='header-button explore'src={saved} alt='discover button'/>
      </Link>
      <Link to='/'>
      <img className ='header-logo'src={logo} alt='hyper loom'/>
      </Link>
      <Link to='world/2'>
      <img className ='header-button discover'src={single} alt='explore button'/>
      </Link>
    </nav>
  )
}