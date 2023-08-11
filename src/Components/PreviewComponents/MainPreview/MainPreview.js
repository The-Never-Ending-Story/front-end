import React from 'react'

export const MainPreview = (world) => {
  const { id, img, name, blurb } = world
  return (
    <NavLink to={`/world/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <div className='main-preview-container'>
        <img className='main-preview-image' src={img.thumbnail} alt ={name}/>
        <div className='main-preview-text-container'>
          <p className='main-preview-name'>{name}</p>
          <p className='main-preview-preview'>{blurb}</p>
        </div>
      </div>
    </NavLink>
  )
}
