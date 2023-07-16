import React from "react";
import './Inhabitant.css'

export const Inhabitant = ({ img, imgAlt, name, alignment, politics, lore }) => {
  return (
    <div className="single-det-container">
      <div>
        <img className="single-det-img" src={img} alt={imgAlt} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>Alignment: {alignment}</p>
        <p>Politics: {politics}</p>
        <p>{lore}</p>
      </div>
    </div>
  )
}