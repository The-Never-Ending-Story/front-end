import React from 'react';
import { NavLink } from 'react-router-dom';

export const MainPreview = (world) => {
  const { id, img, name, blurb } = world;
  
  return (
    <NavLink to={`/world/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <div className='main-preview-container' style={{backgroundImage: img.thumbnail}} alt ={name}>
        <div className='main-preview-text-container'>
          <p className='main-preview-name'>{name}</p>
          <p className='main-preview-preview'>{blurb}</p>
        </div>
      </div>
    </NavLink>
  )
};
