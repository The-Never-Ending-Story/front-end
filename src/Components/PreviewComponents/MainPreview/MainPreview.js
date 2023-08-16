import React from 'react';


export const MainPreview = ({world, routeToWorld}) => {
  const { id, img, name, blurb } = world;

  return (
      <div className='main-preview-container' 
          style={{backgroundImage: `url(${img.landscape})`}}
          alt ={name}
          onClick={() => routeToWorld(id)}
          key={id}
      >
        <p className='main-preview-name'>{name}</p>
        <p className='main-preview-blurb'>{blurb}</p>
      </div>
  )
};
