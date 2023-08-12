import React from 'react'
import './GridPreview.css'

export const GridPreview = ({world}) => {
  const { id, img, name, blurb } = world
  return (
    <div className='grid-preview-container' key ={id}>
      <img className="grid-preview-image" src={img.thumbnail}/>
      <div className='grid-preview-modal'></div>
    </div>
  )
}
