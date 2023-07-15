import React from "react";
import './Location.css'

export const Location = ({img, imgAlt, name, climate, lore}) =>{

  return (
    <div>
      <img src={img} alt={imgAlt} />
      <h3>{name}</h3>
      <p>Climate: {climate}</p>
      <p>{lore}</p>
    </div>
  )
}