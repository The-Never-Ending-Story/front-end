import React from "react";
import { useHistory, useParams } from 'react-router-dom'
import logo from '../../assets/hl_logo.png'
import single from '../../assets/single.png'
import saved from '../../assets/saved.png'
import './Header.css'

export const Header = () => {
  const history = useHistory();
  const { id } = useParams();
  console.log(id)
  const home = () => {
    history.push('/')
  }
  const explore = () => {
    history.push('/worlds')
  }
  const discover = (id) => {
    history.push(`/world/${id}`)
  }
  return (
    <nav className='header-container'>
      <img className ='header-button explore'src={saved} onClick={()=> explore()} alt='discover button'/>
      <img className ='header-logo'src={logo} onClick={()=> home()} alt='hyper loom'/>
      <img className ='header-button discover'src={single} onClick={()=> discover(1)} alt='explore button'/>
    </nav>
  )
}