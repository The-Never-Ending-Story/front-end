import React from "react";
import './Inhabitant.css'

export const Inhabitant = ({img, imgAlt, name, alignment, politics, lore}) =>{

  return (
    <div>
      <img src={img} alt={imgAlt} />
      <h3>{name}</h3>
      <p>Alignment: {alignment}</p>
      <p>Politics: {politics}</p>
      <p>{lore}</p>
    </div>
  )
}