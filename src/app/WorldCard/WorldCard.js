import './WorldCard.css'
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function WorldCard({ world }) {
  const { id, img, name, preview } = world
  console.log(world)
  return (
    <NavLink to={`/world/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <div className='world-card-container'>
        <img className='world-image' src={img}/>
        <div className='world-card-text-container'>
          <p className='world-name'>{name}</p>
          <p className='world-preview'>{preview}</p>
        </div>
      </div>
    </NavLink>
  )
}

export default WorldCard;

WorldCard.propTypes = {
  world: PropTypes.object.isRequired
}