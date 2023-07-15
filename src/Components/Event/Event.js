import React from "react";
import './Event.css'

export const Event = ({img, imgAlt, name, time, age,lore}) =>{

  return (
    <div>
      <img src={img} alt={imgAlt} />
      <h3>{name}</h3>
      <p>{`${time} in the age of ${age}`}</p>
      <p>{lore}</p>
    </div>
  )
}
