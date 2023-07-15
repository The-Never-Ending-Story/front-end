import React from "react";
import './Character.css'

export const Character = ({img, imgAlt, name, age, location, species, alignment, lore}) =>{

  return (
    <div className="single-det-container">
      <div>
      <img className="single-det-img" src={img} alt={imgAlt} />
      </div>
      <div>
      <h3>{name}</h3>
      <p>Species: {species}</p>
      <p>Alignment: {alignment}</p>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <p>{lore}</p>
      </div>
    </div>
  )
}