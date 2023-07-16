import React from "react";
import { Link, useParams } from 'react-router-dom'
import logo from '../../assets/hl_logo.png'
import './Header.css'

export const Header = () => {
const {id} = useParams()
console.log(id)
  return (
    <nav className='header-container'>
      <Link to='/worlds'>
        <button className="header-button">Explore</button>
      </Link>
      <Link to='/'>
        <img className ='header-logo'src={logo} alt='hyper loom'/>
      </Link>
      <Link to={`/world/`}>
          <button className="header-button"></button>
      </Link>
    </nav>
  )
}