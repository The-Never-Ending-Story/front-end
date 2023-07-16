import React from "react";
import './Location.css'

export const Location = ({img, imgAlt, name, climate, lore}) =>{

  return (
    <div className="single-det-container">
      <div>
        <img className="single-det-img" src={img} alt={imgAlt} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>Climate: {climate}</p>
        <p>{lore}</p>
      </div>
    </div>
  )
}